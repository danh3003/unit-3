// 1. Xử lý hiệu ứng ẩn/hiện mũi tên trong chuỗi thảo luận
function toggleElement(button) {
    button.classList.toggle('active');
    const content = button.nextElementSibling;
    
    if (content) {
        if (content.classList.contains('show')) {
            content.classList.remove('show');
        } else {
            content.classList.add('show');
        }
    }
}

// 2. Xử lý chế độ Dark Mode / Light Mode có ghi nhớ trạng thái (Chuẩn logic biểu tượng & Tiếng Anh)
const darkModeBtn = document.getElementById('darkModeToggle');

// Kiểm tra xem người dùng đã từng bật dark mode trước đó chưa
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    if (darkModeBtn) darkModeBtn.textContent = '☀️ Light'; // Đang ở Dark thì hiển thị nút chuyển về Light
} else {
    if (darkModeBtn) darkModeBtn.textContent = '🌙 Dark'; // Đang ở Light thì hiển thị nút chuyển sang Dark
}

if (darkModeBtn) {
    darkModeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            darkModeBtn.textContent = '☀️ Light'; // Đang ở Dark, bấm để về Light
        } else {
            localStorage.setItem('theme', 'light');
            darkModeBtn.textContent = '🌙 Dark'; // Đang ở Light, bấm để sang Dark
        }
    });
}