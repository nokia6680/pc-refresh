var menuOpener = document.querySelector('.js-menu-toggle');
var menuOverlay = document.querySelector('.nav');
var submenuOverlay = document.querySelector('.menu');
var bodyOverlay = document.querySelector('.body');

var searchToggle = document.querySelector('.js-search-toggle');
var searchMenu = document.querySelector('.js-search-form');

if (menuOpener) {
    menuOpener.addEventListener('click', function () {
        menuOpener.classList.toggle('opened');
        menuOverlay.classList.toggle('active');
        submenuOverlay.classList.toggle('active');
        bodyOverlay.classList.toggle('no-scroll');
    });
};

if (searchToggle) {
    searchToggle.addEventListener('click', function () {
        searchMenu.classList.toggle('active');
    });
};
