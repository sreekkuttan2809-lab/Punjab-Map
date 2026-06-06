import json
import re
import pandas as pd
import numpy as np

def clean_dist_name(d):
    if pd.isna(d):
        return ''
    d = str(d).strip().upper()
    if d == 'RUP NAGAR' or d == 'RUPNAGAR':
        return 'RUPNAGAR'
    if d in ['S.A.S. NAGAR', 'S.A.S.NAGAR', 'SAHIBZADA AJIT SINGH NAGAR', 'SAS NAGAR']:
        return 'SAHIBZADA AJIT SINGH NAGAR'
    if d == 'MUKATSAR' or d == 'MUKTSAR':
        return 'MUKTSAR'
    if d == 'NAWANSHAHR' or d == 'SHAHID BHAGAT SINGH NAGAR':
        return 'SHAHID BHAGAT SINGH NAGAR'
    return d

def clean_pc_name(pc):
    if pd.isna(pc):
        return ''
    pc = str(pc).strip().upper()
    pc = re.sub(r'^\d+\.\s*', '', pc)
    if pc == 'FARIDKOT':
        return 'FARIDKOT (SC)'
    if pc == 'FATEHGARH SAHIB':
        return 'FATEHGARH SAHIB (SC)'
    if pc == 'HOSHIARPUR':
        return 'HOSHIARPUR (SC)'
    if pc == 'JALANDHAR':
        return 'JALANDHAR (SC)'
    return pc

def clean_ac_name(ac):
    if pd.isna(ac):
        return ''
    ac = str(ac).strip().upper()
    ac = re.sub(r'^\d+\.\s*', '', ac)
    ac = re.sub(r'\s*\(SC\)\s*$', '', ac)
    ac = re.sub(r'\s*\(SC\s*$', '', ac)
    ac = re.sub(r'\s*\(S\s*$', '', ac)
    if ac == 'SRI HARGOBINDPUR':
        return 'SRI HARGOBINDPUR (S'
    if ac == 'NIHAL SINGHWALA':
        return 'NIHAL SINGHWALA (SC'
    if ac == 'S.A.S. NAGAR':
        return 'S.A.S.NAGAR'
    return ac

def clean_caste_name(c):
    if pd.isna(c):
        return 'Unknown'
    c = str(c).strip()
    c_lower = c.lower()
    if c_lower == 'mazhabi sikh':
        return 'Mazhabi Sikh'
    if c_lower == 'kamboj':
        return 'Kamboj'
    if c_lower in ['christian', 'christianity']:
        return 'Christian'
    if c_lower == 'unknown' or c_lower == 'unknown ':
        return 'Unknown'
    return c

print("Loading Excel file...")
xl = pd.ExcelFile('Data set for caste wise segregation.xlsx')

sc_castes = ['Balmiki', 'Bazigar', 'Bhagat', 'Mahasha', 'Mazhabi Sikh', 'Megh', 'Rai Sikh', 'Ravidassia']

# 1. AC Wise Data (SC Castes + Average SC Population)
df_ac = pd.read_excel(xl, 'AC Wise Data')
ac_dict = {}
for idx, row in df_ac.iterrows():
    ac_name = clean_ac_name(row['AC Name'])
    ac_num = int(row['AC #']) if not pd.isna(row['AC #']) else None
    
    # Store SC castes percentages
    percentages = {}
    for c in sc_castes:
        val = row.get(c, 0.0)
        percentages[c] = float(val) if not pd.isna(val) else 0.0

    ac_dict[ac_name] = {
        'ac_no': ac_num,
        'district': clean_dist_name(row['Administrative District']),
        'org_district': str(row['Organisational District']).strip(),
        'caste_percentages': percentages,
        'avg_sc_population': float(row['Average SC Population']) if not pd.isna(row['Average SC Population']) else 0.0,
        'detailed_castes': {}
    }

# 2. Add detailed Caste Data to AC dict
df_caste = pd.read_excel(xl, 'Caste Data')
all_castes = set(sc_castes)

for idx, row in df_caste.iterrows():
    ac_name = clean_ac_name(row['AC Name'])
    caste = clean_caste_name(row['Caste'])
    pop_pct = float(row['Population %']) if not pd.isna(row['Population %']) else 0.0
    all_castes.add(caste)
    
    if ac_name in ac_dict:
        ac_dict[ac_name]['detailed_castes'][caste] = pop_pct

# Fill in missing detailed castes in ACs as 0.0
for ac_name, info in ac_dict.items():
    # Make sure SC castes are also in detailed_castes
    for c in sc_castes:
        if c not in info['detailed_castes']:
            info['detailed_castes'][c] = info['caste_percentages'].get(c, 0.0)
    # Ensure all general/OBC/MIN castes are populated
    for c in all_castes:
        if c not in info['detailed_castes']:
            info['detailed_castes'][c] = 0.0

# 3. District Wise Data
df_dist = pd.read_excel(xl, 'District Wise Data')
dist_dict = {}
for idx, row in df_dist.iterrows():
    dist_name = clean_dist_name(row['Administrative District'])
    percentages = {}
    for c in sc_castes:
        val = row.get(c, 0.0)
        percentages[c] = float(val) if not pd.isna(val) else 0.0

    dist_dict[dist_name] = {
        'caste_percentages': percentages,
        'avg_sc_population': float(row['Average SC Population']) if not pd.isna(row['Average SC Population']) else 0.0,
        'detailed_castes': {}
    }

