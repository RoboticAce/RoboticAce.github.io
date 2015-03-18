/*jslint sloppy:true*/
/*global $ */
$('.clickable').on('click', function () {
    $(this).toggleClass('clicked');
});

$('body').on('click', function () {
    $(this).toggleClass('clicked');
});