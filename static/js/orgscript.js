$(function(){
    var bodyHeigh = $(document.body).height();
    var contentHeight = $("#content").height();
    console.log(bodyHeigh)
    console.log(contentHeight)
    if (contentHeight < bodyHeigh) {
        document.getElementById("content").style.height = ""+bodyHeight + "px"
    }
})
