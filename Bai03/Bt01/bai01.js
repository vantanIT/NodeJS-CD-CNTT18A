
class SinhVien {
    constructor(ma, hoTen, tuoi, diem) {
        this.ma = ma;
        this.hoTen = hoTen;
        this.tuoi = tuoi;
        this.diem = diem;
    }
}

// Khai bao danh sach 5 sinh vien
const danhSachSinhVien = [
    new SinhVien("SV001", "Nguyen Van An", 20, 8),
    new SinhVien("SV002", "Tran Thi Binh", 19, 4),
    new SinhVien("SV003", "Le Van Cuong", 21, 6.5),
    new SinhVien("SV004", "Pham Thi Dung", 20, 3.5),
    new SinhVien("SV005", "Nguyen Trung Duy Tan", 20, 9)
];

// Loc sinh vien co diem tu 5 tro len bang arrow function
const sinhVienDat = danhSachSinhVien.filter(
    (sinhVien) => sinhVien.diem >= 5
);

// Hien thi ket qua
console.log("DANH SACH SINH VIEN DAT YEU CAU:");

sinhVienDat.forEach((sinhVien) => {
    console.log(
        `Ma: ${sinhVien.ma} | Ho ten: ${sinhVien.hoTen} | Tuoi: ${sinhVien.tuoi} | Diem: ${sinhVien.diem}`
    );
});
