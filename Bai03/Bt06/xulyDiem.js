
function tinhDiemTrungBinh(diem1, diem2, diem3) {
    return (diem1 + diem2 + diem3) / 3;
}

function xepLoai(diemTB) {
    if (diemTB >= 8) {
        return 'Gioi';
    } else if (diemTB >= 6.5) {
        return 'Kha';
    } else if (diemTB >= 5) {
        return 'Trung binh';
    } else {
        return 'Yeu';
    }
}

module.exports = {
    tinhDiemTrungBinh,
    xepLoai
};
