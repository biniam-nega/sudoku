$(document).ready(function () {

    // Add some functionalities to the Array prototype
    my_lib.augmentArray();

    // Initialize some variables
    var duplicates = [];
    var givens = ['11', '13', '14', '15', '17', '27', '28', '29', '31', '32', '36', '42', '44', '48', '49', 
        '52', '53', '54', '56', '57', '58', '61', '62', '66', '68', '74', '78', '79', '81', '82', '83', '93', '95', 
        '96', '97', '99'];
    var values = [2, 7, 5, 3, 6, 1, 2, 4, 6, 8, 9, 6, 3, 8, 9, 3, 8, 6, 7, 2, 5, 4, 5, 1, 7, 2, 4, 3, 
        1, 4, 9, 6, 9, 5, 8, 7];
    console.log(values.length, givens.length)

    // A function to add event handler to all the buttons
    function addListeners(givens) {
        for (var i = 1; i <= 9; i++) {
            for (var j = 1; j <= 9; j++) {
                var index = '' + i + j;
                if(givens.inArray(index)) {
                    continue;
                }
                (function () {
                    var c = index;
                    console.log(c);
                    $('#btn-' + index).click(function () {
                        console.log('clicked')
                        var value = $(this).val() === '' ? 1 : parseInt($(this).val()) + 1;
                        if (value === 10) {
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
    }

    // returns the index of the button from 1-81
    function getButtonIndex(button) {
        return /[0-9]+/.exec(button.attr('id'))[0];
    }

    function changeBg(btn1, btn2) {

        // for (var i = 0; i < duplicates.length; i++) {
        //     console.log(duplicates[1][0].val())
        //     // if (duplicates[i].inArray(btn1)) {
        //         if((duplicates[i][0].val() !== duplicates[i][1].val())) {
        //             var btn1Index = getButtonIndex(duplicates[i][0]), btn2Index = getButtonIndex(duplicates[i][1]);
        //             duplicates[i][0].css('background-color', givens.inArray(btn1Index)? 'darkgray': 'white');
        //             duplicates[i][0].css('background-color', givens.inArray(btn2Index)? 'darkgray': 'white');
        //         }
        //     // }
        // }

        // btn1.css('background-color', 'red');
        // btn2.css('background-color', 'red');
    }


    function check(index, what) {
        // switch (what) {
        //     case 'row':
        //         var ar = rows;
        //         break;
        //     case 'column':
        //         var ar = columns;
        //         break;
        //     default:
        //         var ar = squares;
        //         break;
        // }
        // var button = $('#strim-btn-' + index);
        // for (var i = 0; i < ar.length; i++) {
        //     if (ar[i].inArray(index)) {
        //         for (var j = 0; j < ar[i].length; j++) {
        //             if (index === ar[i][j]) {
        //                 continue;
        //             }
        //             var secButton = $('#strim-btn-' + ar[i][j]);
        //             if (button.val() !== '' && (button.val() === secButton.val())) {
        //                 duplicates.push([button, secButton]);
        //                 changeBg(button, secButton);
        //             }
        //         }
        //         break;
        //     }
        // }
    }

    // A function that checks whether the game is finished or not
    function checkFinished(button) { }

    // A constructor for buttons
    function Button(value, id) {
        this.render = function () {
            var bg = value === '' ? 'white' : 'darkgray';
            var hover = value === '' ? '': 'w3-hover-gray'
            return '<input type="button" class="w3-button w3-cicle w3-border ' + hover + '" value="' + value + '" id="btn-' + id + '" style="background-color:' + bg + '"/>';
        }
    }

    // A constructor for the entire board
    function Board(givens, values) {
        this.renderBoard = function () {
            counter = 0;
            for (var i = 1; i <= 9; i++) {
                for(var j = 1; j <= 9; j++) {
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

    // render all the buttons
    var board = new Board(givens, values);
    board.renderBoard();
});
