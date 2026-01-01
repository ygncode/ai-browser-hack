# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a research and reference repository analyzing AI browser automation extensions. It contains:
- **ai-browser-controller/** - Git submodule: open-source AI browser automation Chrome extension
- **claude-extension/** - Archived Claude Chrome extension v1.0.36 (reference only)
- **manus-extension/** - Archived Manus AI extension v0.0.40 (reference only)
- **docs/** - Technical analysis documents for both extensions

## Build Commands

The ai-browser-controller extension uses no build step:
```bash
# Development: Load public/ folder as unpacked extension in Chrome
cd ai-browser-controller
npm run dev  # Prints instructions

# Build: Copy public/ to dist/
npm run build

# Clean
npm run clean
```

To load the extension: Go to `chrome://extensions/`, enable Developer Mode, click "Load unpacked", and select the `ai-browser-controller/public/` folder.

## Architecture

### Chrome Extension Multi-Context Pattern

```
SERVICE WORKER (Background)
├── Tab orchestration & tab groups
├── AI API communication (OpenAI, Anthropic, Google, OpenRouter, Ollama)
├── Chrome DevTools Protocol (CDP) for browser control
└── Message routing between contexts
         ↕ chrome.runtime messaging
SIDE PANEL UI ←→ CONTENT SCRIPTS ←→ PAGE DOM
(chat interface)   (accessibility tree, visual indicators)
```

### Key Files (ai-browser-controller/public/)

| File | Purpose |
|------|---------|
| `service-worker.js` (1,572 lines) | Background orchestration, AI calls, CDP control |
| `sidepanel.js` (936 lines) | Chat UI, model selection, user approval workflow |
| `content-scripts/accessibility-tree.js` | Page element extraction, ref mapping with WeakRef |
| `content-scripts/visual-indicator.js` | Orange pulsing border during automation |
| `options.js` | API key and provider configuration |

### Core Patterns

1. **Accessibility Tree** - Lightweight text representation of interactive page elements:
   ```
   button "Submit" [ref_123] (x=450,y=300) id="submit-btn"
   textbox [ref_124] placeholder="Email"
   ```

2. **WeakRef Element Mapping** - Elements stored as WeakRefs to prevent memory leaks in long sessions

3. **CDP Browser Control** - Uses `chrome.debugger` API for mouse/keyboard simulation, screenshots, and navigation

4. **Provider-Agnostic AI** - User provides their own API keys; supports multiple LLM providers

## Git Submodule

The ai-browser-controller is a submodule:
```bash
# Clone with submodule
git clone --recurse-submodules <repo-url>

# Update submodule
git submodule update --remote ai-browser-controller

# After modifying submodule
cd ai-browser-controller
git add . && git commit -m "message" && git push
cd ..
git add ai-browser-controller && git commit -m "Update submodule"
```

## Reference Documentation

- `/docs/claude-extension/CLAUDE_EXTENSION_ANALYSIS.md` - 1,125 lines analyzing Claude's extension architecture
- `/docs/manus-extension/MANUS_EXTENSION_ANALYSIS.md` - 992 lines analyzing Manus's server-controlled approach
