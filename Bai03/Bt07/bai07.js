
const http = require('http');
const { URL } = require('url');

const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);

    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    // Trang chủ
    if (url.pathname === '/') {
        res.statusCode = 200;
        res.end(
            'Web Server Bai 07 dang hoat dong!\n' +
            'Su dung /hello?name=Minh de gui loi chao.\n' +
            'Su dung /sum?a=10&b=20 de tinh tong.'
        );
        return;
    }

    // Lời chào
    if (url.pathname === '/hello') {
        const name = url.searchParams.get('name');

        if (name === null || name.trim() === '') {
            res.statusCode = 400;
            res.end('Loi: Thieu tham so name hoac gia tri khong hop le.');
            return;
        }

        res.statusCode = 200;
        res.end(`Xin chao ${name.trim()}.`);
        return;
    }

    // Tính tổng
    if (url.pathname === '/sum') {
        const aText = url.searchParams.get('a');
        const bText = url.searchParams.get('b');

        if (
            aText === null || bText === null ||
            aText.trim() === '' || bText.trim() === '' ||
            !Number.isFinite(Number(aText)) ||
            !Number.isFinite(Number(bText))
        ) {
            res.statusCode = 400;
            res.end('Loi: Vui long nhap day du a va b la cac so hop le.');
            return;
        }

        const a = Number(aText);
        const b = Number(bText);
        res.statusCode = 200;
        res.end(`Tong = ${a + b}`);
        return;
    }

    // Đường dẫn không tồn tại
    res.statusCode = 404;
    res.end('Loi 404: Khong tim thay duong dan.');
});

server.listen(3001, () => {
    console.log('Web Server dang chay tai http://localhost:3001');
});
