```text
   ▗▖ ▗▄▖ ▗▖  ▗▖▗▄▄▄▖ ▗▄▄▖▗▖  ▗▖ ▗▄▖ ▗▖   ▗▄▄▄▖▗▄▄▄▖▗▄▄▄▖
   ▐▌▐▌ ▐▌▐▛▚▞▜▌▐▌   ▐▌   ▐▌  ▐▌▐▌ ▐▌▐▌   ▐▌     █    █  
   ▐▌▐▛▀▜▌▐▌  ▐▌▐▛▀▀▘ ▝▀▚▖▐▌  ▐▌▐▛▀▜▌▐▌   ▐▛▀▀▘  █    █  
▗▄▄▞▘▐▌ ▐▌▐▌  ▐▌▐▙▄▄▖▗▄▄▞▘ ▝▚▞▘ ▐▌ ▐▌▐▙▄▄▖▐▙▄▄▖▗▄█▄▖▗▄█▄▖
```

# James Valeii - Personal Website

Static HTML portfolio website showcasing professional experience, technical competencies, and personal biography. Built with semantic HTML5, consolidated CSS, and minimal JavaScript for optimal performance and accessibility.

## Features

- **Semantic HTML5** - Proper header, main, footer structure
- **Consolidated CSS** - Single stylesheet for all pages
- **Print-optimized CV** - Custom print styling and popup functionality
- **Responsive Design** - Mobile-first flexbox grid system
- **React Components** - Interactive elements for enhanced UX

## Local Development

### Start Development Server
```bash
# Python 3
python3 -m http.server 8000

# Python 2 (fallback)
python -m SimpleHTTPServer 8000

# Node.js alternative
npx http-server
```

### View Site
Open [http://localhost:8000](http://localhost:8000) in your browser

### File Structure
```
├── index.html          # Homepage
├── about.html          # Biography
├── cv.html             # Curriculum Vitae
├── styles.css          # Consolidated stylesheet
├── styles/             # Individual CSS files (fonts, print)
├── scripts/            # JavaScript components
├── fonts/              # Web font files
└── images/             # Site assets
```

## Deployment

Hosted on GitHub Pages at [jamesvaleii.com](https://jamesvaleii.com)

# TODO

- [ ] Query recent data (such as 'reads') from DB
- [ ] Identify a better featured image for SEO
- [ ] Create a favicon