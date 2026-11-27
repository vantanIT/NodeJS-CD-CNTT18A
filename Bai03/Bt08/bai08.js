
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data');
const fileCu = path.join(dataDir, 'ghichu.txt');
const fileMoi = path.join(dataDir, 'ghichu_moi.txt');
const fileTam = path.join(dataDir, 'tam.txt');

fs.mkdir(dataDir, { recursive: true }, (err) => {
    if (err) return console.error('Loi tao thu muc:', err.message);
    console.log('1. Da tao thu muc data.');

    const noiDung =
        'Dong 1: Hoc Node.js\n' +
        'Dong 2: Tim hieu module fs\n' +
        'Dong 3: Thuc hanh quan ly tap tin';

    fs.writeFile(fileCu, noiDung, 'utf8', (err) => {
        if (err) return console.error('Loi ghi file:', err.message);
        console.log('2. Da ghi 3 dong vao ghichu.txt.');

        fs.rename(fileCu, fileMoi, (err) => {
            if (err) return console.error('Loi doi ten:', err.message);
            console.log('3. Da doi ten thanh ghichu_moi.txt.');

            fs.readFile(fileMoi, 'utf8', (err, data) => {
                if (err) return console.error('Loi doc file:', err.message);
                console.log('4. Noi dung file sau khi doi ten:');
                console.log(data);

                fs.writeFile(fileTam, 'Tap tin tam.', 'utf8', (err) => {
                    if (err) return console.error('Loi tao file tam:', err.message);
                    console.log('5. Da tao tam.txt.');

                    fs.unlink(fileTam, (err) => {
                        if (err) return console.error('Loi xoa file tam:', err.message);
                        console.log('6. Da xoa tam.txt.');
                        console.log('Hoan thanh Bai 08!');
                    });
                });
            });
        });
    });
});
