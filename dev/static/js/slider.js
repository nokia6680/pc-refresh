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

const swiper1 = new Swiper('.swiper-container-1', {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: '.live__next',
        prevEl: '.live__prev',
    },

    pagination: false,
});

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
});

const swiper3 = new Swiper('.swiper-container-3', {
    slidesPerView: 4,
    spaceBetween: 10,
    navigation: {
        nextEl: '.date-carousel__next',
        prevEl: '.date-carousel__prev',
    },
});

const swiper4 = new Swiper('.swiper-container-4', {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: '.starring__next',
        prevEl: '.starring__prev',
    },

    pagination: false,
});
