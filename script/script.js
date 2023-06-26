'use strict'

// Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const formBody = document.querySelector('.form-content')
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        formBody.classList.toggle('form-hide')
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}
//SWIPER
const swiper = new Swiper('.slider-main-block', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.body-main-block__arrow.swiper-button-next',
        prevEl: '.body-main-block__arrow.swiper-button-prev',
    },
});

// Таби
const tabNavItems = document.querySelectorAll('.deals-container__button');
const tabItems = document.querySelectorAll('.deals-img__item-div');
document.addEventListener("click", function (e) {
    const targetElement = e.target;
    let currentActiveIndex = null;
    let newActiveIndex = null;
    if (targetElement.closest('.deals-container__button')) {
        tabNavItems.forEach((tabNavItem, index) => {
            if (tabNavItem.classList.contains('active')) {
                currentActiveIndex = index;
                tabNavItem.classList.remove('active');
            }
            if (tabNavItem === targetElement) {
                newActiveIndex = index;
            }
        });
        targetElement.classList.add('active');
        tabItems[currentActiveIndex].classList.remove('active');
        tabItems[newActiveIndex].classList.add('active');
    }
});

document.querySelector('.form-content').addEventListener('submit', (e) => {
    e.preventDefault()
})


const ratings = document.querySelectorAll('.rating');
if (ratings.length > 0) {
    initRatings();
}


function initRatings() {
    let ratingActive;
    for (let index = 0; index < ratings.length; index++) {
        const rating = ratings[index];
        initRating(rating);
    }
    function initRating(rating) {
        initRatingVars(rating);
        setRatingActiveWidth();
        if (rating.classList.contains('rating_set')) {
            setRating(rating);
        }
    }
    function initRatingVars(rating) {
        ratingActive = rating.querySelector('.rating__active');

    }
    function setRatingActiveWidth(index) {
        const ratingActiveWidth = index / 0.05;
        ratingActive.style.width = `${ratingActiveWidth}%`;
    }
    function setRating(rating) {
        const ratingItems = rating.querySelectorAll('.rating__item');
        for (let index = 0; index < ratingItems.length; index++) {
            const ratingItem = ratingItems[index];
            ratingItem.addEventListener("mouseenter", function (e) {
                initRatingVars(rating);
                setRatingActiveWidth(ratingItem.value);
            });
            ratingItem.addEventListener("mouseleave", function (e) {
                setRatingActiveWidth();
            });
            ratingItem.addEventListener("click", function (e) {
                initRatingVars(rating);
            });
        }
    }
}
/////////respond field

const form = document.querySelector('.form__info-contact')
const respond = document.getElementById('input1')
const formButton = document.querySelector('.form__button')

formButton.addEventListener('click', function (e) {
    e.preventDefault()
    const reqExp = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/g
    if (reqExp.test(respond.value)) {
        document.querySelector('.modal__review').classList.add('modal__hidden');

    } else {
        document.querySelector('.modal__review').classList.remove('modal__hidden')
    }
    form.reset()
})

