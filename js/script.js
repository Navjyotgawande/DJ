//aos start
AOS.init();
//aos end

//toggle navigation start
// $(document).ready(function(){
// $("#icon").click(function(){
//     $("ul").toggleClass("show");
    
    
    
//     });
    
//     });

var a=1;
$(document).ready(function(){
$("#abt").click(function(){
$("#links").hide();
a=1;
});
$("#hom").click(function(){
    $("#links").hide();
    a=1;
    });
    $("#show").click(function(){
        $("#links").hide();
        a=1;
        });
        $("#events").click(function(){
            $("#links").hide();
            a=1;
            });  
            $("#musics").click(function(){
                $("#links").hide();
                a=1;
                });  
                $("#cont").click(function(){
                    $("#links").hide();
                    a=1;
                    });   

$("#icon").click(function(){
            $("#links").slideToggle();
        //  alert("1");
// if (a==1){
//          $("#links").animate({"right":"0"});
//          a=2;
// }
// else{
//          $("#links").animate({"right":"-100%"});
// } 
});
});
//toggle navigation end 