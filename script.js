const circle = document.getElementById('circle');
const hambBtn = document.getElementById('hambBtn');
const closeBtn = document.getElementById('closeBtn');
const mainContent = document.querySelector('main');
const navLinks = document.querySelector('.main-nav--links');
const navLis = document.querySelectorAll('.main-nav--links > li');

hambBtn.addEventListener('click', () => {
	circle.classList.add('rotate');
	mainContent.classList.add('rotate');
  navLinks.classList.add('skew');
  navLis.forEach(li => li.classList.add('unskew'));
});

closeBtn.addEventListener('click', () => {
	circle.classList.remove('rotate');
	mainContent.classList.remove('rotate');
  navLinks.classList.remove('skew');
  navLis.forEach(li => li.classList.remove('unskew'));
});