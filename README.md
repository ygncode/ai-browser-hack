# ai-browser-hack

Research and reference repository for AI browser automation extensions.

## Contents

- **[ai-browser-controller](https://github.com/ygncode/ai-browser-controller)** - Open-source AI browser automation Chrome extension (submodule)
- **claude-extension/** - Archived Claude Chrome extension v1.0.36 (reference)
- **manus-extension/** - Archived Manus AI extension v0.0.40 (reference)
- **docs/** - Technical analysis documents

## Quick Start

```bash
# Clone with submodule
git clone --recurse-submodules git@github.com:ygncode/ai-browser-hack.git

# Load ai-browser-controller in Chrome
# 1. Go to chrome://extensions/
# 2. Enable Developer Mode
# 3. Click "Load unpacked"
# 4. Select ai-browser-controller/public/
```

## Documentation

| Document | Description |
|----------|-------------|
| [Claude Extension Analysis](docs/claude-extension/CLAUDE_EXTENSION_ANALYSIS.md) | Deep dive into Claude's browser automation architecture |
| [Manus Extension Analysis](docs/manus-extension/MANUS_EXTENSION_ANALYSIS.md) | Analysis of Manus's server-controlled approach |
