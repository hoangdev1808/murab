document.addEventListener("DOMContentLoaded", function () {
    popup();
});
function popup(){
    $('#popup').on('click', function(){
        $('.popup-container').slideToggle();
    })
}