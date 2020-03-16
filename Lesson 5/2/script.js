'use strict'

const buttons = document.querySelectorAll('button');
// const image = document.querySelector('.product').querySelector('img');
// const description = document.querySelector('.product').querySelector('.desc');

buttons.forEach(function(button) {
    button.addEventListener('click', clickOnButton);
})

function clickOnButton(event) {
    const parentNode = event.target.parentNode;
    const image = parentNode.querySelector('img');
    const description = parentNode.querySelector('.desc');
    
    if (description.classList.contains('hide')) {
        image.classList.add('hide');
        description.classList.remove('hide');
        event.target.innerText = 'Отмена';
    } else {
        image.classList.remove('hide');
        description.classList.add('hide');
        event.target.innerText = 'Подробнее';
    }
}
