# GitHub Pages Personal Portfolio - Copilot Instructions

## Project Overview

This is a GitHub Pages static portfolio site for Alex Francisco, hosted at AlexFrancisco.github.io. The site showcases enterprise tech & AI consulting services with a modern, animated design.

## Architecture

**Multi-page structure with inline styling:**
- Each HTML file is self-contained with embedded CSS and minimal JavaScript
- No build process or dependencies required - files are served directly
- `asset-manifest.json` references compiled assets in `static/` but appears to be from a prior build setup

**Page structure:**
- `index.html` - Main landing page with animated 3D cube grid background
- `consulting.html` - AI consulting services details  
- `journey.html` - Professional experience/timeline
- `software.html` - Bespoke software development services
- `static/css/` and `static/js/` - Pre-compiled assets (likely legacy from a previous build)

**Design system:**
All pages share a consistent CSS variable system defined in `:root`:
```css
--primary: #00d4ff
--secondary: #0a84ff
--accent: #5e5ce6
--dark-bg: #0a0a0f
--dark-card: #16161d
--dark-hover: #1f1f28
--text-primary: #ffffff
--text-secondary: #a0a0b0
--gold: #ffc233 (index.html only)
```

## Key Conventions

### CSS Architecture
- All styles are embedded in `<style>` tags within each HTML file's `<head>`
- CSS reset using `* { margin: 0; padding: 0; box-sizing: border-box; }`
- System font stack: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`
- Dark theme throughout with animated backgrounds

### Background Effects
The main landing page (`index.html`) uses a complex animated 3D cube grid:
- Implemented via `body::before` pseudo-element with isometric linear gradients
- Animation: `moveCubes` keyframe creates continuous scrolling effect
- Z-index layering: background (z-index: 0) → content (z-index: 1)

### Layout Patterns
- Container class: `max-width: 1200px` with `margin: 0 auto` for centering
- Responsive design with mobile-first approach
- Landing sections use flexbox for vertical centering

## Development Workflow

**No build process** - Edit HTML files directly and commit. Changes go live when pushed to GitHub.

**Testing locally:**
```bash
# Serve the site locally (any static file server works)
python3 -m http.server 8000
# or
npx serve
```

**Deployment:**
- Automatically deployed via GitHub Pages on push to main branch
- No CI/CD configuration needed

## Style Updates

When updating colors or theme:
1. Modify CSS variables in `:root` within each HTML file's `<style>` tag
2. Keep variables consistent across all pages (except page-specific ones like `--gold`)
3. Test animations in a browser - pseudo-element effects don't preview in all editors

## Git Workflow

⚠️ **Important:** The git remote contains an embedded personal access token. Avoid exposing credentials when sharing repository details or logs.
