import requests
import json

urls = [
    "https://raw.githubusercontent.com/shuklaneerajdev/IndiaStateTopojsonFiles/master/Punjab.geojson",
    "https://raw.githubusercontent.com/Subhash9325/GeoJson-Data-of-Indian-States/master/Punjab.json",
    "https://raw.githubusercontent.com/datta07/INDIAN-SHAPEFILES/master/STATE_BOUNDARY/PUNJAB.geojson",
]

for url in urls:
    print(f"\nTrying: {url}")
    try:
        r = requests.get(url, timeout=15, verify=False)
        print(f"  Status: {r.status_code}")
        if r.status_code == 200:
            data = r.json()
            print(f"  Type: {data.get('type', 'unknown')}")
            if data.get('type') == 'FeatureCollection':
                print(f"  Features: {len(data.get('features', []))}")
                for f in data.get('features', []):
                    props = f.get('properties', {})
                    geom = f.get('geometry', {})
                    print(f"    Geometry: {geom.get('type')}, Props: {props}")
            elif data.get('type') == 'Topology':
                print(f"  TopoJSON objects: {list(data.get('objects', {}).keys())}")
            
            with open("punjab_state_boundary.geojson", "w", encoding="utf-8") as fp:
                json.dump(data, fp)
            print(f"  SAVED successfully!")
            break
    except Exception as e:
        print(f"  Error: {e}")
