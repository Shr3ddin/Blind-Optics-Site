export const handleHeader = () => {
	const header = document.querySelector('.header');
	const burgerBtn = document.querySelector('.hamburger');
	const nav = document.querySelector('.nav');

	let lastScrollYPos = 0;

	const hideHeader = () => {
		const isScrollBottom = lastScrollYPos < window.scrollY;

		if (isScrollBottom) {
			header.classList.add('header--hide');
		} else {
			header.classList.remove('header--hide');
		}

		lastScrollYPos = window.scrollY;

		if (header.classList.contains('header--hide') && nav.classList.contains('nav--active')) {
			nav.classList.remove('nav--active');
			burgerBtn.classList.remove('is-active');
		}
	};

	const openHeader = () => {
		if (window.scrollY > 50) {
			header.classList.add('header--active');
			hideHeader();
		} else {
			header.classList.remove('header--active');
		}
	};

	window.addEventListener('scroll', openHeader);
};
