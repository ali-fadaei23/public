$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        autoplay: false,
        items: 1,
        loop: true,
        dots: false,
        nav: true,
    });

    $(".faq-question").on('click', function () {
        if ($(this).parent().is('.open')) {
            $(this).closest(".faq").find('.faq-answer-container').css({ border: '0', padding: '0' }).animate({ height: '0', opacity: '0' }, 150)
            $(this).css({ borderRadius: '8px 8px 8px 8px' })
            $(this).closest('.faq').removeClass('open')
        } else {
            var newHeight = $(this).closest('.faq').find('.p-text-faq').height() + 'px';
            $(this).closest(".faq").find('.faq-answer-container').css({ border: '1px solid #eeebeb', padding: '15px' }).animate({ height: newHeight, opacity: '1' }, 200)
            $(this).css({ borderRadius: '8px 8px 0 0' })
            $(this).closest('.faq').addClass('open')
        }

    })
})
