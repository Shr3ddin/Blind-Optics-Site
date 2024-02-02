const burgerBtn = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

const searchBtn = document.querySelector('.search-btn');
const searchForm = document.querySelector('.search-form');

const sliderItems = document.querySelectorAll('.hero__item');

let currentSlide = sliderItems[0];
let currensSlidePos = 0;

const handleNav = () => {
	nav.classList.toggle('nav--active');
	burgerBtn.classList.toggle('is-active');

	if (nav.classList.contains('nav--active')) {
		searchForm.classList.remove('search-form--active');
	}
};

const handleSearch = () => {
	searchForm.classList.toggle('search-form--active');
};

const changeSlide = () => {
	currentSlide.classList.remove('hero__item--active');
	sliderItems[currensSlidePos].classList.add('hero__item--active');
	currentSlide = sliderItems[currensSlidePos];
};

const nextSlide = () => {
	if (currensSlidePos >= sliderItems.length - 1) {
		currensSlidePos = 0;
	} else {
		currensSlidePos++;
	}
	changeSlide();
};

const autoChangeSlide = () => {
	setInterval(() => {
		nextSlide();
	}, 7000);
};

burgerBtn.addEventListener('click', handleNav);
searchBtn.addEventListener('click', handleSearch);
window.addEventListener('load', autoChangeSlide);
