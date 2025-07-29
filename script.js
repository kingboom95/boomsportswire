const toggleBtn = document.getElementById('theme-toggle');
const scrollTopBtn = document.getElementById('scrollTop');

function updateTheme() {
  document.body.classList.toggle('light-mode');
  const isLight = document.body.classList.contains('light-mode');
  toggleBtn.textContent = isLight ? 'Dark Mode' : 'Light Mode';
}

toggleBtn.addEventListener('click', updateTheme);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
