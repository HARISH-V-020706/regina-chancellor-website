# Dr. Regeena J. Murali — Leadership & Legacy Website

A static site (HTML, CSS, vanilla JavaScript). No build step.

## Structure
- `index.html` — page shell and metadata
- `css/style.css` — design system (tokens at the top of the file)
- `js/content.js` — ALL content (biography, timeline, qualifications, gallery, links). Entries with `ph:1` are placeholders.
- `js/main.js` — rendering and interactions
- `assets/` — favicon and images (add the official portrait to `assets/images/`)

## Deploy to GitHub Pages
1. Create a repository and push these files to the `main` branch.
2. In the repository go to **Settings → Pages → Source** and choose **GitHub Actions**.
3. Push to `main`; the workflow in `.github/workflows/pages.yml` publishes the site at `https://<user>.github.io/<repo>/`.

(Alternative: Settings → Pages → Deploy from branch → `main` / root. All paths are relative, so project sub-paths work.)

## Local preview
`python3 -m http.server 8000` then open http://localhost:8000
