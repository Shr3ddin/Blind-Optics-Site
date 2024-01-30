const burgerBtn = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

const handleNav = () => {
	nav.classList.toggle('nav--active');
	burgerBtn.classList.toggle('is-active');
};

burgerBtn.addEventListener('click', handleNav);
