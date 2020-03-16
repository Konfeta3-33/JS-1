'use strict'

let modalWindow = document.querySelector('.modal');
let button = document.querySelector('button');

button.addEventListener('click', function() {
    if (modalWindow.classList.contains('hide')) {
        modalWindow.classList.remove('hide');
        modalWindow.classList.add('magictime', 'puffIn');
        button.innerText = 'Нажать, чтобы скрыть модальное окно';
    } else {
        modalWindow.classList.add('magictime', 'puffOut');
        setTimeout(function() {
            modalWindow.classList.add('hide');
            modalWindow.classList.remove('magictime', 'puffIn', 'puffOut');
        }, 1000)
        button.innerText = 'Нажать, для появления модального окна';
    }   
})