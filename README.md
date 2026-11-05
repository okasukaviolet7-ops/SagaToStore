# SagaToLab — Virtual Science Laboratory

Static website built with HTML5, CSS3, and Vanilla JavaScript. No build step or backend required.

## Run
Open `index.html` in a browser, or publish the repository with GitHub Pages:
1. Upload the contents of this folder to your repository root.
2. In GitHub, open **Settings → Pages**.
3. Select **Deploy from a branch**, choose `main` and `/ (root)`, then Save.

## Included interactive modules
- GLB and GLBB motion workbench (START / PAUSE / RESET / STEP, live metrics, observation table, position and velocity graphs).
- Newton's Second Law workbench with applied force, mass, friction model, and computed acceleration.
- Photosynthesis response model with light, CO₂, temperature, and water controls.
- Plant-cell organelle explorer.
- Virtual pH indicator lab with sample selector and pH classification.
- Earth & Space topic cards, science knowledge notes, quiz with automatic scoring, and local progress/profile storage.

## Scientific model notes
- GLB: `x = x0 + vt`; constant velocity, zero acceleration.
- GLBB: `x = x0 + v0 t + 1/2 a t²`, `v = v0 + at`; constant acceleration, one-dimensional motion, no air resistance.
- Newton lab: flat surface, `N = mg`, simplified kinetic friction `f = μN`; object remains at rest if applied force does not exceed the model friction force.
- Photosynthesis: dimensionless educational response index using saturating light/CO₂ factors, a simplified temperature optimum curve, and water availability. It is not empirical data or a universal biological law.
- pH samples: representative teaching values, not measurements of real samples. Ideal neutral pH is temperature-dependent (pH 7 at 25°C).

## Project structure
- `index.html`
- `css/style.css`, `css/laboratory.css`, `css/responsive.css`
- `js/data.js`, `js/storage.js`, `js/simulations.js`, `js/app.js`

## Roadmap
The project is structured for incremental expansion. More complete molecular construction, titration, circuits, optics, microscope controls, ecosystem dynamics, and broader curriculum content can be added as separate modules without changing the hosting model.
