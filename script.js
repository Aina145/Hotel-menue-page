// Selected items logic
function selectItem(itemName) {
  // Instead of an alert, we can show a nice toast or just console log
  console.log("Selected: " + itemName);
  
  // Create a simple toast notification
  const toast = document.createElement('div');
  toast.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #ff6b6b;
    color: white;
    padding: 12px 24px;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    z-index: 1000;
    animation: slideIn 0.3s ease-out;
  `;
  toast.innerText = `Added ${itemName} to cart! 😋`;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'fadeOut 0.3s ease-in forwards';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Dark Mode Toggle using data-theme
function toggleTheme() {
  const currentTheme = document.body.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.body.setAttribute('data-theme', newTheme);
  
  const toggleBtn = document.getElementById("toggleTheme");
  toggleBtn.textContent = newTheme === 'dark' ? "☀️ Light Mode" : "🌙 Dark Mode";
  
  localStorage.setItem('theme', newTheme);
}

// Persist Theme
const savedTheme = localStorage.getItem('theme') || 'light';
document.body.setAttribute('data-theme', savedTheme);
document.getElementById("toggleTheme").textContent = savedTheme === 'dark' ? "☀️ Light Mode" : "🌙 Dark Mode";

// Simple Scroll Animation (Intersection Observer)
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('aos-animate');
    }
  });
}, observerOptions);

document.querySelectorAll('[data-aos]').forEach(el => observer.observe(el));

// Add specific styles for toast animations
const style = document.createElement('style');
style.innerHTML = `
  @keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  @keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }
`;
document.head.appendChild(style);
