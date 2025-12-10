$(".info .checkbox").on('change', function () {
    $(".info .checkbox").not(this).prop('checked', false);
});
$(".agree .checkbox").on('change', function () {
    $(".agree .checkbox").not(this).prop('checked', false);
});

$(".nav>ul>li:last-child").hover(function () {
    $(".drop_menu_2").stop().slideToggle();
    $(this).stop().toggleClass("active")
})
$(".nav>ul>li:nth-child(3)").hover(function () {
    $(".drop_menu").stop().slideToggle();
    $(this).stop().toggleClass("active")
})
