$(document).ready(function() {

    // Add some functionalities to the Array prototype
    my_lib.augmentArray();

    var duplicates = [];

    var rows = [[], [], [], [], [], [], [], [], []];
    var columns = [[], [], [], [], [], [], [], [], []];
    var squares = [[1, 2, 3, 10, 11, 12, 19, 20, 21], [4, 5, 6, 13, 14, 15, 22, 23, 24],
    [7, 8, 9, 16, 17, 18, 25, 26, 27], [28, 29, 30, 37, 38, 39, 46, 47, 48],
    [31, 32, 33, 40, 41, 42, 49, 50, 51], [34, 35, 36, 43, 44, 45, 52, 53, 54], 
    [55, 56, 57, 64, 65, 66, 73, 74, 75], [58, 59, 60, 67, 68, 69, 76, 77, 78], 
    [61, 62, 63, 70, 71, 72, 79, 80, 81]];
    for(var i = 1; i <= 81; i++) {
        rows[parseInt((i - 1) / 9)].push(i);
        columns[parseInt((i - 1) % 9)].push(i);
    }

    // A function to add event handler to all the buttons
    function addListeners(givens) {
        var counter = 0;
        for(var i = 0; i <= 81; i++) {
            if(givens[counter] === i) {
                counter++;
                continue;
            }
            (function() {
                var c = i;
                $('#strim-btn-' + i).click(function() {
                    var value = $(this).val() === ''? 1: parseInt($(this).val()) + 1;
                    if(value === 10) {
                        value = '';
                    }
                    $(this).val(value);
                    check(c, 'row');
                    check(c, 'column');
                    check(c, 'square');
                    checkFinished();
                });
            }());
        }
    }

    function changeBg(btn1, btn2) {
        btn1.css('background-color', 'red');
        btn2.css('background-color', 'red');
    }

    
    function check(index, what) {
        switch(what) {
            case 'row':
                var ar = rows;
                break;
            case 'column':
                var ar = columns;
                break;
            default:
                var ar = squares;
                break;
        }
        var button = $('#strim-btn-' + index);
        for(var i = 0; i < ar.length; i++) {
            if(ar[i].inArray(index)) {
                for(var j = 0; j < ar[i].length; j++) {
                    if(index === ar[i][j]) {
                        continue;
                    }
                    var secButton = $('#strim-btn-' + ar[i][j]);
                    if(button.val() === secButton.val()) {
                        changeBg(button, secButton);
                    }
                }
                break;
            }
        }
    }

    // A function that checks whether the game is finished or not
    function checkFinished(button) {}

    // A constructor for buttons
    function Button(value, index) {
        this.render = function() {
            var bg = value === '' ? 'white': 'darkgray';
            return '<input type="button" class="w3-button w3-cicle w3-border " value="' + value + '" id="strim-btn-' + index + '" style="background-color:' + bg + '"/>';
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
