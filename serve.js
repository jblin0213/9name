const http = require('http');
const fs = require('fs');
const path = require('path');
const dir = __dirname;

const mime = { '.html':'text/html', '.css':'text/css', '.js':'application/javascript',
               '.png':'image/png', '.json':'application/json', '.ttf':'font/ttf' };

http.createServer((req, res) => {
  let file = path.join(dir, req.url === '/' ? '/icon-render.html' : req.url);
  if (!fs.existsSync(file)) { res.writeHead(404); return res.end('Not found'); }
  res.writeHead(200, { 'Content-Type': mime[path.extname(file)] || 'text/plain',
                        'Access-Control-Allow-Origin': '*' });
  fs.createReadStream(file).pipe(res);
}).listen(7788, () => console.log('Server ready: http://localhost:7788'));
