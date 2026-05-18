const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

const server = http.createServer((req, res) => {

    let filePath = '.' + req.url;

    if (filePath === './') {
        filePath = './index.html';
    }

    const extname = path.extname(filePath);

    let contentType = 'text/html';

    if (extname === '.css') {
        contentType = 'text/css';
    }

    fs.readFile(filePath, (err, content) => {

        if (err) {
            res.writeHead(500);
            res.end('Error loading file');
        } else {
            res.writeHead(200, {
                'Content-Type': contentType
            });

            res.end(content);
        }
    });
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});