// HBDR Starter Project
console.log('🚀 HBDR Starter Project is running!');
console.log('📝 Ready for Claude Code integration');
console.log('🎭 Playwright MCP servers installed');
console.log('☁️ Deployment tools ready (Vercel, Netlify)');

// Simple HTTP server for testing
const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>HBDR Starter</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            body { 
                font-family: -apple-system, BlinkMacSystemFont, sans-serif; 
                max-width: 800px; 
                margin: 50px auto; 
                padding: 20px; 
                line-height: 1.6;
            }
            .status { color: #28a745; }
            .command { 
                background: #f8f9fa; 
                padding: 10px; 
                border-radius: 4px; 
                font-family: monospace;
                margin: 10px 0;
            }
        </style>
    </head>
    <body>
        <h1>🚀 HBDR Starter Project</h1>
        <p class="status">✅ Server running on port ${port}</p>
        
        <h2>Tools Ready:</h2>
        <ul>
            <li>✅ Git initialized and pushed to GitHub</li>
            <li>✅ Playwright MCP servers installed</li>
            <li>✅ Vercel CLI ready</li>
            <li>✅ Netlify CLI ready</li>
        </ul>

        <h2>Available Commands:</h2>
        <div class="command">npm run playwright</div>
        <div class="command">npm run playwright-extended</div>
        <div class="command">npm run deploy:vercel</div>
        <div class="command">npm run deploy:netlify</div>
        
        <p>Ready for development with Claude Code in Cursor!</p>
    </body>
    </html>
  `);
});

server.listen(port, () => {
  console.log(`🌐 Server running at http://localhost:${port}`);
});