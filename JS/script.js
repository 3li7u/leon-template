// Handle side navigation 

const navBtn = document.getElementById('nav-icon');
const sideNav = document.getElementById('side-nav');
const closeBtn = document.getElementById('close-btn');

navBtn.addEventListener('click', () => {
  sideNav.style.left = '0';
});

closeBtn.addEventListener('click', () => {
  sideNav.style.left = '-100%';
});