$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 40) {
            $('#nav').addClass("sticky");
        } else {
            $('#nav').removeClass("sticky");
        }
    })

    //Menu script
    $('.menu-btn').click(function() {
        $('#nav .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});