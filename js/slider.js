export const initializeBestsellerSlider = () => {
    document.addEventListener('DOMContentLoaded', function () {
        var elms = document.getElementsByClassName('splide');

        for (var i = 0; i < elms.length; i++) {
            new Splide(elms[i], {
                type: 'loop',
                autoplay: true,
                arrows: true,
                pagination: false,
                perPage: 4,
                gap: '.7rem',
                breakpoints: {
                    1024: {
                        perPage: 3,
                    },
                    640: {
                        perPage: 2,
                    },
                    480: {
                        perPage: 1,
                    },
                }
            }).mount();
        }
    });
}