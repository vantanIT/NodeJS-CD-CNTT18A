# Bài 05: Tìm kiếm, cập nhật và sắp xếp MongoDB

## 1. Mục tiêu
- Tìm sinh viên có điểm lớn hơn hoặc bằng 7 bằng `find()` và `$gte`.
- Sắp xếp điểm giảm dần bằng `sort()`.
- Cập nhật điểm sinh viên bằng `updateOne()` và `$set`.
- Hiển thị lại thông tin sau khi cập nhật.

## 2. Cơ sở dữ liệu
- Database: `qlsinhvien_tan`
- Collection: `students`

## 3. Các lệnh đã sử dụng
- `find({ diem: { $gte: 7 } })`: lọc sinh viên có điểm từ 7 trở lên.
- `sort({ diem: -1 })`: sắp xếp điểm giảm dần.
- `updateOne({ masv: 'SV001' }, { $set: { diem: 9 } })`: cập nhật điểm SV001 thành 9.
- `findOne({ masv: 'SV001' })`: kiểm tra thông tin sau cập nhật.

## 4. Cách chạy
```bash
npm install mongodb
node bai05.js
```

## 5. Kết quả
Chương trình kết nối MongoDB thành công, hiển thị danh sách sinh viên đạt từ 7 điểm trở lên theo thứ tự giảm dần, cập nhật điểm SV001 từ 8.5 lên 9 và hiển thị lại thông tin sau cập nhật.

## 6. Minh chứng
file hinhanh.png