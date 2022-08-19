$(document).ready(function () {


    $('.counter').counterUp({
        delay: 100,
        time: 100,
        
    });

    


    if ($('.progress-line').length) {
        $('.progress-line').appear(function () {
            var el = $(this);
            var percent = el.data('width');
            $(el).css('width', percent + '%');
        }, { accY: 0 });
    };



})
