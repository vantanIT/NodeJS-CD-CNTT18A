
const fs = require('fs');

// 1. Tạo tập tin thongtin.txt
fs.writeFileSync(
    'thongtin.txt',
    'Ho va ten: Nguyen Trung Duy Tan\nMa sinh vien: CNTT18A25\n'
);

// 2. Đọc và hiển thị nội dung tập tin
console.log('=== Noi dung ban dau ===');
const noiDungBanDau = fs.readFileSync('thongtin.txt', 'utf8');
console.log(noiDungBanDau);

// 3. Ghi nối thêm tên lớp bằng appendFile()
fs.appendFile(
    'thongtin.txt',
    'Lop: CNTT18A\n',
    (err) => {
        if (err) {
            console.error('Loi ghi tap tin:', err);
            return;
        }

        // 4. Đọc lại tập tin sau khi cập nhật
        console.log('=== Noi dung sau khi cap nhat ===');

        fs.readFile('thongtin.txt', 'utf8', (err, data) => {
            if (err) {
                console.error('Loi doc tap tin:', err);
                return;
            }

            console.log(data);
        });
    }
);
