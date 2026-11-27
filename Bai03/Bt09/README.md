# Bài 09 - Xóa dữ liệu có điều kiện trong MongoDB

## 1. Mục tiêu
Thực hành kết nối MongoDB và xóa dữ liệu theo điều kiện.

## 2. Các thao tác
- Kết nối database `qlsinhvien`.
- Sử dụng collection `students_test`.
- Thêm 5 sinh viên mẫu gồm mã sinh viên, họ tên, tuổi và điểm.
- Dùng `deleteOne()` xóa sinh viên có mã `SV001`.
- Dùng `deleteMany()` xóa sinh viên có điểm dưới 5.
- Dùng `find()` hiển thị danh sách còn lại.

## 3. Cách chạy
```bash
node bai09.js
```

## 4. Kết quả
Thêm thành công 5 sinh viên, xóa 1 sinh viên theo mã và 2 sinh viên có điểm dưới 5. Danh sách còn lại gồm SV003 và SV005.

