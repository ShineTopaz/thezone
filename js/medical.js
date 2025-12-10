function setActiveByScreen() {
    $(".nav>ul>li:nth-child(3)").off("click mouseenter mouseleave");
    $(".nav>ul>li:last-child").off("click mouseenter mouseleave");

    if ($(window).width() > 768) {
        $(".nav>ul>li:nth-child(3)").on("mouseenter", function () {
            $(".drop_menu").stop().slideDown();
            $(this).stop().addClass("active")
        })
        $(".nav>ul>li:nth-child(3)").on("mouseleave", function () {
            $(".drop_menu").stop().slideUp();
            $(this).stop().removeClass("active")
        })

        $(".nav>ul>li:last-child").on("mouseenter", function () {
            $(".drop_menu_2").stop().slideDown();
            $(this).stop().addClass("active")
        })
        $(".nav>ul>li:last-child").on("mouseleave", function () {
            $(".drop_menu_2").stop().slideUp();
            $(this).stop().removeClass("active")
        })
    } else {
        $(".drop_menu , .drop_menu_2").stop().hide();
        $(".nav>ul>li:nth-child(3)").on("click", function () {
            $(".drop_menu").stop().slideToggle();
            $(this).stop().toggleClass("active")
        })

        $(".nav>ul>li:last-child").on("click", function () {
            $(".drop_menu_2").stop().slideToggle();
            $(this).stop().toggleClass("active")
        })
    }
}


// 화면 로드 시 실행
setActiveByScreen();

// 화면 크기 변경 시 실행
$(window).on("resize", function () {
    setActiveByScreen();
});
