AOS.init();

function dropDown(event) {
    const description = event.target.nextElementSibling;
    if (description && description.classList.contains('additional-info__item')) {
        description.classList.toggle('show');
    }
}

document.querySelectorAll('.additional-info__item-title').forEach(item => {
    item.addEventListener('click', dropDown);
});


    document.addEventListener("DOMContentLoaded", function() {
        const toggleButton = document.querySelector('.header__toggle');
        const menu = document.querySelector('.header__menu');
        const controls = document.querySelector('.header__controls');

        toggleButton.addEventListener('click', function() {
            menu.classList.toggle('header__menu--active');
            controls.classList.toggle('header__menu--active');
        });
    });

