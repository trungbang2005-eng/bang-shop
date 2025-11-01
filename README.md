
Bang Shop Pro — Upload trực tiếp lên GitHub (Hướng dẫn)

1) Tải folder lên repo public có tên 'bang-shop' (hoặc bất kỳ tên khác, nhưng nhớ cập nhật trường 'Repository' trên trang Upload).
2) Bật GitHub Pages (Settings -> Pages -> Branch: main -> root).
3) Trên trang Upload (Quản lý / Tải ảnh lên):
   - Nhập GitHub owner (username), repo (ví dụ: bang-shop), branch (main), và PAT (Personal Access Token) — token chỉ lưu cục bộ trên trình duyệt nếu bạn chọn 'Lưu cấu hình tạm'.
   - Chọn thương hiệu, chọn ảnh, nhấn Upload.
4) Upload sẽ gửi ảnh vào path: images/<brand>/filename và tự cập nhật images/<brand>/list.json. Website sẽ hiển thị ảnh mới sau vài phút khi GitHub Pages build xong.
Security notes:
- PAT phải có quyền repo (classic token). Không gửi PAT cho người khác. Token được lưu localStorage nếu bạn dùng 'Lưu cấu hình tạm'.
- Nếu bạn gặp lỗi 403/401, hãy kiểm tra token và quyền.
