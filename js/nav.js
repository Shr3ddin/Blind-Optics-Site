export const handleNav = () => {
	const burgerBtn = document.querySelector('.hamburger');
	const nav = document.querySelector('.nav');
	const searchForm = document.querySelector('.search-form');
	const navItemsWithDrop = document.querySelectorAll('.has-dropdown');

	const openNav = () => {
		nav.classList.toggle('nav--active');
		burgerBtn.classList.toggle('is-active');

		if (nav.classList.contains('nav--active')) {
			searchForm.classList.remove('search-form--active');
		}
	};

	navItemsWithDrop.forEach(item => {
		item.addEventListener('click', function () {
			const activeDropdown = document.querySelector('.nav__dropdown--active');
			const dropdownMenu = this.nextElementSibling;
			const ionIcon = this.querySelector('ion-icon[name="add-outline"], ion-icon[name="remove-outline"]');

			console.log(dropdownMenu);

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

	burgerBtn.addEventListener('click', openNav);
};
