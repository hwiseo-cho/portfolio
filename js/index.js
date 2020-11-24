var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.5.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

$(function(){
    $("#Profile").on("click",function(){
        $("#profileContent").show();
        $("#projectContent").hide();
        $("#aboutContent").hide();
    });
    $("#Project").on("click",function(){
        $("#profileContent").hide();
        $("#projectContent").show();
        $("#aboutContent").hide();
    })
    $("#About").on("click",function(){
        $("#profileContent").hide();
        $("#projectContent").hide();
        $("#aboutContent").show();
    })
});