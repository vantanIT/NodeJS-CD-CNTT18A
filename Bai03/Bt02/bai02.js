

const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    if (req.url === '/') {
        res.writeHead(200);
        res.end(`
            <h1>Xin chào!</h1>
            <p>Họ và tên: Nguyen Trung Duy Tan</p>
            <p>Mã sinh viên: CNTT18A</p>
        `);
    } 
    else if (req.url === '/about') {
        res.writeHead(200);
        res.end(`
            <h1>Giới thiệu bản thân</h1>
            <p>Họ và tên: Nguyen Trung Duy Tan</p>
            <p>Lớp: CNTT18A</p>
            <p>Tôi là sinh viên đang học lập trình Node.js.</p>
        `);
    } 
    else {
        res.writeHead(404);
        res.end('<h1>404 - Khong tim thay trang</h1>');
    }
});

server.listen(3000, () => {
    console.log('Server dang chay tai http://localhost:3000');
});
