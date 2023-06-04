// Lắng nghe sự kiện khi trang đã tải xong
window.addEventListener("load", function() {
    // Hiển thị hộp xác nhận khi người dùng truy cập trang
    var result = confirm("Do you want to display this page?");
  
    // Kiểm tra kết quả của hộp xác nhận
    if (result) {
        // Nếu người dùng chọn OK, không làm gì cả
    } else {
        // Nếu người dùng chọn Cancel, chuyển hướng điều hướng đến một trang khác
        window.location.href = "https://example.com"; // Thay đổi đường dẫn theo trang mong muốn
    }
});
