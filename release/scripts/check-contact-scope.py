from pathlib import Path
import json,re
r=Path(__file__).resolve().parent.parent
assigned=set(json.loads((r/'city-contractor-assignments.json').read_text())['cityAssignments'])
found=set()
for p in r.rglob('*.html'):
 route='/' + str(p.parent.relative_to(r)).strip('.')+'/'
 s=p.read_text()
 if route in assigned:
  assert 'class="business-floater"' in s and 'mailto:insulatevancouver@gmail.com' in s,p
  found.add(route)
 else:
  assert not re.search(r'insulatevancouver@gmail.com|17787794353|778-779-4353|class="business-floater"',s),p
assert found==assigned
print('27 explicit city contacts; all other pages central contact only')
