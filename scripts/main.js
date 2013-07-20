$(document).ready(function() {
    var images = [
        'http://rack.2.mshcdn.com/media/ZgkyMDEzLzAyLzI4L2U4L3Nob3dlcmNhdC44ZGZiZi5naWYKcAl0aHVtYgkxMjAweDk2MDA-/7c27db65/bd5/shower-cat.gif',
        'http://25.media.tumblr.com/tumblr_mbaic7FGXT1qbvq2so1_500.gif',
        'http://www.reactiongifs.com/wp-content/uploads/2013/05/deal.gif',
        'http://gifling.com/galleries/gifs1/cat-digging-snow.gif',
        'http://24.media.tumblr.com/tumblr_m0py8284X31qf5z7ko1_500.gif',
        'http://d1d2e8z52bbsdm.cloudfront.net/blog/wp-content/uploads/2013/05/cat-bath.gif'
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
