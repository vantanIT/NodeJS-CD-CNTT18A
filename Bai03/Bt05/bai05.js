
const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

async function main() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        const db = client.db('qlsinhvien_tan');
        const students = db.collection('students');

        const result = await students
            .find({ diem: { $gte: 7 } })
            .sort({ diem: -1 })
            .toArray();

        console.log('\nDanh sach sinh vien co diem >= 7:');
        console.log(result);

        const updateResult = await students.updateOne(
            { masv: 'SV001' },
            { $set: { diem: 9 } }
        );

        console.log('\nSo sinh vien duoc cap nhat:', updateResult.modifiedCount);

        // Hiển thị lại sau cập nhật
        const updatedStudent = await students.findOne({ masv: 'SV001' });
        console.log('\nThong tin SV001 sau cap nhat:');
        console.log(updatedStudent);

    } catch (error) {
        console.error('Loi:', error);
    } finally {
        await client.close();
        console.log('\nDa dong ket noi MongoDB');
    }
}

main();
