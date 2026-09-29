"""Fail release when any public HTML page lacks a credited, accessible visual."""
from pathlib import Path
from html.parser import HTMLParser
import re,json
root=Path(__file__).resolve().parent.parent
class Images(HTMLParser):
 def __init__(self):super().__init__();self.images=[]
 def handle_starttag(self,t,a):
  if t=='img':self.images.append(dict(a))
count=0
for p in root.rglob('*.html'):
 s=p.read_text(); parser=Images();parser.feed(s)
 assert parser.images, f'No image: {p}'
 assert re.search(r'<figcaption\b',s) and 'Source:' in s, f'No caption/credit: {p}'
 for img in parser.images:
  assert img.get('alt','').strip() and int(img.get('width',0))>0 and int(img.get('height',0))>0, (p,img)
  if img['src'].startswith('/'):assert (root/img['src'].lstrip('/')).is_file(),(p,img)
 heading_end=s.find('</h1>')+5
 first_image=s.find('<img',heading_end)
 assert heading_end>=5 and first_image>heading_end, f'No hero after main heading: {p}'
 between=s[heading_end:first_image]
 assert not re.search(r'<h[2-6]\b|<video\b',between), f'Hero follows another section or video: {p}'
 assert len(re.sub(r'<[^>]+>','',between).strip())<600, f'Hero is too far from heading: {p}'
 assert 'page-visual' in between, f'No prominent page hero: {p}'
 count+=1
entries=json.loads((root/'page-visuals.json').read_text())
assert len({e['caption'] for e in entries})==len(entries),'Duplicate captions'
assert len(entries)==count,'New page missing from visual manifest'
print(f'{count} public pages: images, local assets, alt text, dimensions, captions and credits pass')
