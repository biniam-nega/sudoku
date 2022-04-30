$(document).ready(function() {

    // the me modal
    $('#close-me-btn').click(function() {
        $('#me-modal').hide();
    });
    $('#open-me-btn').click(function() {
        $('#me-modal').show();
    });

     // the about modal
     $('#close-about-btn').click(function() {
        $('#about-modal').hide();
    });
    $('#open-about-btn').click(function() {
        $('#about-modal').show();
    });

    // display best time
    if(localStorage.bestTime == 'none') {
        console.log('here');
        document.getElementById('time').innerHTML = 'Not played yet';
    }
    else {
        document.getElementById('time').innerHTML = getTime(localStorage.bestTime);
    }

    // display the level reached
    document.getElementById('level').innerHTML = localStorage.level + '/100';

});
