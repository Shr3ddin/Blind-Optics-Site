export const handleHeader = () => {
	const header = document.querySelector('.header');

	let lastScrollYPos = 0;

	const hideHeader = () => {
		const isScrollBottom = lastScrollYPos < window.scrollY;

		if (isScrollBottom) {
			header.classList.add('header--hide');
		} else {
			header.classList.remove('header--hide');
		}

		lastScrollYPos = window.scrollY;
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
