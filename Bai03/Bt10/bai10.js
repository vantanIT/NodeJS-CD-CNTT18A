
const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

async function main() {
    try {
        await client.connect();
        console.log('Da ket noi MongoDB.');

        const db = client.db('qlsinhvien');
        const departments = db.collection('departments');
        const students = db.collection('students_join');

        // Tao du lieu mau cho 2 khoa
        await departments.deleteMany({});
        await departments.insertMany([
            { makhoa: 'CNTT', tenkhoa: 'Cong nghe thong tin' },
            { makhoa: 'QTKD', tenkhoa: 'Quan tri kinh doanh' }
        ]);

        // Tao du lieu mau cho 4 sinh vien
        await students.deleteMany({});
        await students.insertMany([
            { masv: 'SV001', hoten: 'Nguyen Van An', makhoa: 'CNTT' },
            { masv: 'SV002', hoten: 'Tran Thi Binh', makhoa: 'QTKD' },
            { masv: 'SV003', hoten: 'Le Van Cuong', makhoa: 'CNTT' },
            { masv: 'SV004', hoten: 'Pham Thi Dung', makhoa: 'QTKD' }
        ]);

        console.log('Da tao 2 khoa va 4 sinh vien.');

        // Lien ket students voi departments qua makhoa
        const ketQua = await students.aggregate([
            {
                $lookup: {
                    from: 'departments',
                    localField: 'makhoa',
                    foreignField: 'makhoa',
                    as: 'thongTinKhoa'
                }
            },
            {
                $unwind: '$thongTinKhoa'
            },
            {
                $project: {
                    _id: 0,
                    masv: 1,
                    hoten: 1,
                    makhoa: 1,
                    tenkhoa: '$thongTinKhoa.tenkhoa'
                }
            }
        ]).toArray();

        console.log('Danh sach sinh vien kem ten khoa:');
        console.table(ketQua);

    } catch (err) {
        console.error('Loi:', err.message);
    } finally {
        await client.close();
        console.log('Da dong ket noi MongoDB.');
    }
}

main();