# 4. Org DistrictWise Data
df_od = pd.read_excel(xl, 'Org DistrictWise Data')
od_dict = {}
for idx, row in df_od.iterrows():
    od_name = str(row['Organisational District']).strip()
    percentages = {}
    for c in sc_castes:
        val = row.get(c, 0.0)
        percentages[c] = float(val) if not pd.isna(val) else 0.0

    od_dict[od_name] = {
        'admin_district': clean_dist_name(row['Administrative District']),
        'caste_percentages': percentages,
        'avg_sc_population': float(row['Average SC Population']) if not pd.isna(row['Average SC Population']) else 0.0,
        'detailed_castes': {}
    }

# 5. PC Wise Data
df_pc = pd.read_excel(xl, 'PC Wise Data')
pc_dict = {}
for idx, row in df_pc.iterrows():
    pc_name = clean_pc_name(row['PC'])
    pc_num = int(row['PC #']) if not pd.isna(row['PC #']) else None
    percentages = {}
    for c in sc_castes:
        val = row.get(c, 0.0)
        percentages[c] = float(val) if not pd.isna(val) else 0.0

    pc_dict[pc_name] = {
        'pc_no': pc_num,
        'caste_percentages': percentages,
        'avg_sc_population': float(row['Average SC Population']) if not pd.isna(row['Average SC Population']) else 0.0,
        'detailed_castes': {}
    }

# 6. Aggregate detailed castes to District, PC, and OD level using AC detailed_castes
# We group ACs by district, pc, and od and calculate average percentage for each caste
df_caste_cleaned = df_caste.copy()
df_caste_cleaned['Cleaned_AC'] = df_caste_cleaned['AC Name'].apply(clean_ac_name)
df_caste_cleaned['Cleaned_Dist'] = df_caste_cleaned['Administrative District'].apply(clean_dist_name)
df_caste_cleaned['Cleaned_PC'] = df_caste_cleaned['PC'].apply(clean_pc_name)
df_caste_cleaned['Cleaned_OD'] = df_caste_cleaned['Organisational District'].apply(lambda x: str(x).strip())
df_caste_cleaned['Cleaned_Caste'] = df_caste_cleaned['Caste'].apply(clean_caste_name)

# Average by District + Caste
dist_caste_agg = df_caste_cleaned.groupby(['Cleaned_Dist', 'Cleaned_Caste'])['Population %'].mean().reset_index()
for idx, row in dist_caste_agg.iterrows():
    d = row['Cleaned_Dist']
    c = row['Cleaned_Caste']
    val = float(row['Population %'])
    if d in dist_dict:
        dist_dict[d]['detailed_castes'][c] = val

# Average by PC + Caste
pc_caste_agg = df_caste_cleaned.groupby(['Cleaned_PC', 'Cleaned_Caste'])['Population %'].mean().reset_index()
for idx, row in pc_caste_agg.iterrows():
    p = row['Cleaned_PC']
    c = row['Cleaned_Caste']
    val = float(row['Population %'])
    if p in pc_dict:
        pc_dict[p]['detailed_castes'][c] = val

# Average by OD + Caste
od_caste_agg = df_caste_cleaned.groupby(['Cleaned_OD', 'Cleaned_Caste'])['Population %'].mean().reset_index()
for idx, row in od_caste_agg.iterrows():
    o = row['Cleaned_OD']
    c = row['Cleaned_Caste']
    val = float(row['Population %'])
    if o in od_dict:
        od_dict[o]['detailed_castes'][c] = val

# Fill in missing detailed castes for District, PC, OD
for d, info in dist_dict.items():
    for c in all_castes:
        if c not in info['detailed_castes']:
            info['detailed_castes'][c] = info['caste_percentages'].get(c, 0.0)

for p, info in pc_dict.items():
    for c in all_castes:
        if c not in info['detailed_castes']:
            info['detailed_castes'][c] = info['caste_percentages'].get(c, 0.0)

for o, info in od_dict.items():
    for c in all_castes:
        if c not in info['detailed_castes']:
            info['detailed_castes'][c] = info['caste_percentages'].get(c, 0.0)

# Build sorted caste list (excluding Unknown, Others to put them at the end, and putting Average SC Population first in JS if needed)
caste_list = sorted(list(all_castes))
if 'Unknown' in caste_list:
    caste_list.remove('Unknown')
    caste_list.append('Unknown')
if 'Others' in caste_list:
    caste_list.remove('Others')
    caste_list.append('Others')

# Write Javascript File
print("Writing caste_data.js...")
with open('caste_data.js', 'w', encoding='utf-8') as f:
    f.write("// Punjab Caste Based Mapping Data (Generated from Excel)\n")
    f.write(f"const casteNames = {json.dumps(caste_list, indent=2)};\n\n")
    f.write(f"const casteACData = {json.dumps(ac_dict, indent=2)};\n\n")
    f.write(f"const casteDistrictData = {json.dumps(dist_dict, indent=2)};\n\n")
    f.write(f"const casteOrgDistrictData = {json.dumps(od_dict, indent=2)};\n\n")
    f.write(f"const castePCData = {json.dumps(pc_dict, indent=2)};\n")

print("Finished successfully! Generated caste_data.js.")
