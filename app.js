const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Server is running!');
});

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
    const {address, port} = server.address();
    console.log(`Server is running on https://${address}:${port}`);
})

