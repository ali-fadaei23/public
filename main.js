$(document).ready(function () {

    moment.locale('fa')
    var days = moment().daysInMonth()
    for (let i = 1; i <= days; i++) {
        const optionDay = '<option value="' + i + '">' + i + '</option>'
        $('#day').append(optionDay).val();
    }

    var month = moment()._locale._jMonths
    for (let i = 0; i < month.length; i++) {
        const optionMonth = '<option value="' + month[i] + '">' + month[i] + '</option>'
        $('#month').append(optionMonth).val();
    }

    const year = moment().year()
    for (let i = year; i >= 1340; i--) {
        console.log(year)
        const optionYear = '<option value="' + i + '">' + i + '</option>'
        $('#year').append(optionYear).val()
    }

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
