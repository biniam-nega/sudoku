$(document).ready(function() {

    // A function to add event handler to all the buttons
    function addListeners(givens) {
        var counter = 0;
        for(var i = 0; i < 81; i++) {
            if(counter === i) {
                counter++;
                continue;
            }
            (function() {
                $('#strim-btn-' + i).click(function() {
                    var value = $(this).val() === ''? 1: parseInt($(this).val()) + 1;
                    if(value === 7) {
                        value = '';
                    }
                    $(this).val(value);
                    checkRow(this);
                    checkColumn(this);
                    checkSquare(this);
                    checkFinished();
                });
            }());
        }
    }

    // A function that checks if there is a duplicate in a row
    function checkRow(button) {

    }

    // A function that checks if there is a duplicate in a column
    function checkColumn(button) {}

    // A function that checks if there is a duplicate in the 3x3 square
    function checkSquare(button) {}

    // A function that checks whether the game is finished or not
    function checkFinished(button) {}

    // A constructor for buttons
    function Button(value, index) {
        this.render = function() {
            var bg = value === '' ? 'white': 'gray w3-hover-gray';
            return '<input type="button" class="w3-button w3-cicle w3-border w3-' + bg + '" value="' + value + '" id="strim-btn-' + index + '"/>';
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
                    var button = new Button(values[counter], i)
                    $('#game-area').html($('#game-area').html() + button.render());
                    counter++;
                    continue;
                }
                var button = new Button('', i)
                $('#game-area').html($('#game-area').html() + button.render());
            }
            addListeners(givens);
        }
    }

    // render all the buttons
    var board = new Board([2, 5, 8, 11, 13, 15, 17, 21, 23, 25, 28, 32, 36, 39, 43, 46, 50, 55, 56, 59, 63, 66, 68, 70, 74, 76, 78, 80], [1, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 7, 6, 5, 4, 4, 2, 3, 5, 6, 4, 5, 6]);
    board.renderBoard();
});
