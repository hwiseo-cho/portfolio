
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