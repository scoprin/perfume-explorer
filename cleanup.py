import subprocess
import json
import time

try:
    print("Fetching sites...")
    out = subprocess.check_output(['netlify', 'api', 'listSites'], shell=True)
    sites = json.loads(out)
    
    for site in sites:
        name = site['name']
        site_id = site['id']
        if 'perfume' in name and name != 'sillage-perfume-archive':
            print(f"Deleting {name} ({site_id})...")
            # Run the command with shell=True for windows
            subprocess.call(f'netlify api deleteSite --data "{{\\"site_id\\": \\"{site_id}\\"}}"', shell=True)
            time.sleep(1)
            
    print("Cleanup complete!")
except Exception as e:
    print("Error:", e)
