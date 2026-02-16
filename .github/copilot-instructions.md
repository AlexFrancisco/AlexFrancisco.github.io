# GitHub Pages Personal Portfolio - Copilot Instructions

## Project Overview

This is a GitHub Pages static portfolio site for Alex Francisco, hosted at AlexFrancisco.github.io. The site showcases enterprise tech & AI consulting services with a modern, professional design featuring animated backgrounds and a comprehensive tools showcase.

## Architecture

**Multi-page static site with shared stylesheet:**
- HTML files link to a centralized stylesheet at `/static/css/styles.css`
- No build process or dependencies required - files are served directly
- Pure HTML/CSS/vanilla JavaScript (no frameworks)

**Page structure:**
- `index.html` - Main landing page with animated 3D cube grid background, about section, tools promo section, and contact info
- `consulting.html` - AI consulting services and expertise details
- `journey.html` - Professional experience timeline and background
- `training.html` - AI training and workshop offerings
- `software.html` - Bespoke software development portfolio
- `static/css/styles.css` - Centralized stylesheet for all pages
- `static/js/` - Legacy JavaScript files (unused, can be removed)

**Design system:**
All pages share a consistent CSS variable system defined in `:root` within `static/css/styles.css`:
```css
--primary: #00d4ff
--secondary: #0a84ff
--accent: #5e5ce6
--dark-bg: #0a0a0f
--dark-card: #16161d
--dark-hover: #1f1f28
--text-primary: #ffffff
--text-secondary: #a0a0b0
--gold: #ffc233
```

## Key Conventions

### CSS Architecture
- Centralized stylesheet at `/static/css/styles.css`
- CSS reset using `* { margin: 0; padding: 0; box-sizing: border-box; }`
- System font stack: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`
- Dark theme throughout with animated backgrounds
- All pages link to stylesheet via: `<link rel="stylesheet" href="/static/css/styles.css">`

### Background Effects
The main landing page (`index.html`) uses a complex animated 3D cube grid:
- Implemented via `body.home::before` pseudo-element with isometric linear gradients
- Animation: `moveCubes` keyframe creates continuous scrolling effect
- Z-index layering: background (z-index: 0) → content (z-index: 1)

### Layout Patterns
- Container class: `max-width: 1200px` with `margin: 0 auto` for centering
- Responsive design with mobile-first approach
- Landing sections use flexbox for vertical centering
- Grid layouts for card-based sections (landing cards, promo cards)

### Tools Promo Section
The homepage includes a "Tools I Use and Recommend" section showcasing:
- GitHub Copilot, Claude, Gemini, RunPod, Hugging Face, CivitAI, FLUX.1, Docker
- Each card includes an official logo with proper contrast handling
- Dark backgrounds for white logos (GitHub, RunPod, FLUX)
- Official brand assets from respective companies
- Grid layout: `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))`

### Logo Handling
When adding new tool logos:
1. Use official brand assets when available
2. Apply dark background wrapper for white/light logos: `style="background: rgba(0, 0, 0, 0.95);"`
3. Logo size: `height: 20px; max-width: 120px;`
4. Always include `loading="lazy"` attribute
5. Add `target="_blank" rel="noopener"` for external links

## Development Workflow

**No build process** - Edit HTML/CSS files directly and commit. Changes go live when pushed to GitHub.

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
- Changes typically live within 1-2 minutes

## Style Updates

When updating colors or theme:
1. Modify CSS variables in `:root` within `/static/css/styles.css`
2. Variables are automatically applied across all pages
3. Test animations in a browser - pseudo-element effects don't preview in all editors
4. Check mobile responsiveness (768px breakpoint)

## Footer Convention

- Footer includes copyright notice and tagline
- Minecraft server link maintained at bottom: `http://97.182.166.236:8080`
- Use descriptive text: "Click here to visit the Minecraft Server" (no specific server name)

## Git Workflow

⚠️ **Important:** The git remote contains an embedded personal access token. Avoid exposing credentials when sharing repository details or logs.

## File Organization

**Active files:**
- `*.html` - All page templates
- `static/css/styles.css` - Main stylesheet
- `.github/copilot-instructions.md` - This file

**Legacy/Unused (can be removed if needed):**
- `static/js/main.*.js` - Unused JavaScript from previous build
- `static/css/main.*.css` - Unused CSS from previous build
