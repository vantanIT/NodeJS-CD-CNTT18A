# Bài 2: Xây dựng Web Server bằng Node.js

## 1. Giới thiệu
Bài tập xây dựng một Web Server đơn giản bằng module `http` có sẵn trong Node.js.

## 2. Chức năng
- **Trang chủ (`/`):** Hiển thị lời chào và thông tin sinh viên.
- **Trang giới thiệu (`/about`):** Hiển thị thông tin giới thiệu bản thân.
- **Trang không tồn tại:** Trả về mã trạng thái HTTP `404` khi truy cập đường dẫn không hợp lệ.

## 3. Công nghệ sử dụng
- Node.js
- Module `http`

## 4. Cấu trúc thư mục
```text
Bt02/
├── bai02.js
└── README.md
```

## 5. Cách chạy chương trình

**Bước 1:** Mở Terminal hoặc PowerShell tại máy tính đã cài đặt Node.js.

**Bước 2:** Di chuyển đến thư mục chứa file `bai02.js`.

**Bước 3:** Chạy lệnh:

```bash
node bai02.js
```

**Bước 4:** Mở trình duyệt và truy cập các địa chỉ:

- Trang chủ: http://localhost:3000/
- Trang giới thiệu: http://localhost:3000/about
- Kiểm tra lỗi 404: http://localhost:3000/abc

## 6. Kết quả
Web Server chạy trên cổng `3000` và xử lý các yêu cầu HTTP theo đường dẫn tương ứng.

## 7. Thông tin sinh viên
- Họ và tên: Nguyễn Trung Duy Tân
- Lớp: CNTT18A

