$(function () {
    // スクロール
    $('a[href^="#"]').click(function () {
        if (window.matchMedia("(min-width: 769px)").matches) {
            var headerHight = 55;
        } else {
            var headerHight = 0;
        }
        var speed = 400;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - headerHight;
        $('body,html').animate({ scrollTop: position }, speed, 'swing');
        $('.drawr').hide();
        $('.header-humberger').removeClass('is-open');
        return false;
    });

    // ハンバーガーメニュー
    windowHeight = $(window).height();
    $('.drawr').css('height', windowHeight);

    $(document).ready(function () {
        $('.header-humberger').click(function () {
            if ($('.drawr').is(":animated")) {
                return false;
            } else {
                $('.drawr').animate({ width: 'toggle' });
                $(this).toggleClass('is-open');
                return false;
            }
        });
    });

    //別領域をクリックでメニューを閉じる
    $(document).click(function (event) {
        if (!$(event.target).closest('.drawr').length) {
            $('.header-humberger').removeClass('is-open');
            $('.drawr').hide();
        }
    });
});