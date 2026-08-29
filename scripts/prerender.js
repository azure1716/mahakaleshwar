import fs from 'fs';
import path from 'path';
import http from 'http';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, '../dist');

const routes = [
  '/',
  '/rooms',
  '/rooms/price',
  '/booking',
  '/location',
  '/faq',
  '/about',
  '/mahakaleshwar-temple-guide',
  '/blog',
  '/blog/room-near-mahakaleshwar-temple-ujjain-guide',
  '/contact'
];

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2'
};

function startServer(port) {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let reqPath = req.url.split('?')[0];
      let filePath = path.join(DIST_DIR, reqPath);

      // Check if physical file exists
      if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        const ext = path.extname(filePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';
        res.writeHead(200, { 'Content-Type': contentType });
        fs.createReadStream(filePath).pipe(res);
        return;
      }

      // Default SPA fallback to original dist/index.html
      const indexPath = path.join(DIST_DIR, 'index.html');
      res.writeHead(200, { 'Content-Type': 'text/html' });
      fs.createReadStream(indexPath).pipe(res);
    });

    server.listen(port, () => {
      console.log(`[prerender] Local preview server running at http://localhost:${port}`);
      resolve(server);
    });
  });
}

async function prerender() {
  const PORT = 4173;
  const server = await startServer(PORT);

  console.log('[prerender] Launching Puppeteer...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const originalIndexHtml = fs.readFileSync(path.join(DIST_DIR, 'index.html'), 'utf8');

  try {
    for (const route of routes) {
      console.log(`[prerender] Pre-rendering route: ${route}`);
      const page = await browser.newPage();
      
      // Go to local route and wait for network idle
      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: 'networkidle0',
        timeout: 30000
      });

      // Wait a moment for React useEffect SEO updates to finalize
      await page.evaluate(() => new Promise((resolve) => setTimeout(resolve, 500)));

      const html = await page.content();
      await page.close();

      // Determine output path
      let targetFile;
      if (route === '/') {
        targetFile = path.join(DIST_DIR, 'index.html');
      } else {
        const cleanRoute = route.startsWith('/') ? route.slice(1) : route;
        targetFile = path.join(DIST_DIR, cleanRoute, 'index.html');
      }

      // Ensure directory exists and save
      const targetDir = path.dirname(targetFile);
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }

      fs.writeFileSync(targetFile, html, 'utf8');
      console.log(`[prerender] Saved pre-rendered HTML to ${path.relative(DIST_DIR, targetFile)}`);
    }

    console.log('[prerender] Pre-rendering completed successfully for all routes!');
  } catch (error) {
    console.error('[prerender] Error during pre-rendering:', error);
    process.exitCode = 1;
  } finally {
    await browser.close();
    server.close();
  }
}

prerender();
