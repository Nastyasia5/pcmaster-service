import './modal.js';
import './header-menu-indicators.js';
document.querySelector('[data-modal="open"]').addEventListener('click', () => {
  document.querySelector('[data-modal="overlay"]').classList.add('is-open');
  document.body.classList.add('no-scroll');
});

document.querySelector('[data-modal="close"]').addEventListener('click', () => {
  document.querySelector('[data-modal="overlay"]').classList.remove('is-open');
  document.body.classList.remove('no-scroll');
});
document.addEventListener('DOMContentLoaded', function() {
  const menu = document.querySelector('.mobile-header-menu');
  const navLinks = document.querySelectorAll('.mobile-header-nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      menu.classList.remove('open', 'is-open');
    });
  });
});