'use strict'

let renderer = {

    renderBoard() {
        let result = this.generateBoard();
        document.body.insertAdjacentHTML('afterbegin', result);
        this.paintSquares();
    },

    generateBoard() {
        let board = '';

        const headerCells = config.letters.map(letter => `<th>${letter}</th>`).join('');
        board += `
            <tr>
                <th></th>
                ${headerCells}
            </tr>`

        for (let y = 1; y <= config.rows; y++) {
            board += '<tr>';
            board += `<th>${9 - y}</th>`;
            for (let x = 1; x <= config.cols; x++) {
                board += `<td data-x="${x}" data-y="${y}"></td>`;
            }
            board += '</tr>';
        }
        return `<table><tbody>${board}</tbody></table>`;
    },

    paintSquares() {
        document.querySelectorAll('td').forEach(item => {
            const x = Number(item.dataset.x);
            const y = Number(item.dataset.y);

            if (y % 2 == 1 && x % 2 == 0 || y % 2 == 0 && x % 2 == 1) {
                return item.classList.add('brown');
            }
        })
    },
}