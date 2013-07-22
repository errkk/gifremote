$(document).ready(function() {
    var images = [
        '../images/1.gif',
        '../images/2.gif',
        '../images/3.gif',
        '../images/4.gif',
        '../images/5.gif',
        '../images/6.gif'
    ];

    $stage = $('#stage');
    $triggers = $('#triggers .trigger');

    $triggers.on('click', function() {
        var src = images[$(this).index()];
        $(this).addClass('active');
        $('body').removeClass('initial');
        changeImage(src);
    });

    function changeImage(src) {
        $('body').addClass('loading');
        preloadImage(src, function() {
            $stage.css('background-image', 'url(' + src + ')');
            $('body').removeClass('loading');
            $triggers.removeClass('active');
        });
    }

    function preloadImage(src, fn) {
        var img = document.createElement('img');
        img.src = src;
        img.onload = fn;
    }

});
