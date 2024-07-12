// create web server
// create a web server that listens on port 3000
// and serves the comments.html file
// which is in the public directory

const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        const filePath = path.join(__dirname, 'public', 'comments.html')
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' })
                res.end('500 - Internal Server Error')
                return
            }
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(data)
        })
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' })
        res.end('404 - Page Not Found')
    }
})

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})