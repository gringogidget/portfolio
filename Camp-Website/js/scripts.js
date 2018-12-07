var mws = mws || {};

$(function () {

    $('#mws-main-nav > .nav-items > ul > li:first-child').mouseenter(function () {

        $('.mws-dropdown').addClass('expanded');
        $('.mws-dropdown').parent().addClass('open');

    });

    $('#mws-main-nav > .nav-items > ul > li:first-child').mouseleave(function () {

        $('.mws-dropdown').removeClass('expanded');
        $('.mws-dropdown').parent().removeClass('open');

    });

    $('#mws-main-nav .hamburger').click(function () {
        mws.openMobMenu();
    });

    $('#mws-main-nav .close-mob-menu').click(function () {
        mws.closeMobMenu();
    });

});

mws.openMobMenu = function () {

    $('#mws-main-nav .hamburger').fadeOut('fast');
    $('#mws-main-nav .close-mob-menu').fadeIn('fast');
    $('#mws-main-nav .mob-nav-items').addClass('open');

};

mws.closeMobMenu = function () {

    $('#mws-main-nav .hamburger').fadeIn('fast');
    $('#mws-main-nav .close-mob-menu').fadeOut('fast');
    $('#mws-main-nav .mob-nav-items').removeClass('open');

    setTimeout(function () {
        $('#mws-main-nav .hamburger').removeAttr('style');
    }, 500);

};

