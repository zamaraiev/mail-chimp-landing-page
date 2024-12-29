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

document.addEventListener('DOMContentLoaded', () => {
    const signupButtons = document.getElementsByClassName('sign-up-button'); // HTMLCollection
    const popup = document.getElementById('signup-popup');
    const closeButton = document.getElementById('close-popup');
    
    console.log(signupButtons);
    
    for (const button of signupButtons) {
        button.addEventListener('click', () => {
            popup.style.display = 'flex';
        });
    }
    
    closeButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });
});
    
    