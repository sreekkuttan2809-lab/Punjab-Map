# Punjab Civic Polls 2026 — Interactive Ward Boundary Map

A premium, interactive web-based GIS visualization tool for the Punjab Local Body Election Results.

## 🚀 Key Features

* **Interactive Civic Polls Dashboard:** Complete overview of municipal elections across Punjab, detailing districts, contested wards, winning councillors, margins, and majority control.
* **Granular City Drill-down:** Click on any local body to zoom in and explore individual ward layouts with precise boundaries and labels.
* **Premium Theme & Aesthetics:** Designed with elegant, vibrant custom party-based colors, premium card components, smooth micro-animations, and glassmorphic UI overlay panels.
* **Multi-Layer Base Maps:** Toggle seamlessly between street views (OpenStreetMap / Carto Voyager), high-definition satellite imagery, hybrid views, and a dedicated **Clean View (Boundaries Only)**.
* **High-Fidelity PDF Export:** Generate publication-ready PDF map reports featuring dynamic party legends (excluding zero-win parties), a custom-designed dashboard header card with an orange underline, and canvas-rasterized ward geometries to prevent clipping.
* **Google Maps-Style Fluid Zoom:** Supports smooth fractional zooming (`zoomSnap: 0`), fine-tuned scroll steps, trackpad/pinch gestures, and low-scale global views.

## 📁 Repository Structure

* `index.html`: The main web application code including CSS styling, map controls, layers config, UI event listeners, and jsPDF export scripting.
* `election_data.js`: Compiled and joined GeoJSON election datasets containing spatial ward polygons, local body bounds, councillor names, margins, and party affiliations.
* `punjab_boundary.js`: GeoJSON boundary coordinates for the state of Punjab.
* `download_boundary.py` & `merge_boundary.py`: Helper Python scripts for fetching and merging GIS geospatial boundaries.

## 🛠️ How to Run Locally

Simply open the `index.html` file in any modern web browser to start exploring the Punjab civic election map:
```bash
# On Windows (Double-click or run):
start index.html
```
No dev server or database setup required!
