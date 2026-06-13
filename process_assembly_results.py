import pandas as pd
import json
import re
import math

excel_path = r"C:\Users\Sreek\Desktop\Varahe\PPT Punjab Map\10.Detailed Results.xlsx"
output_js_path = r"C:\Users\Sreek\Desktop\Varahe\PPT Punjab Map\assembly_results_data.js"

# Read starting from the 4th row (header is at row index 3)
df = pd.read_excel(excel_path, header=3)

# Drop any row that doesn't have an AC NO.
df = df.dropna(subset=['AC NO.'])

# Convert AC NO. to integer
df['AC NO.'] = df['AC NO.'].astype(int)

# Party mapping
party_mapping = {
    'INC': 'Indian National Congress (INC)',
    'AAAP': 'Aam Aadmi Party (AAP)',
    'AAP': 'Aam Aadmi Party (AAP)',
    'BJP': 'Bharatiya Janata Party (BJP)',
    'SAD': 'Shiromani Akali Dal (SAD)',
    'IND': 'Independent (IND)',
    'BSP': 'Bahujan Samaj Party (BSP)',
    'NOTA': 'NOTA'
}

def clean_candidate_name(name):
    if not isinstance(name, str):
        return ""
    # Strip leading digit prefixes like "1 ", "2 ", etc.
    return re.sub(r'^\d+\s+', '', name).strip()

results_by_ac = {}

# Group by AC NO.
for ac_no, group in df.groupby('AC NO.'):
    ac_name = group['AC NAME'].iloc[0].strip()
    
    # Sort candidates by TOTAL votes descending
    sorted_group = group.sort_values(by='TOTAL', ascending=False)
    
    candidates = []
    total_valid_votes = 0
    total_electors = 0
    
    # Get electors from the first row in the group
    first_row_electors = sorted_group['TOTAL ELECTORS'].iloc[0]
    if pd.isna(first_row_electors):
        total_electors = 0
    else:
        total_electors = int(first_row_electors)
        
    for _, row in sorted_group.iterrows():
        raw_name = row['CANDIDATE NAME']
        cand_name = clean_candidate_name(raw_name)
        raw_party = str(row['PARTY']).strip()
        party_name = party_mapping.get(raw_party, raw_party)
        
        symbol = str(row['SYMBOL']).strip() if not pd.isna(row['SYMBOL']) else ""
        general_votes = int(row['GENERAL']) if not pd.isna(row['GENERAL']) else 0
        postal_votes = int(row['POSTAL']) if not pd.isna(row['POSTAL']) else 0
        total_votes = int(row['TOTAL']) if not pd.isna(row['TOTAL']) else 0
        percent = float(row['% VOTES POLLED']) if not pd.isna(row['% VOTES POLLED']) else 0.0
        
        candidates.append({
            'name': cand_name,
            'party': party_name,
            'symbol': symbol,
            'general': general_votes,
            'postal': postal_votes,
            'total': total_votes,
            'percent': percent
        })
        
        total_valid_votes += total_votes
        
    # Get winner and runner up details
    winner = candidates[0] if len(candidates) > 0 else None
    runner = candidates[1] if len(candidates) > 1 else None
    
    winner_name = winner['name'] if winner else "Unknown"
    winner_party = winner['party'] if winner else "Unknown"
    winner_votes = winner['total'] if winner else 0
    
    runner_name = runner['name'] if runner else ""
    runner_party = runner['party'] if runner else ""
    runner_votes = runner['total'] if runner else 0
    
    margin = winner_votes - runner_votes if winner and runner else winner_votes
    
    turnout_percent = (total_valid_votes / total_electors * 100) if total_electors > 0 else 0.0
    
    results_by_ac[ac_no] = {
        'ac_no': ac_no,
        'ac_name': ac_name,
        'total_electors': total_electors,
        'total_valid_votes': total_valid_votes,
        'turnout_percent': round(turnout_percent, 2),
        'winner_name': winner_name,
        'winner_party': winner_party,
        'winner_votes': winner_votes,
        'runner_name': runner_name,
        'runner_party': runner_party,
        'runner_votes': runner_votes,
        'margin': margin,
        'candidates': candidates
    }

# Write to JS file
js_content = f"// Generated Assembly Election Results Data\nconst assemblyElectionResults = {json.dumps(results_by_ac, indent=2)};\n"

with open(output_js_path, 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"Successfully processed {len(results_by_ac)} constituencies.")
print(f"Output written to {output_js_path}")
