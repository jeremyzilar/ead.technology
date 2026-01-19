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

## Deployment to GitHub Pages

This site uses GitHub Actions to build and deploy. The workflow is defined in `.github/workflows/jekyll.yml`.

### Initial Setup

1. Push your code to GitHub
2. Go to your repository Settings → Pages
3. Under "Build and deployment", set Source to "GitHub Actions"
4. Push to the `main` branch to trigger a deployment

The GitHub Action will:
- Install Ruby and Node.js dependencies
- Build Tailwind CSS
- Build the Jekyll site
- Deploy to GitHub Pages

### Custom Domain

If using a custom domain (like ead.technology):
1. Add a `CNAME` file to the root with your domain
2. Configure DNS with your domain provider
3. Enable HTTPS in GitHub Pages settings
