const header = document.querySelector('.header');

const burgerBtn = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

const navItemsWithDrop = document.querySelectorAll('.has-dropdown');
const navDropdown = document.querySelector('.nav__dropdown');

const searchBtn = document.querySelector('.search-btn');
const searchForm = document.querySelector('.search-form');

const sliderItems = document.querySelectorAll('.hero__item');

const ctaBtn = document.querySelector('.hero__cta-btn');

const ctaClicked = e => {
	// e.preventDefault();
	console.log('clicked');
};

ctaBtn.addEventListener('click', ctaClicked);

let lastScrollYPos = 0;

let currentSlide = sliderItems[0];
let currensSlidePos = 0;

const hideHeader = () => {
	const isScrollBottom = lastScrollYPos < window.scrollY;

	if (isScrollBottom) {
		header.classList.add('header--hide');
	} else {
		header.classList.remove('header--hide');
	}

	if (header.classList.contains('header--hide') && nav.classList.contains('nav--active')) {
		nav.classList.remove('nav--active');
		burgerBtn.classList.remove('is-active');
	}

	lastScrollYPos = window.scrollY;
};

const handleHeader = () => {
	if (window.scrollY > 50) {
		header.classList.add('header--active');
		hideHeader();
	} else {
		header.classList.remove('header--active');
	}
};

const handleNav = () => {
	nav.classList.toggle('nav--active');
	burgerBtn.classList.toggle('is-active');

	if (nav.classList.contains('nav--active')) {
		searchForm.classList.remove('search-form--active');
	}
};

const handleSearch = () => {
	searchForm.classList.toggle('search-form--active');

	if (searchForm.classList.contains('search-form--active')) {
		nav.classList.remove('nav--active');
		burgerBtn.classList.remove('is-active');
	}
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

window.addEventListener('scroll', handleHeader);
burgerBtn.addEventListener('click', handleNav);
searchBtn.addEventListener('click', handleSearch);
window.addEventListener('load', autoChangeSlide);

navItemsWithDrop.forEach(item => {
	item.addEventListener('click', function () {
		const activeDropdown = document.querySelector('.nav__dropdown--active');
		const dropdownMenu = this.nextElementSibling;
		const ionIcon = this.querySelector('ion-icon[name="add-outline"], ion-icon[name="remove-outline"]');

		if (activeDropdown && activeDropdown !== dropdownMenu) {
			activeDropdown.classList.remove('nav__dropdown--active');
			const activeIcon = activeDropdown.previousElementSibling.querySelector('ion-icon[name="remove-outline"]');
			if (activeIcon) {
				activeIcon.setAttribute('name', 'add-outline');
			}
		}

		dropdownMenu.classList.toggle('nav__dropdown--active');

		dropdownMenu.classList.contains('nav__dropdown--active')
			? ionIcon.setAttribute('name', 'remove-outline')
			: ionIcon.setAttribute('name', 'add-outline');
	});
});
