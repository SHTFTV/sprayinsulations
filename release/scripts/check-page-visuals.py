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
 count+=1
entries=json.loads((root/'page-visuals.json').read_text())
assert len({e['caption'] for e in entries})==len(entries),'Duplicate captions'
assert len(entries)==count-1,'New page missing from visual manifest (gallery excluded)'
print(f'{count} public pages: images, local assets, alt text, dimensions, captions and credits pass')
