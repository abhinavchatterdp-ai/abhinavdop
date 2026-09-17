# Abhinav — portfolio

A minimal, editorial single-page portfolio built with semantic HTML, CSS, and vanilla JavaScript. It includes a lerped custom cursor, scroll-triggered reveals, responsive navigation, project cards, and CSS marquees.

## Run locally

No build step or dependencies are required. Open `index.html` directly in a browser, or serve the folder with any static server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Personalize

- Replace the name, role, copy, email, and social URLs in `index.html`.
- Swap the Unsplash URLs in the project cards for your own 16:9 images. Keep useful `alt` text.
- Tune colors, typography, spacing, and the lime accent in the custom properties at the top of `styles.css`.
- The cursor automatically hides on touch devices and the mobile menu activates below 700px.
- For reduced-motion users, animations are automatically minimized through `prefers-reduced-motion`.

## Deploy on GitHub Pages

1. Push `index.html`, `styles.css`, `script.js`, and this README to the repository's default branch.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Choose the default branch and the `/ (root)` folder, then click **Save**.
5. GitHub will provide the published URL after the Pages workflow completes. Since this is a static site, no build command is needed.

The site uses Google Fonts and Unsplash image URLs, so those external resources need network access in production. For a fully self-contained deployment, download the fonts and images and update their paths in the HTML/CSS.
