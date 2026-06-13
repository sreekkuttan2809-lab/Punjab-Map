# AGENTS.md — Punjab Civic Polls Map

## Project Overview
Static web app (HTML/CSS/JS) visualizing Punjab local body & assembly election results with interactive Leaflet maps. No build step, no framework.

## Run Locally
```bash
python -m http.server 8000   # serves index.html + data JS files
# open http://localhost:8000
```
Or simply double-click `index.html` (CORS blocks local GeoJSON fetch in some browsers).

## Data Pipeline (Python → JS)
| Script | Input | Output | Purpose |
|--------|-------|--------|---------|
| `download_boundary.py` | GitHub raw URLs | `punjab_state_boundary.geojson` | Fetch state boundary |
| `merge_boundary.py` | `punjab_state_boundary.geojson` | `punjab_boundary.js` | Merge districts → single MultiPolygon, emit JS var |
| `process_caste_data.py` | `Data set for caste wise segregation.xlsx` | `caste_data.js` | Parse caste percentages by AC/District/PC/OD |
| `process_assembly_results.py` | `10.Detailed Results.xlsx` | `assembly_results_data.js` | Parse winner/runner/margin/turnout per AC |

Run order: `download_boundary.py → merge_boundary.py → process_caste_data.py → process_assembly_results.py`

Requires: `pandas`, `requests`, `numpy` (`pip install pandas requests numpy`)

## Key Files
- `index.html` — **Single-file app**: CSS, Leaflet map init, UI logic, PDF export (jsPDF + html2canvas), all event handlers
- `election_data.js` — Ward-level GeoJSON + results (councillor, party, margin)
- `punjab_boundary.js` — State boundary MultiPolygon (generated)
- `caste_data.js` — Caste percentages by AC/district/PC/org-district (generated)
- `assembly_results_data.js` — Assembly results per AC (generated)
- `punjab_districts.js`, `punjab_constituencies.js`, `punjab_parliament.js`, `punjab_od.js` — Additional boundary layers

## Architecture Notes
- **No modules/bundler** — all JS loaded via `<script>` tags in HTML order
- **Leaflet 1.9.4** from CDN; Turf.js for centroid calc
- **Data format**: JS files export `const <Name> = <JSON>`; consumed as globals in `index.html`
- **Map modes**: Civic Polls (wards), Caste View, Assembly/Parliament boundaries, Route Planner
- **PDF export**: Uses `html2canvas` to rasterize map SVG → canvas → jsPDF (vector paths clip at page edges)

## Common Tasks
**Regenerate boundary JS after GeoJSON change:**
```bash
python merge_boundary.py
```

**Regenerate caste data after Excel update:**
```bash
python process_caste_data.py
```

**Regenerate assembly results after Excel update:**
```bash
python process_assembly_results.py
```

## Gotchas
- `download_boundary.py` uses `verify=False` (self-signed certs on some sources)
- Caste/assembly Excel files have hardcoded paths in scripts — update if moved
- `index.html` is 2000+ lines; search for `//` section comments to navigate
- Party colors defined in CSS `:root` — used in JS for dynamic legend/rendering
- No lint/typecheck/test commands; manual verification only