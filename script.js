function selectItem(name) {
  const toast = document.createElement('div');
  toast.style.cssText = `position:fixed;bottom:20px;right:20px;background:#ff6b6b;color:white;padding:12px 24px;border-radius:12px;z-index:1000;animation:slideIn 0.3s ease-out;`;
  toast.innerText = `Added ${name} to cart! 😋`;
  document.body.appendChild(toast);
  setTimeout(() => { toast.style.animation = 'fadeOut 0.3s ease-in forwards'; setTimeout(() => toast.remove(), 300); }, 3000);
}
function toggleTheme() {
  const body = document.body;
  const newTheme = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  body.setAttribute('data-theme', newTheme);
  document.getElementById("toggleTheme").textContent = newTheme === 'dark' ? "☀️ Light Mode" : "🌙 Dark Mode";
  localStorage.setItem('theme', newTheme);
}
const savedTheme = localStorage.getItem('theme') || 'light';
document.body.setAttribute('data-theme', savedTheme);
document.getElementById("toggleTheme").textContent = savedTheme === 'dark' ? "☀️ Light Mode" : "🌙 Dark Mode";
const style = document.createElement('style');
style.innerHTML = `@keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } } @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } }`;
document.head.appendChild(style);
