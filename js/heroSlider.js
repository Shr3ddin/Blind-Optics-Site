export const handleHeroSlider = () => {
	const sliderItems = document.querySelectorAll('.hero__item');
    
    
	let currentSlide = sliderItems[0];
	let currensSlidePos = 0;

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

	window.addEventListener('load', autoChangeSlide);
};
