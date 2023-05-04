/*-----------------------------------------------------------------------------
Theme Name: staco
Author: uigigs
Author URL: https://themeforest.net/user/uigigs/portfolio
-----------------------------------------------------------------------------*/
(function ($) {
    /*-- sticky header scripts start --*/
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 20) {
            $('.header-section').addClass("sticky");
        }
        else {
            $('.header-section').removeClass("sticky");
        }
    });
    /*-- sticky header scripts end --*/
})(jQuery);