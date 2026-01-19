# EAD Technology Website

A Jekyll site built with Tailwind CSS for ead.technology.

## Setup

Install dependencies:

```bash
bundle install
yarn install
```

## Development

Start the development server:

```bash
yarn dev
```

This will:
- Start Jekyll with live reload on http://localhost:4000
- Watch and rebuild Tailwind CSS automatically

## Build

Build the site for production:

```bash
yarn build
```

This will:
- Build optimized Tailwind CSS
- Generate the Jekyll site in the `_site` directory

## Custom Fonts

The site uses the Firme font family exclusively for all typography. Font files are located in `/assets/fonts/` and include:
- Black (900 weight) - used for large headings
- ExtraBold (800 weight) - used for section headings
- Bold (700 weight)
- Medium (500 weight)
- Book (400 weight) - used for body text

All fonts are configured in `/assets/css/main.css` with proper @font-face declarations.

## Project Structure

- `_layouts/` - Jekyll layout templates
- `_includes/` - Reusable components (header, etc.)
- `_pages/` - Site pages (about, contact)
- `index.html` - Home page
- `assets/css/` - CSS source files
- `tailwind.config.js` - Tailwind CSS configuration
- `_config.yml` - Jekyll configuration

## Deployment

This site is configured for GitHub Pages. Push to the main branch and GitHub Actions will automatically build and deploy the site.
