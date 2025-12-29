# Claude Chrome Extension - Technical Deep Dive

> A comprehensive analysis of how Anthropic built their official Claude Chrome extension for browser automation and computer use.

**Extension Version:** 1.0.31
**Manifest Version:** 3
**Analysis Date:** 2025-09-30

---

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Key Components](#key-components)
  - [Service Worker](#service-worker)
  - [Accessibility Tree System](#accessibility-tree-system)
  - [Agent Visual Indicators](#agent-visual-indicators)
  - [Offscreen Document](#offscreen-document)
  - [Side Panel UI](#side-panel-ui)
  - [Content Scripts](#content-scripts)
- [How It's Used](#how-its-used)
- [Technical Implementation Details](#technical-implementation-details)
- [Key Takeaways](#key-takeaways)

---

## Overview

The Claude Chrome extension is a production-grade Manifest V3 extension that enables Claude AI to see and interact with web pages. It's essentially **"Computer Use" for Chrome**, allowing Claude to:

- 🔍 See web pages (via accessibility trees + screenshots)
- 🖱️ Control the browser (via Chrome DevTools Protocol)
- ⚙️ Automate multi-step workflows
- 📑 Work across multiple tabs
- ⏰ Execute scheduled tasks

**Core Capabilities:**

- Browser automation through Chrome DevTools Protocol
- Page understanding via accessibility tree generation
- Tab orchestration and grouping
- Visual feedback system
- Scheduled task execution
- Audio notifications

---

## Architecture

### Multiple Execution Contexts

```
┌─────────────────────────────────────────────────────────┐
│                    SERVICE WORKER                        │
│  • Background orchestration                              │
│  • Message routing                                       │
│  • Tab management                                        │
│  • Scheduled tasks                                       │
└─────────────────────────────────────────────────────────┘
                         ↕ Messages
┌──────────────────┐  ┌──────────────────┐  ┌─────────────┐
│   SIDE PANEL     │  │ CONTENT SCRIPTS  │  │  OFFSCREEN  │
│   (React App)    │  │  • Accessibility │  │  DOCUMENT   │
│   • User UI      │  │  • Indicators    │  │  • Audio    │
│   • Chat         │  │  • Injection     │  │  Playback   │
└──────────────────┘  └──────────────────┘  └─────────────┘
```

### File Structure

```
1.0.31_0/
├── manifest.json                    # Extension configuration
├── service-worker-loader.js         # Service worker entry
├── sidepanel.html                   # Side panel UI
├── offscreen.html/js                # Audio playback context
├── blocked.html                     # Safety blocking page
├── options.html                     # Settings page
└── assets/
    ├── service-worker.ts-*.js       # Background logic
    ├── sidepanel-*.js               # React UI bundle
    ├── accessibility-tree.js-*.js   # Page analysis
    ├── agent-visual-indicator.js-*  # Visual feedback
    ├── content-script.ts-*.js       # Claude.ai integration
    └── [other modules]              # Supporting code
```

---

## Key Components

### Service Worker

**File:** `service-worker.ts-CrbzEtei.js`

**Core Responsibilities:**

#### 1. Custom User-Agent Injection

```javascript
// Uses declarativeNetRequest API
{
  id: 1,
  action: {
    type: "MODIFY_HEADERS",
    requestHeaders: [{
      header: "User-Agent",
      operation: "SET",
      value: "claude-browser-extension/1.0.31 ..."
    }]
  },
  condition: {
    urlFilter: "https://api.anthropic.com/*",
    resourceTypes: ["XMLHTTPREQUEST", "OTHER"]
  }
}
```

#### 2. Side Panel Management

```javascript
chrome.sidePanel.setOptions({
  tabId: tabId,
  path: `sidepanel.html?tabId=${encodeURIComponent(tabId)}`,
  enabled: true,
});
chrome.sidePanel.open({ tabId: tabId });
```

#### 3. Tab Orchestration System

- Groups tabs using Chrome's `tabGroups` API
- Tracks "main" tabs vs "secondary" tabs
- Manages orphaned groups after crashes
- Implements heartbeat mechanism for health checks

#### 4. Scheduled Task Execution

```javascript
// Chrome Alarms API for recurring tasks
chrome.alarms.onAlarm.addListener(async (alarm) => {
  if (alarm.name.startsWith("task_")) {
    const task = await getScheduledTask(alarm.name);
    await executeTask(task);
  }
});
```

#### 5. Message Routing

Handles cross-context communication:

- `PANEL_OPENED` - Panel initialization
- `POPULATE_INPUT_TEXT` - Pre-fill prompts
- `STOP_AGENT` - Stop execution
- `EXECUTE_SCHEDULED_PROMPT` - Run scheduled task
- `SWITCH_TO_MAIN_TAB` - Navigate to main tab
- `PLAY_NOTIFICATION_SOUND` - Audio feedback

---

### Accessibility Tree System

**File:** `accessibility-tree.js-BYuwdz4C.js`

This is the **brilliant core** of how Claude "sees" web pages.

#### Global Function Injection

```javascript
window.__generateAccessibilityTree = function (options) {
  // Generates structured text representation of page
};
```

#### How It Works

**1. Element Filtering** (Multi-stage)

```javascript
function shouldIncludeElement(element, options) {
  // Remove hidden elements
  if (!isVisible(element)) return false;

  // Check viewport visibility
  const rect = element.getBoundingClientRect();
  if (!isInViewport(rect)) return false;

  // Identify interactive elements
  if (isInteractive(element)) return true;

  // Find structural elements
  if (isStructural(element)) return true;

  return false;
}
```

**2. ARIA Role Detection**

```javascript
function getRoleFromElement(element) {
  // Priority: explicit role attribute
  if (element.getAttribute("role")) return role;

  // Fall back to semantic HTML mapping
  const tagMap = {
    a: "link",
    button: "button",
    input: getInputRole(element),
    select: "combobox",
    textarea: "textbox",
    "h1-h6": "heading",
    // ...
  };

  return tagMap[element.tagName.toLowerCase()] || "generic";
}
```

**3. Label Extraction** (Priority order)

```javascript
function getLabelForElement(element) {
  // 1. aria-label
  if (element.getAttribute("aria-label")) return ariaLabel;

  // 2. placeholder
  if (element.getAttribute("placeholder")) return placeholder;

  // 3. title/alt
  if (element.getAttribute("title")) return title;

  // 4. Associated <label>
  const label = document.querySelector(`label[for="${element.id}"]`);
  if (label) return label.textContent;

  // 5. Direct text content
  return element.textContent.trim();
}
```

**4. Element Reference System**

```javascript
window.__claudeElementMap = {}; // WeakRef storage
window.__claudeRefCounter = 0;

// Assign unique ref to each element
const ref = `ref_${++__claudeRefCounter}`;
__claudeElementMap[ref] = new WeakRef(element);
```

**5. Output Format**

```
- button "Submit" [ref=ref_123] (x=450,y=300) id="submit-btn" type="submit"
- textbox [ref=ref_124] (x=400,y=250) placeholder="Enter email"
- heading "Welcome" [ref=ref_125] (x=200,y=100)
- link "Learn more" [ref=ref_126] (x=100,y=500) href="/about"
```

#### Filter Modes

- `interactive`: Only clickable/focusable elements
- `all`: Everything visible and meaningful

#### Why This Is Clever

- **Lightweight**: Text format, not full DOM or heavy screenshots
- **Structured**: Claude can reason about elements logically
- **Targetable**: Each element has coordinates for clicking
- **Memory-safe**: WeakRef prevents memory leaks
- **Efficient**: Only includes relevant, visible elements

---

### Agent Visual Indicators

**File:** `agent-visual-indicator.js-B4EzxHr9.js`

Two visual feedback systems for user awareness:

#### 1. Active Agent Indicator

**When Claude is actively working:**

```css
/* Pulsing orange border */
@keyframes claude-pulse {
  0% {
    box-shadow: inset 0 0 10px rgba(217, 119, 87, 0.5);
  }
  50% {
    box-shadow: inset 0 0 15px rgba(217, 119, 87, 0.7);
  }
  100% {
    box-shadow: inset 0 0 10px rgba(217, 119, 87, 0.5);
  }
}
```

**"Stop Claude" Button:**

```html
<button id="claude-agent-stop-button">
  <svg><!-- Stop icon --></svg>
  <span>Stop Claude</span>
</button>
```

- Fixed position at bottom center
- Slides up with animation
- Always accessible during execution

#### 2. Static Tab Group Indicator

**For secondary tabs in group:**

```html
<div id="claude-static-indicator">
  <!-- Claude logo -->
  <span>Claude is active in this tab group</span>
  <!-- Divider -->
  <button id="chat-button"><!-- Chat icon --></button>
  <button id="close-button"><!-- Close icon --></button>
</div>
```

**Heartbeat Protocol:**

```javascript
// Every 5 seconds, secondary tabs check main tab status
setInterval(async () => {
  const response = await chrome.runtime.sendMessage({
    type: "STATIC_INDICATOR_HEARTBEAT",
  });

  if (!response?.success) {
    hideStaticIndicator(); // Main tab no longer active
  }
}, 5000);
```

**State Management:**

- `SHOW_AGENT_INDICATORS` - Show active indicators
- `HIDE_AGENT_INDICATORS` - Hide when done
- `HIDE_FOR_TOOL_USE` - Temporarily hide during screenshots
- `SHOW_AFTER_TOOL_USE` - Restore after tool use

---

### Offscreen Document

**File:** `offscreen.js`

**Problem:** Service workers can't play audio (autoplay restrictions)

**Solution:** Offscreen document with Web Audio API

```javascript
const audioContext = new AudioContext();

async function playAudioWithWebAudioAPI(audioUrl, volume) {
  // Fetch audio file
  const response = await fetch(audioUrl);
  const arrayBuffer = await response.arrayBuffer();

  // Decode audio data
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

  // Create audio graph
  const source = audioContext.createBufferSource();
  const gainNode = audioContext.createGain();

  source.buffer = audioBuffer;
  gainNode.gain.value = volume;

  // Connect: source → gain → destination
  source.connect(gainNode);
  gainNode.connect(audioContext.destination);

  // Play
  if (audioContext.state === "suspended") {
    await audioContext.resume();
  }
  source.start(0);
}
```

**Why This Works:**

- Offscreen documents persist in background
- Web Audio API bypasses autoplay restrictions
- Created on-demand when needed
- Handles notification sounds seamlessly

---

### Side Panel UI

**File:** `sidepanel.html`

**React application** for user interaction:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Claude Side Panel</title>
    <script type="module" src="/assets/sidepanel-Dsr3pY60.js"></script>
    <link rel="stylesheet" href="/assets/Main-CkLRz-1U.css" />
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

**Key Services:**

- `SentryService` - Error tracking and monitoring
- `TabOrchestrationService` - Tab group management
- `SavedPromptsService` - Task scheduling and storage

**Query Parameters:**

- `?tabId=123` - Associated tab for context
- `?mode=window` - Popup window mode for tasks
- `?sessionId=xxx` - Task session tracking
- `?skipPermissions=true` - Skip permission prompts

**Build System:** Vite with code splitting and module federation

---

### Content Scripts

Three injection strategies:

#### 1. Main Content Script

```json
{
  "js": ["assets/content-script.ts-Bwa5rY9t.js"],
  "matches": ["https://claude.ai/*"],
  "run_at": "document_end"
}
```

- Only on claude.ai domains
- Integration with main Claude site
- Runs after DOM is ready

#### 2. Accessibility Tree

```json
{
  "all_frames": true,
  "js": ["assets/accessibility-tree.js-BYuwdz4C.js"],
  "matches": ["<all_urls>"],
  "run_at": "document_start"
}
```

- Injected into **all frames** on **all URLs**
- Runs immediately at document start
- Makes `window.__generateAccessibilityTree` globally available

#### 3. Visual Indicators

```json
{
  "all_frames": false,
  "js": ["assets/agent-visual-indicator.js-B4EzxHr9.js"],
  "matches": ["<all_urls>"],
  "run_at": "document_idle"
}
```

- Top frame only
- Runs when page is idle (after load)
- Manages overlay UI elements

---

## How It's Used

### User Experience Flow

```
┌─────────────────────────────────────────────────┐
│ 1. USER OPENS SIDE PANEL                        │
│    • Press Cmd+E or click extension icon        │
│    • Side panel slides in (500px wide)          │
└─────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────┐
│ 2. USER TYPES COMMAND                           │
│    "Find the cheapest flight to Tokyo"          │
│    "Fill out this form with my info"            │
│    "Extract all product prices"                 │
└─────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────┐
│ 3. VISUAL FEEDBACK                              │
│    • Orange pulsing border appears              │
│    • "Stop Claude" button shows at bottom       │
│    • Tab added to orange "Claude" group         │
└─────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────┐
│ 4. PAGE UNDERSTANDING                           │
│    • Accessibility tree generated               │
│    • All buttons, links, inputs cataloged       │
│    • Each element gets ref_123 identifier       │
│    • Screenshots captured for visual context    │
└─────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────┐
│ 5. DEBUGGER ATTACHMENT                          │
│    • chrome.debugger.attach(tabId)              │
│    • Full Chrome DevTools Protocol access       │
│    • Can now control mouse, keyboard, etc.      │
└─────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────┐
│ 6. ACTION EXECUTION                             │
│    • Click: Input.dispatchMouseEvent(x, y)      │
│    • Type: Input.dispatchKeyEvent("text")       │
│    • Scroll: Runtime.evaluate("window.scroll")  │
│    • Navigate: Page.navigate(url)               │
└─────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────┐
│ 7. VERIFICATION                                 │
│    • Take screenshot after action               │
│    • Regenerate accessibility tree              │
│    • Confirm expected changes occurred          │
└─────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────┐
│ 8. RESULTS DISPLAY                              │
│    • Show findings in side panel                │
│    • Update tab group status                    │
│    • Detach debugger, remove indicators         │
└─────────────────────────────────────────────────┘
```

### Real-World Examples

#### Example 1: Find Cheap Hotels

```
User: "Find cheap hotels in Paris"

Execution:
1. Claude navigates to Google
2. Accessibility tree shows: textbox "Search" [ref_45] (x=400, y=150)
3. Clicks search box at coordinates (400, 150)
4. Types "cheap hotels paris"
5. Finds and clicks: button "Google Search" [ref_78] (x=450, y=200)
6. Takes screenshot of results page
7. Analyzes new accessibility tree for hotel links
8. Extracts top results and prices
9. Reports findings in side panel
```

#### Example 2: Fill Contact Form

```
User: "Fill out this contact form"

Execution:
1. User is already on contact form page
2. Claude generates accessibility tree:
   - textbox "Name" [ref_12] (x=300, y=200)
   - textbox "Email" [ref_13] (x=300, y=250)
   - textbox "Message" [ref_14] (x=300, y=300)
   - button "Submit" [ref_15] (x=350, y=400)
3. For each field:
   a. Click field coordinates
   b. Type appropriate content
   c. Verify text was entered
4. Click submit button
5. Verify form submission (check for success message)
6. Report completion to user
```

#### Example 3: Multi-Tab Price Comparison

```
User: "Compare prices for this laptop across 3 stores"

Execution:
1. Extract product name from current page
2. Open store1.com in tab 1 (main tab, pulsing border)
3. Open store2.com in tab 2 (grouped, static indicator)
4. Open store3.com in tab 3 (grouped, static indicator)
5. All tabs show: "Claude is active in this tab group"
6. For each tab:
   a. Search for product
   b. Find price element
   c. Extract price
7. Return to main tab
8. Present comparison table in side panel
```

### What Claude Can See

✅ **All visible text on page**
✅ **Button/link labels and positions**
✅ **Form fields** (with placeholders, labels, values)
✅ **Page structure** (headings, navigation, sections)
✅ **Screenshots** (visual appearance for verification)
✅ **Element coordinates** for precise clicking
✅ **ARIA roles and accessibility info**
✅ **Dynamic content** (can regenerate tree after changes)

### What Claude Can Do

✅ **Click any element** (buttons, links, etc.)
✅ **Type text** into inputs
✅ **Select dropdown options**
✅ **Scroll pages** (up, down, to element)
✅ **Navigate** between pages
✅ **Open new tabs**
✅ **Fill forms** (text, checkboxes, radio buttons)
✅ **Extract information** from structured data
✅ **Monitor page changes** (regenerate tree)
✅ **Take screenshots** for verification

### What Claude Cannot Do

❌ **Download files** (requires user interaction)
❌ **Access blocked domains** (safety restrictions)
❌ **Interact with browser chrome** (only page content)
❌ **Access pages without permissions**
❌ **Bypass CAPTCHA/bot detection** (intentionally)

---

## Technical Implementation Details

### Chrome DevTools Protocol (CDP) Usage

The debugger permission enables full browser control:

```javascript
// Attach debugger to tab
await chrome.debugger.attach({ tabId: tabId }, "1.3");

// Click element at coordinates
await chrome.debugger.sendCommand(
  { tabId: tabId },
  "Input.dispatchMouseEvent",
  {
    type: "mousePressed",
    x: 450,
    y: 300,
    button: "left",
    clickCount: 1,
  }
);

// Type text
await chrome.debugger.sendCommand({ tabId: tabId }, "Input.dispatchKeyEvent", {
  type: "char",
  text: "Hello World",
});

// Capture screenshot
const screenshot = await chrome.debugger.sendCommand(
  { tabId: tabId },
  "Page.captureScreenshot",
  { format: "png" }
);

// Detach when done
await chrome.debugger.detach({ tabId: tabId });
```

### Tab Orchestration

**Tab Group Management:**

```javascript
// Create Claude tab group (orange color)
const groupId = await chrome.tabs.group({
  tabIds: [mainTabId],
});

await chrome.tabGroups.update(groupId, {
  title: "Claude",
  color: "orange",
});

// Add secondary tabs to group
await chrome.tabs.group({
  tabIds: [secondaryTabId],
  groupId: groupId,
});
```

**Main/Secondary Tab Hierarchy:**

- **Main tab** = Active work location (pulsing indicators)
- **Secondary tabs** = Related pages (static indicators)
- Secondary tabs can "switch to main" via button click

**Heartbeat Protocol:**

```javascript
// Secondary tabs check if main tab is still active
const isMainAlive = await chrome.runtime.sendMessage({
  type: "STATIC_INDICATOR_HEARTBEAT",
});

if (!isMainAlive) {
  // Main tab closed or inactive, hide indicator
  hideStaticIndicator();
}
```

### Storage Strategy

```javascript
chrome.storage.local.set({
  // Scheduled prompts/tasks
  savedPrompts: [{
    id: "prompt_123",
    command: "Daily news",
    prompt: "Get top tech stories",
    url: "https://news.ycombinator.com",
    repeatType: "daily",
    enabled: true
  }],

  // Task queue
  scheduledTasks: [...],

  // Update flag
  updateAvailable: false,

  // Target tab for operations
  [SESSION_TARGET_TAB_ID]: 456
});
```

### Permission Model

```json
{
  "permissions": [
    "sidePanel", // Side panel UI
    "storage", // Data persistence
    "activeTab", // Current tab access
    "scripting", // Dynamic script injection
    "debugger", // CDP access for automation
    "tabGroups", // Tab organization
    "tabs", // Tab management
    "alarms", // Scheduled execution
    "notifications", // User notifications
    "system.display", // Display information
    "webNavigation", // Navigation tracking
    "declarativeNetRequestWithHostAccess", // Header modification
    "offscreen" // Audio playback
  ],
  "host_permissions": ["<all_urls>"] // Access all websites
}
```

### Content Security Policy

```
script-src 'self';
object-src 'self';
connect-src 'self'
  https://api.anthropic.com
  https://claude.ai
  https://console.anthropic.com
  https://statsig.com
  https://api.segment.io
  https://*.ingest.us.sentry.io
  https://api.honeycomb.io;
style-src 'self' 'unsafe-inline';
img-src 'self' data: https:;
font-src 'self' data:;
```

### Scheduled Tasks

**Chrome Alarms API:**

```javascript
// Create recurring alarm
await chrome.alarms.create("task_daily_news", {
  when: Date.now() + 1000,
  periodInMinutes: 1440, // Daily
});

// Listen for alarm
chrome.alarms.onAlarm.addListener(async (alarm) => {
  if (alarm.name === "task_daily_news") {
    await executeScheduledTask(alarm.name);
  }
});
```

**Task Execution Flow:**

```javascript
async function executeScheduledTask(taskId) {
  // 1. Create new tab with target URL
  const tab = await chrome.tabs.create({
    url: task.url || "about:blank",
    active: true,
  });

  // 2. Create popup window with side panel
  const sessionId = generateSessionId();
  const window = await chrome.windows.create({
    url: chrome.runtime.getURL(
      `sidepanel.html?mode=window&sessionId=${sessionId}`
    ),
    type: "popup",
    width: 500,
    height: 768,
  });

  // 3. Wait for page load
  await waitForTabLoad(tab.id);

  // 4. Send prompt to side panel
  chrome.runtime.sendMessage({
    type: "EXECUTE_SCHEDULED_PROMPT",
    prompt: task.prompt,
    taskName: task.name,
    runLogId: generateRunLogId(),
    windowSessionId: sessionId,
  });
}
```

### Security Features

#### Blocked Pages

```html
<!-- blocked.html -->
<p>
  The content on this page isn't available<br />
  when Claude is active for safety reasons.
</p>
```

Prevents access to sensitive pages during automation:

- Banking sites
- Password managers
- Payment forms
- Internal tools

#### Domain Verification

- Checks domain before/after actions
- Detects unexpected navigation
- Category-based blocklist system

#### Permission Checks

- Explicit user consent for sensitive operations
- `skipPermissions` flag for scheduled tasks only
- Always-visible stop button

---

## Key Takeaways

### For Engineers

1. **Accessibility Tree > Full DOM**

   - Lightweight text representation
   - Only includes meaningful, interactive elements
   - Structured format Claude can reason about
   - Much more efficient than sending full HTML

2. **WeakRef Prevents Memory Leaks**

   - Content scripts run indefinitely
   - Element references must not prevent garbage collection
   - `WeakRef` allows elements to be collected when removed from DOM

3. **Offscreen Documents Solve Audio Restrictions**

   - Service workers can't play audio
   - Offscreen documents have audio context
   - Web Audio API bypasses autoplay restrictions

4. **Tab Groups Enable Multi-Tab Workflows**

   - Visual organization of related tabs
   - Heartbeat protocol maintains state
   - Main/secondary hierarchy for coordination

5. **DeclarativeNetRequest > WebRequest**

   - Manifest V3 replacement for webRequest API
   - Modify headers without intercepting requests
   - More performant and privacy-preserving

6. **Message Passing Coordinates Everything**

   - Service worker as central message router
   - Async communication between contexts
   - Return `true` from message listener for async responses

7. **CDP Provides Full Browser Control**

   - Chrome DevTools Protocol via debugger permission
   - Same API that DevTools uses
   - Mouse, keyboard, screenshots, navigation, etc.

8. **React for UI, Vanilla JS for Extension APIs**
   - Side panel is modern React app
   - Background/content scripts use browser APIs directly
   - Clear separation of concerns

### For Product Managers

1. **Visual Feedback is Critical**

   - Pulsing border shows active automation
   - Stop button always accessible
   - Static indicators for secondary tabs
   - User always knows what's happening

2. **Safety First**

   - Blocked pages for sensitive content
   - Explicit stop controls
   - Permission prompts for sensitive operations
   - Domain verification

3. **Scheduled Automation**

   - Recurring tasks without user intervention
   - Daily, weekly, monthly, annual schedules
   - Autonomous execution in popup windows

4. **Multi-Tab Coordination**
   - Compare prices across stores
   - Aggregate data from multiple sources
   - Organized tab grouping

### For AI Researchers

1. **Accessibility Tree as Observation Space**

   - More structured than pixels
   - Less noisy than raw HTML
   - Contains action affordances (clickable elements with coordinates)
   - Human-readable format

2. **Hybrid Vision Approach**

   - Text-based accessibility tree for reasoning
   - Screenshots for visual verification
   - Combines symbolic and visual understanding

3. **Action Space via CDP**

   - Discrete actions (click, type, scroll)
   - Continuous parameters (x, y coordinates)
   - Verifiable outcomes (screenshot after action)

4. **Multi-Step Task Execution**
   - Plan → Execute → Verify → Replan
   - Handle dynamic page changes
   - Recover from errors

---

## Performance Optimizations

1. **WeakRef for Element Tracking**

   - No memory leaks in long sessions
   - Automatic cleanup when elements removed

2. **Lazy Accessibility Tree Generation**

   - Only generated when needed
   - Cached between actions when possible

3. **Filter Modes**

   - "interactive" mode: Only clickable elements
   - Reduces tree size significantly
   - Faster processing and reasoning

4. **Offscreen Audio**

   - Non-blocking notification sounds
   - Doesn't interrupt main thread

5. **Code Splitting**

   - Vite module federation
   - Only loads needed modules
   - Faster initial load

6. **Efficient Heartbeat**
   - 5-second intervals
   - Only for secondary tabs
   - Prevents unnecessary message passing

---

## Manifest Configuration

```json
{
  "manifest_version": 3,
  "name": "Claude",
  "version": "1.0.31",
  "description": "Meet Claude for Chrome (Research Preview) - LIMITED ACCESS",

  "action": {
    "default_title": "Open Claude"
  },

  "background": {
    "service_worker": "service-worker-loader.js",
    "type": "module"
  },

  "side_panel": {
    "default_path": "sidepanel.html"
  },

  "commands": {
    "toggle-side-panel": {
      "description": "Toggle Claude side panel",
      "suggested_key": {
        "default": "Ctrl+E",
        "mac": "Command+E"
      }
    }
  },

  "permissions": [
    "sidePanel",
    "storage",
    "activeTab",
    "scripting",
    "debugger",
    "tabGroups",
    "tabs",
    "alarms",
    "notifications",
    "system.display",
    "webNavigation",
    "declarativeNetRequestWithHostAccess",
    "offscreen"
  ],

  "host_permissions": ["<all_urls>"],

  "content_scripts": [
    {
      "matches": ["https://claude.ai/*"],
      "js": ["assets/content-script.ts-Bwa5rY9t.js"],
      "run_at": "document_end"
    },
    {
      "matches": ["<all_urls>"],
      "js": ["assets/accessibility-tree.js-BYuwdz4C.js"],
      "all_frames": true,
      "run_at": "document_start"
    },
    {
      "matches": ["<all_urls>"],
      "js": ["assets/agent-visual-indicator.js-B4EzxHr9.js"],
      "all_frames": false,
      "run_at": "document_idle"
    }
  ],

  "externally_connectable": {
    "matches": ["https://claude.ai/*"]
  }
}
```

---

## Conclusion

The Claude Chrome extension is a **production-grade implementation of browser automation** that gives an AI agent the ability to see and interact with web pages. The key innovations are:

1. **Accessibility tree** as efficient page representation
2. **Chrome DevTools Protocol** for precise control
3. **Visual feedback system** for user trust
4. **Tab orchestration** for complex workflows
5. **Scheduled automation** for recurring tasks

It's essentially **Computer Use for Chrome** - a sophisticated system that enables Claude to actually **use** the browser like a human would, not just read from it.

---

## Credits

**Developed by:** Anthropic
**Extension ID:** `fcoeoabgfenejglbffodgkkbkcdhcgfn`
**Version Analyzed:** 1.0.31
**Analysis Author:** Technical Deep Dive
**Date:** 2025-09-30

---

## Additional Resources

- [Chrome Extensions Documentation](https://developer.chrome.com/docs/extensions/)
- [Chrome DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/)
- [Accessibility Tree Concepts](https://developer.mozilla.org/en-US/docs/Glossary/Accessibility_tree)
- [Manifest V3 Migration Guide](https://developer.chrome.com/docs/extensions/migrating/)

---

_This document is for educational and research purposes. All code examples are simplified for clarity._
