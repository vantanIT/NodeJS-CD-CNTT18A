
const { tinhDiemTrungBinh, xepLoai } = require('./xulyDiem');

const sinhVien = [
    { hoTen: 'Nguyen Van An', diem: [8, 9, 7] },
    { hoTen: 'Tran Thi Binh', diem: [6, 7, 8] },
    { hoTen: 'Le Van Cuong', diem: [4, 5, 3] }
];

sinhVien.forEach(sv => {
    const diemTB = tinhDiemTrungBinh(...sv.diem);

    console.log(`Ho ten: ${sv.hoTen}`);
    console.log(`Diem trung binh: ${diemTB.toFixed(2)}`);
    console.log(`Xep loai: ${xepLoai(diemTB)}`);
    console.log('--------------------');
});
