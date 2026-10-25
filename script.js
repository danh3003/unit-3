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

// 2. Xử lý chế độ Dark Mode / Light Mode có ghi nhớ trạng thái
const darkModeBtn = document.getElementById('darkModeToggle');

// Kiểm tra xem người dùng đã từng bật dark mode trước đó chưa
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    if (darkModeBtn) darkModeBtn.textContent = '☀️ Sáng';
}

if (darkModeBtn) {
    darkModeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            darkModeBtn.textContent = '☀️ Sáng';
        } else {
            localStorage.setItem('theme', 'light');
            darkModeBtn.textContent = '🌙 Tối';
        }
    });
}