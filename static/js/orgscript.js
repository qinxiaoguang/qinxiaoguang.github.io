$(function(){
    // table of contents 换个名字
    tocNames = [
        '🌹','🍀','🍎','🌙','🍁','🍂','🌷','👍','🔥','😀','😆','😘','😝','😸','🌑','🌒','🌓','🌔','🌕','🌖','🌗','🌘','🌚','🌛','🌜','🌝','🍉'
    ]
    rand = Math.floor((Math.random()*tocNames.length));
    tocName = tocNames[rand];
    document.getElementById('table-of-contents').getElementsByTagName('h2')[0].innerHTML= tocName + '\n<a class="close-sidebar" href="#">Close</a>';
    document.getElementById('toggle-sidebar').getElementsByTagName('h2')[0].innerHTML= tocName;
    
    // 适应高
    var screenHeight = document.documentElement.clientHeight
    var contentHeight = $("#content").height();
    if (contentHeight < screenHeight) {
        document.getElementById("content").style.height = ""+screenHeight + "px"
    }
})
