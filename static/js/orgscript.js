$(function(){
    var screenHeight = $(document.body).height();
    var contentHeight = $("#content").height();
    if (contentHeight < screenHeight) {
        document.getElementById("content").style.height = ""+height + "px"
    }
})
