# Bài 10 - Liên kết hai Collection trong MongoDB

## 1. Mục tiêu
Thực hành liên kết hai collection trong MongoDB bằng `aggregate()` và `$lookup`.

## 2. Các thao tác
- Tạo collection `departments` chứa thông tin khoa.
- Tạo collection `students_join` chứa thông tin sinh viên.
- Thêm 2 khoa và 4 sinh viên mẫu.
- Sử dụng `$lookup` liên kết hai collection qua trường `makhoa`.
- Sử dụng `$unwind` và `$project` để hiển thị mã sinh viên, họ tên, mã khoa và tên khoa.

## 3. Cách chạy

```bash
node bai10.js
```

## 4. Kết quả
Chương trình chạy thành công, hiển thị 4 sinh viên kèm tên khoa tương ứng.

