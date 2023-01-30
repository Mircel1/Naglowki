//informacje o autorze

$().ready(function(){
   
    $("body").append("<div/>");
    $("body").append("<input/>");
    $("body").append("<button>tekst</button>");
    $("body").append("<span>tekst1</span>");
    $("body").append("<h1>tekst2</h1>");
    $("body").append("<h2/>tekst4</h2>");
    $("body").append("<h3>tekst5</h3>");
    $("body").append("<h4>tekst6</h4>");
    $("body").append("<h5>tekst7</h5>");

    $("h1").hover(function(){
        $("h1").css("color","magenta")
    })
    $("button").click(function(){
        $("input").val("y")
    })
    $("span").mouseenter(function(){
        $("span").css("font-weight","bold")
    })
    $("span").mouseleave(function(){
        $("span").css("font-weight","normal")
    })
    $("input").keydown(function(){
        $("h5").html($("input").val())
    })
})
