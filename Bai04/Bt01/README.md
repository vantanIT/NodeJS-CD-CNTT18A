# Bài 01 – Xây dựng website giới thiệu cá nhân

## 1. Giới thiệu

Xây dựng website giới thiệu cá nhân bằng Node.js và Express, sử dụng HTML/CSS để thiết kế giao diện và các Route để điều hướng giữa các trang.

## 2. Công nghệ sử dụng

- Node.js
- Express.js
- HTML5, CSS3
- Git và GitHub

## 3. Cấu trúc thư mục

```text
Bt01/
├── public/
│   └── style.css
├── views/
│   ├── index.html
│   ├── about.html
│   ├── skills.html
│   ├── hobbies.html
│   └── contact.html
├── app.js
├── package.json
├── package-lock.json
└── README.md
```

## 4. Cách cài đặt và chạy chương trình

Mở Terminal tại thư mục `Bt01`, thực hiện:

```bash
npm install
node app.js
```

Mở trình duyệt tại địa chỉ localhost mà chương trình thông báo khi khởi động.

## 5. Các chức năng đã thực hiện

- Trang chủ giới thiệu cá nhân.
- Trang giới thiệu bản thân.
- Trang kỹ năng.
- Trang sở thích.
- Trang liên hệ.
- Menu điều hướng giữa các trang.
- Sử dụng CSS để thiết kế giao diện.
- Xử lý đường dẫn không tồn tại bằng lỗi HTTP 404.

## 6. Kết quả kiểm thử

- Trang chủ: hoạt động.
- `/about`: hoạt động.
- `/skills`: hoạt động.
- `/hobbies`: hoạt động.
- `/contact`: hoạt động.
- Đường dẫn không tồn tại: hiển thị trang lỗi 404.

## 7. Minh chứng
Các file jpg.

## 8. Đường dẫn triển khai

- GitHub repository: https://github.com/vantanIT/NodeJS-CD-CNTT18A
- Thư mục bài tập Bt01: https://github.com/vantanIT/NodeJS-CD-CNTT18A/tree/main/Bai04/Bt01
- Website chạy trên máy cá nhân: http://localhost:3003/
- Website đã triển khai công khai: Chưa triển khai.
