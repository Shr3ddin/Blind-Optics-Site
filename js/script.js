const burgerBtn = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

const navItemsWithDrop = document.querySelectorAll('.has-dropdown');
const navDropdown = document.querySelector('.nav__dropdown');

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

const prevSlide = () => {
	if (currensSlidePos <= 0) {
		sliderItems.length - 1;
	} else {
		currensSlidePos--;
	}
};

const autoChangeSlide = () => {
	setInterval(() => {
		nextSlide();
	}, 7000);
};

burgerBtn.addEventListener('click', handleNav);
searchBtn.addEventListener('click', handleSearch);
window.addEventListener('load', autoChangeSlide);

navItemsWithDrop.forEach(item => {
	item.addEventListener('click', function () {
		// e.preventDefault();

		const dropdownMenu = this.nextElementSibling;
		const ionIcon = this.querySelector('ion-icon[name="add-outline"], ion-icon[name="remove-outline"]');

		dropdownMenu.classList.toggle('nav__dropdown--active');
		dropdownMenu.classList.contains('nav__dropdown--active')
			? ionIcon.setAttribute('name', 'remove-outline')
			: ionIcon.setAttribute('name', 'add-outline');
	});
});