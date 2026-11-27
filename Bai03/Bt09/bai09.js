
const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

async function main() {
    try {
        await client.connect();
        console.log('Da ket noi MongoDB.');

        const db = client.db('qlsinhvien');
        const collection = db.collection('students_test');

        // Tao 5 sinh vien mau
        await collection.deleteMany({});
        await collection.insertMany([
            { masv: 'SV001', hoten: 'Nguyen Van An', tuoi: 20, diem: 8 },
            { masv: 'SV002', hoten: 'Tran Thi Binh', tuoi: 21, diem: 4 },
            { masv: 'SV003', hoten: 'Le Van Cuong', tuoi: 19, diem: 6 },
            { masv: 'SV004', hoten: 'Pham Thi Dung', tuoi: 20, diem: 3 },
            { masv: 'SV005', hoten: 'Hoang Van Em', tuoi: 22, diem: 9 }
        ]);
        console.log('Da them 5 sinh vien mau.');

        // Xoa mot sinh vien theo ma
        const ketQua1 = await collection.deleteOne({ masv: 'SV001' });
        console.log('So sinh vien xoa theo ma:', ketQua1.deletedCount);

        // Xoa sinh vien co diem duoi 5
        const ketQua2 = await collection.deleteMany({ diem: { $lt: 5 } });
        console.log('So sinh vien co diem duoi 5 da xoa:', ketQua2.deletedCount);

        // Hien thi danh sach con lai
        const danhSach = await collection.find({}).toArray();
        console.log('Danh sach sinh vien con lai:');
        console.table(danhSach);
    } catch (err) {
        console.error('Loi:', err.message);
    } finally {
        await client.close();
        console.log('Da dong ket noi MongoDB.');
    }
}

main();
