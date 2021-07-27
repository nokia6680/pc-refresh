const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: '.intro__next',
        prevEl: '.intro__prev',
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
});

const swiper0 = new Swiper('.swiper-container7', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    slideClass: 'header__slider-item',
    wrapperClass: 'header__slider-wrapper',
    navigation: {
        nextEl: '.header__links-next',
        prevEl: '.header__links-prev',
    },

    breakpoints: {
        1366: {
            slidesPerView: 'auto',
            spaceBetween: 20,
            slideClass: 'header__slider-item',
            wrapperClass: 'header__slider-wrapper',
            navigation: {
                nextEl: '.header__links-next',
                prevEl: '.header__links-prev',
            },
        },

        1680: {
            slidesPerView: 'auto',
            spaceBetween: 26,
            slideClass: 'header__slider-item',
            wrapperClass: 'header__slider-wrapper',
            navigation: {
                nextEl: '.header__links-next',
                prevEl: '.header__links-prev',
            },
        },
    }
});

// breakpoint where swiper will be destroyed
// and switches to a dual-column layout
const breakpoint = window.matchMedia('(min-width: 768px)');
// keep track of swiper instances to destroy later
let swiper1;
const breakpointChecker = function() {
    // if larger viewport and multi-row layout needed
    if (breakpoint.matches === true) {
        // clean up old instances and inline styles when available
        if (swiper1 !== undefined) swiper1.destroy(true, true);
        // or/and do nothing
        return;
        // else if a small viewport and single column layout needed
    } else if (breakpoint.matches === false) {
        // fire small viewport version of swiper
        return enableSwiper();
    }
};

const enableSwiper = function() {
    swiper1 = new Swiper('.swiper-container-1', {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
            nextEl: '.live__next',
            prevEl: '.live__prev',
        },

        pagination: false,
        initialSlide: 0,
        a11y: true,
        keyboardControl: true,
        grabCursor: true
    });
};

// keep an eye on viewport size changes
breakpoint.addListener(breakpointChecker);
// kickstart
breakpointChecker();

const swiper2 = new Swiper('.swiper-container-2', {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: '.trends__next',
        prevEl: '.trends__prev',
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
            navigation: {
                nextEl: '.trends__next',
                prevEl: '.trends__prev',
            },

            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
        },

        1366: {
            slidesPerView: 2,
            spaceBetween: 22,
            navigation: {
                nextEl: '.trends__next',
                prevEl: '.trends__prev',
            },

            pagination: false,
        },

        1680: {
            slidesPerView: 2,
            spaceBetween: 36,
            navigation: {
                nextEl: '.trends__next',
                prevEl: '.trends__prev',
            },

            pagination: false,
        }
    }
});

const swiper3 = new Swiper('.swiper-container-3', {
    slidesPerView: 4,
    spaceBetween: 10,
    navigation: {
        nextEl: '.date-carousel__next',
        prevEl: '.date-carousel__prev',
    },

    breakpoints: {
        320: {
            slidesPerView: 4,
            spaceBetween: 10,
            navigation: {
                nextEl: '.date-carousel__next',
                prevEl: '.date-carousel__prev',
            },
        },

        768: {
            slidesPerView: 6,
            spaceBetween: 20,
            navigation: {
                nextEl: '.date-carousel__next',
                prevEl: '.date-carousel__prev',
            },
        }
    }
});

const swiper4 = new Swiper('.swiper-container-4', {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: '.starring__next',
        prevEl: '.starring__prev',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
            navigation: {
                nextEl: '.starring__next',
                prevEl: '.starring__prev',
            },
        },

        768: {
            slidesPerView: 3,
            spaceBetween: 20,
            navigation: {
                nextEl: '.starring__next',
                prevEl: '.starring__prev',
            },
        }
    },
});
