//function to toggle between the icons and the text
$(document).ready(function(){
    
    $(".btn_1").click(function(){ 
        $("p.par_1").show();
        $(".btn_1").hide(); 
    });

    $("p.par_1").click(function(){
        $("p.par_1").hide();
        $(".btn_1").show(); 
    });

     $(".btn_2").click(function(){
         $("p.par_2").show();   
         $(".btn_2").hide();
     });

     $("p.par_2").click(function(){
         $("p.par_2").hide();
         $(".btn_2").show();
     });

     $(".btn_3").click(function(){
         $("p.par_3").show();   
         $(".btn_3").hide();
     });
     
     $("p.par_3").click(function(){
         $(".btn_3").show();
         $("p.par_3").hide();
     }); 
  });
