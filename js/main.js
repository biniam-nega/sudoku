$(document).ready(function () {

    function init() {
        // Add some functionalities to the Array prototype
        my_lib.augmentArray();

        // Initialize some variables
        rows = [];
        columns = [];
        squares = [];
        duplicates = [];
        givens = ['11', '13', '14', '15', '17', '27', '28', '29', '31', '32', '36', '42', '44', '48', '49',
            '52', '53', '54', '56', '57', '58', '61', '62', '66', '68', '74', '78', '79', '81', '82', '83', '93', '95',
            '96', '97', '99'];
        values = [2, 7, 5, 3, 6, 1, 2, 4, 6, 8, 9, 6, 3, 8, 9, 3, 8, 6, 7, 2, 5, 4, 5, 1, 7, 2, 4, 3,
            1, 4, 9, 6, 9, 5, 8, 7];

        getRowsColsSquares();
    }

    function getRowsColsSquares() {
        // Get the buttons in the same row, column or square
        var rowCounter = 0, squareCounter = 0;
        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                var index = '' + (i + 1) + (j + 1);
                // append to the rows array
                rows[i] = rows[i] || [];
                rows[i].push(index);

                // append to the columns array
                columns[j] = columns[j] || [];
                columns[j].push(index);

                // get the squares
                squares[squareCounter] = squares[squareCounter] || [];
                squares[squareCounter].push(index);
                if ((j + 1) % 3 === 0) {
                    squareCounter++;
                }
            }
            if (squares[squareCounter - 1].length === 9) {
                continue;
            }
            squareCounter -= 3;
        }
    }


    // A function to add event handler to all the buttons
    function addListeners(givens) {
        for (var i = 1; i <= 9; i++) {
            for (var j = 1; j <= 9; j++) {
                var index = '' + i + j;
                if (givens.inArray(index)) {
                    continue;
                }
                (function () {
                    var c = index;
                    $('#btn-' + index).click(function () {
                        var value = $(this).val() === '' ? 1 : parseInt($(this).val()) + 1;
                        if (value === 10) {
                            value = '';
                        }
                        $(this).val(value);
                        checkDif();
                        check(c, 'row');
                        check(c, 'column');
                        check(c, 'square');
                        checkFinished();
                    });
                }());
            }
        }
    }

    function changeBg(btn1, btn2) {
        btn1.css('background-color', 'red');
        btn2.css('background-color', 'red');
    }

    function checkDif() {
        for (var i = 0; i < duplicates.length; i++) {
            if (duplicates[i][0].val() !== duplicates[i][1].val()) {
                var btn1Index = /[0-9]+/.exec(duplicates[i][0].attr('id'))[0];
                var btn2Index = /[0-9]+/.exec(duplicates[i][1].attr('id'))[0];
                duplicates[i][0].css('background-color', givens.inArray(btn1Index) ? 'darkgray': 'white');
                duplicates[i][1].css('background-color', givens.inArray(btn2Index) ? 'darkgray': 'white');
                duplicates.remove(i);
            }
        }
    }


    function check(index, what) {
        switch (what) {
            case 'row':
                var ar = rows;
                break;
            case 'column':
                var ar = columns;
                break;
            default:
                var ar = squares;
        }
        for (var i = 0; i < 9; i++) {
            if (ar[i].inArray(index)) {
                for (var j = 0; j < 9; j++) {
                    var index2 = ar[i][j];
                    if (index === index2) {
                        continue;
                    }
                    if ($('#btn-' + index).val() != '' && ($('#btn-' + index).val() === $('#btn-' + index2).val())) {
                        duplicates.push([$('#btn-' + index), $('#btn-' + index2)]);
                        changeBg($('#btn-' + index), $('#btn-' + index2));
                    }
                }
                break;
            }
        }
    }

    // A function that checks whether the game is finished or not
    function checkFinished() {
        // for(var i = 0; i < 9; i++) {
        //     for(var )
        // }
    }

    // A constructor for buttons
    function Button(value, id) {
        this.render = function () {
            var bg = value === '' ? 'white' : 'darkgray';
            var hover = value === '' ? '' : 'w3-hover-gray'
            return '<input type="button" class="w3-button w3-cicle w3-border ' + hover + '" value="' + value + '" id="btn-' + id + '" style="background-color:' + bg + '"/>';
        }
    }

    // A constructor for the entire board
    function Board(givens, values) {
        this.renderBoard = function () {
            counter = 0;
            for (var i = 1; i <= 9; i++) {
                for (var j = 1; j <= 9; j++) {
                    var index = '' + i + j;
                    if (givens.inArray(index)) {
                        var button = new Button(values[counter], index)
                        $('#game-area').html($('#game-area').html() + button.render());
                        counter++;
                        continue;
                    }
                    var button = new Button('', index);
                    $('#game-area').html($('#game-area').html() + button.render());
                }
                $('#game-area').html($('#game-area').html() + '<br/>');
            }
            addListeners(givens);
        }
    }


    // initialization
    init();

    // render all the buttons
    var board = new Board(givens, values);
    board.renderBoard();
});
