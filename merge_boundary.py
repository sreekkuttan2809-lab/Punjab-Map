import json

# Load the district-level GeoJSON
with open("punjab_state_boundary.geojson", "r", encoding="utf-8") as fp:
    data = json.load(fp)

# We need to merge all district polygons into a single state boundary.
# We'll extract all coordinate rings and create a single MultiPolygon.

all_polygons = []

for feature in data["features"]:
    geom = feature["geometry"]
    if geom["type"] == "Polygon":
        all_polygons.append(geom["coordinates"])
    elif geom["type"] == "MultiPolygon":
        for poly in geom["coordinates"]:
            all_polygons.append(poly)

# Create a single FeatureCollection with one MultiPolygon feature
state_boundary = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "properties": {
            "name": "Punjab",
            "state_code": "03",
            "country": "India"
        },
        "geometry": {
            "type": "MultiPolygon",
            "coordinates": all_polygons
        }
    }]
}

# Save as a JS variable for embedding in index.html
js_content = "const punjabStateBoundary = " + json.dumps(state_boundary, separators=(',', ':')) + ";\n"

with open("punjab_boundary.js", "w", encoding="utf-8") as fp:
    fp.write(js_content)

print(f"Total polygons: {len(all_polygons)}")
print(f"JS file size: {len(js_content)} bytes ({len(js_content)/1024:.1f} KB)")
print("Saved punjab_boundary.js")
