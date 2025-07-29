document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-toggle');
  const scrollBtn = document.getElementById('scrollTop');

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    toggle.textContent = document.body.classList.contains('light') ? 'Dark Mode' : 'Light Mode';
  });

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollBtn.style.display = 'block';
    } else {
      scrollBtn.style.display = 'none';
    }
  });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
