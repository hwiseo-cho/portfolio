
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
    });
    $("#About").on("click",function(){
        $("#profileContent").hide();
        $("#projectContent").hide();
        $("#aboutContent").show();
    });
    $("#btn1").on("click",function(){
        $("#modal1").show();
        $(".mVideo").play();
    });
    $("#btn2").on("click",function(){
        $("#modal2").show();
        $(".mVideo2").play();
    });
    $(".close").on("click",function(){
        $(".modal").hide();
    });
    
    
});
