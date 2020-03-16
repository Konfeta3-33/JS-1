'use strict'

let game = {

    //Запускает игру
    run() {
        while (true) {
            //Получаем направление игрока
            const direction = mover.getDirection();
            if (direction == null) {
                console.log('Игра окончена');
                return;
            }
            const nextPoint = mover.getNextPosition(direction);
            if (mover.canPlayerMakeStep(nextPoint)) { //Вариант от преподавателя
                renderer.clear();
                player.move(nextPoint);
                renderer.render();
            }
        }
    },

    //Этот метод выполняется при открытии страницы
    init() {
        console.log(`Ваше положение на поле в виде о`);
        renderer.render();
        console.log(`Чтобы начать игру наберите game.run() и нажмите Enter`);
    }
}

game.init();