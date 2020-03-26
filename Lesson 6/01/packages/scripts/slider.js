'use strict'

let slider = document.querySelector('.slider');

//создаем иконку
let loadIcon = document.createElement('i');
loadIcon.classList.add('fas', 'fa-spinner', 'fa-spin');
slider.insertAdjacentElement('afterbegin', loadIcon);

//создаем левую стрелку
let leftArrow = document.createElement('i');
leftArrow.classList.add('fas', 'fa-chevron-left', 'slider-leftArrow');
slider.insertAdjacentElement('beforeend', leftArrow);

//создаем правую стрелку
let rightArrow = document.createElement('i');
rightArrow.classList.add('fas', 'fa-chevron-right', 'slider-rightArrow');
slider.insertAdjacentElement('beforeend', rightArrow);

window.addEventListener('load', function () {
    
    leftArrow.addEventListener('click', function () {
        images.setNextLeftImage();
    })

    rightArrow.addEventListener('click', function () {
        images.setNextRightImage();
    })

    images.init();
    loadIcon.style.display = 'none';
});

let images = {
    
    //Номер текущего изображения
    currentIdx: 0,
    
    //{NodeList<HTMLDivElement>} NodeList слайдов 
    slides: {},

    init() {
        this.slides = document.querySelectorAll('.slider-item');
        this.showImageWithCurrentIdx();
    },

    /**
     * Берем текущий слайд и убираем у него класс hidden-slide
     */
    showImageWithCurrentIdx() {
        this.slides[this.currentIdx].classList.remove('hidden-slide');
    },

    hideVisibleImage() {
        this.slides.forEach(slide => {
            if (!slide.classList.contains('hidden-slide')) {
                slide.classList.add('hidden-slide');
            }
        });
    },
    
    //Переключится на предыдущее изображение
    setNextLeftImage() {
        this.hideVisibleImage();
        if (this.currentIdx == 0) {
            this.currentIdx = this.slides.length - 1;
        } else {
            this.currentIdx--;
        }
        this.showImageWithCurrentIdx();
    },

    //Переключение на следующее изображение
    setNextRightImage() {
        this.hideVisibleImage();
        if (this.currentIdx == this.slides.length - 1) {
            this.currentIdx = 0;
        } else {
            this.currentIdx++;
        }
        this.showImageWithCurrentIdx();
    }
}
