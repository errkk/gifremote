$(document).ready(function() {
    var images = [
        'http://placekitten.com/1200/1200/',
        'http://placekitten.com/1700/1700/',
        'http://placekitten.com/1600/1600/',
        'http://placekitten.com/1500/1500/',
        'http://placekitten.com/1400/1400/',
        'http://placekitten.com/900/900/'
    ];

    $stage = $('#stage');
    $triggers = $('#triggers .trigger');

    $triggers.on('click', function() {
        var src = images[$(this).index()];
        changeImage(src);
    });

    function changeImage(src) {
        $('body').addClass('loading');
        preloadImage(src, function() {
            $stage.css('background-image', 'url(' + src + ')');
            $('body').removeClass('loading');
        });
    }

    function preloadImage(src, fn) {
        var img = document.createElement('img');
        img.src = src;
        img.onload = fn;
    }

});
