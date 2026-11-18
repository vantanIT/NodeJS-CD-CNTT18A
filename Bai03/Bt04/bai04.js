
const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

async function main() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');

       const db = client.db('qlsinhvien_tan');
        const students = db.collection('students');

        await students.insertMany([
            { masv: 'SV001', hoten: 'Nguyen Van An', tuoi: 20, diem: 8.5 },
            { masv: 'SV002', hoten: 'Tran Thi Binh', tuoi: 19, diem: 7.5 },
            { masv: 'SV003', hoten: 'Le Van Cuong', tuoi: 21, diem: 9 }
        ]);

        const result = await students.find({}).toArray();
        console.log('Danh sach sinh vien:');
        console.log(result);
    } catch (error) {
        console.error('Loi:', error);
    } finally {
        await client.close();
        console.log('Da dong ket noi MongoDB');
    }
}

main();
