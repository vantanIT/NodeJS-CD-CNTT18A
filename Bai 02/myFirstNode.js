
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });

    res.end(`
        <!DOCTYPE html>
        <html lang="vi">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Thông tin sinh viên</title>
        </head>
        <body>
            <h1>Thông tin sinh viên</h1>
            <p>Họ và tên: Nguyen trung Duy Tan</p>
            <p>Mã sinh viên: CNTT18A</p>
        </body>
        </html>
    `);
});

server.listen(3000, () => {
    console.log('Server dang chay tai http://localhost:3000');
});
