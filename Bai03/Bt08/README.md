# Bài 08 - Quản lý tập tin với File System

## 1. Mục tiêu
Thực hành sử dụng module `fs` trong Node.js để quản lý tập tin và thư mục.

## 2. Các thao tác thực hiện
- Sử dụng `fs.mkdir()` tạo thư mục `data`.
- Sử dụng `fs.writeFile()` ghi 3 dòng nội dung vào `ghichu.txt`.
- Sử dụng `fs.rename()` đổi tên thành `ghichu_moi.txt`.
- Sử dụng `fs.readFile()` đọc và hiển thị nội dung sau khi đổi tên.
- Tạo tập tin `tam.txt` rồi sử dụng `fs.unlink()` để xóa.
- Hiển thị thông báo sau mỗi thao tác.

## 3. Cách chạy

```bash
node bai08.js
```

## 4. Kết quả
Chương trình chạy thành công, tạo thư mục `data`, ghi và đổi tên tập tin, đọc nội dung ghi chú, sau đó tạo và xóa tập tin tạm.

