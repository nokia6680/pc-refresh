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
