const next = require('next') 
const http = require('http') 

const app = next({dev: process.env.NODE_ENV !== 'production'}) 

app.prepare().then(() => { 
const server = http.createServer((req, res) => { 
// Handle API routes 
if (req.url.startsWith('./db.json')) { 
	// Your API handling logic here 
} else { 
	// Handle Next.js routes 
	return app.getRequestHandler()(req, res) 
} 
}) 
server.listen(5000, (err) => { 
if (err) throw err 
console.log('> Ready on http://localhost:3000') 
}) 
})
