const burgerBtn = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

const searchBtn = document.querySelector('.search-btn');
const searchForm = document.querySelector('.search-form');

const handleNav = () => {
	nav.classList.toggle('nav--active');
	burgerBtn.classList.toggle('is-active');
};

const handleSearch = () => {
	searchForm.classList.toggle('search-form--active');
};

burgerBtn.addEventListener('click', handleNav);
searchBtn.addEventListener('click', handleSearch);
