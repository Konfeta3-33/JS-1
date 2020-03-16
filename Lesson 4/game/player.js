'use strict'

/**
 * Объект игрока, здесь будут все методы и св-ва связанные с ним
 * @property {int} x Позиция по Х-координате
 * @property {int} y Позиция по Y-координате
 */
const player = {
    x: 0,
    y: 0,

    /**
     *Двигает игрока по переданному направлению
     *@param {{x: int, y: int}} nextPoint - следующая точка пользователя
     */
    move(nextPoint) {
        // if (nextPoint.x >= 0 && nextPoint.y >= 0 && nextPoint.x < config.colsCount && nextPoint.y < config.rowsCount) {
            this.x = nextPoint.x;
            this.y = nextPoint.y;
        // } else {
            // this.x = player.x;
            // this.y = player.y;
        // }
    }
}