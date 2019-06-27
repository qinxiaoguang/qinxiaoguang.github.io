$(function(){
    var screenHeight = document.documentElement.clientHeight
    var contentHeight = $("#content").height();
    if (contentHeight < screenHeight) {
        document.getElementById("content").style.height = ""+screenHeight + "px"
    }
})
