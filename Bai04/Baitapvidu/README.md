# Bài tập ví dụ - Express.js To-Do List

## 1. Mục tiêu
Xây dựng ứng dụng quản lý công việc bằng Express.js, sử dụng mô hình MVC và template engine Pug.

## 2. Chức năng
- Hiển thị danh sách công việc.
- Thêm công việc mới.
- Đánh dấu công việc đã hoàn thành.
- Xóa công việc.

## 3. Công nghệ sử dụng
- Node.js
- Express.js
- Pug
- Mô hình MVC

## 4. Cấu trúc dự án
- `app.js`: Khởi tạo server Express.
- `models/taskModel.js`: Quản lý dữ liệu công việc.
- `controllers/taskController.js`: Xử lý logic.
- `routes/taskRoutes.js`: Khai báo các đường dẫn.
- `views/index.pug`: Giao diện người dùng.

## 5. Cách chạy
Cài đặt thư viện:

```bash
npm install
```

Khởi động ứng dụng:

```bash
node app.js
```

Mở trình duyệt tại `http://localhost:3002`.

## 6. Kết quả
Ứng dụng chạy thành công và thực hiện được các chức năng thêm, hiển thị, hoàn thành và xóa công việc.

