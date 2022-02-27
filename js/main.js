$(document).ready(function() {

    // A constructor for buttons
    function Button(value, index) {
        this.value = value;
        this.index = index;
        this.render = function() {
            var bg = value === '' ? 'white': 'gray w3-hover-gray';
            return '<input type="button" class="w3-button w3-cicle w3-border w3-' + bg + '" value="' + value + '" id="strim-btn-' + this.index + '"/>';
        }
    }

    // A constructor for the entire board
    function Board(givens, values) {
        this.renderBoard = function() {
            var counter = 0;
            for(var i = 1; i <= 81; i++) {
                if((i - 1) % 9 === 0) {
                    $('#game-area').html($('#game-area').html() + '<br/>');
                }
                if(i === givens[counter]) {
                    $('#game-area').html($('#game-area').html() + new Button(values[counter], i).render());
                    counter++;
                    continue;
                }
                $('#game-area').html($('#game-area').html() + new Button('', i).render());
            }
        }
    }

    // render all the buttons
    var board = new Board([2, 5, 8, 11, 13, 15, 17, 21, 23, 25, 28, 32, 36, 39, 43, 46, 50, 55, 56, 59, 63, 66, 68, 70, 74, 76, 78, 80], [1, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 7, 6, 5, 4, 4, 2, 3, 5, 6, 4, 5, 6]);
    board.renderBoard();
});
