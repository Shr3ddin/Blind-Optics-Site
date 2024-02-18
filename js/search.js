export const handleSearch = () => {
	const searchBtn = document.querySelector('.search-btn');
	const searchForm = document.querySelector('.search-form');

	const burgerBtn = document.querySelector('.hamburger');
	const nav = document.querySelector('.nav');

	const openSearch = () => {
		searchForm.classList.toggle('search-form--active');

		if (searchForm.classList.contains('search-form--active')) {
			nav.classList.remove('nav--active');
			burgerBtn.classList.remove('is-active');
		}
	};

	searchBtn.addEventListener('click', openSearch);
};
