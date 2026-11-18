# Bài 07 - Xử lý tham số URL trong Node.js

## 1. Mục tiêu
- Xây dựng Web Server bằng module `http`.
- Sử dụng module `url` để đọc đường dẫn và tham số URL.
- Xử lý lời chào theo tên người dùng.
- Tính tổng hai số được truyền qua URL.
- Xử lý lỗi khi thiếu tham số hoặc đường dẫn không tồn tại.

## 2. Cách chạy
Mở terminal tại thư mục bài tập và chạy:

```bash
node bai07.js
```

Truy cập: `http://localhost:3001/`

## 3. Các chức năng

- Trang chủ: `http://localhost:3001/`
- Lời chào: `http://localhost:3001/hello?name=Minh`
- Tính tổng: `http://localhost:3001/sum?a=10&b=20`

## 4. Kết quả
- Lời chào: `Xin chao Minh.`
- Tính tổng: `Tong = 30`
- Đường dẫn không hợp lệ trả về lỗi 404.

## 5. Kết luận
Hoàn thành bài thực hành xử lý tham số URL và xây dựng Web Server cơ bản bằng Node.js.