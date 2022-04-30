function getTime(timeSec) {
    var holder = timeSec;

    var hour = parseInt(holder / 3600);
    holder %= 3600;
    var min = parseInt(holder / 60);
    holder %= 60;
    sec = holder;

    return (hour == 0 ? '0:' : '<span>' + hour + '</span>' + ': ') +
        (min < 10 ? '0' + min + ':' : '<span>' + min + '</span>' + ': ') +
        (sec < 10 ? '0' + sec : '<span>' + sec + '</span>' + '');
}
// Store data in the localStorage
localStorage.level = localStorage.level || '1';
localStorage.bestTime = localStorage.bestTime || '0';
localStorage.theme = localStorage.theme || 'light';

function darkTheme() {
    if(localStorage.theme == 'light') {
        $('body').removeClass('w3-black');
        return;
    }
    $('body').addClass('w3-black');
}

$(document).ready(function() {
    darkTheme();
    
    $('#theme').click(function() {
        localStorage.theme = localStorage.theme == 'light'? 'dark': 'light';
        darkTheme();
    });
});
