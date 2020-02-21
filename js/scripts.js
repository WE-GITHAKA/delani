/ jquery for image toggle
$(document).ready(function() {
  $("#whatText").hide();
  $("#whatText2").hide();
  $("#whatText3").hide();
  $(".imgtoggle01, .imgtoggle1").click(function() {
    $("#whatText").toggle();
    $(".imgtoggle01").toggle();
  });
  $(".imgtoggle02, .imgtoggle2").click(function() {
    $("#whatText2").toggle();
    $(".imgtoggle02").toggle();
  });
  $(".imgtoggle03, .imgtoggle3").click(function() {
    $("#whatText3").toggle();
    $(".imgtoggle03").toggle();
  });
});
//hover effect on the portfolio section
$(document).ready(function() {
  $(".myportfolio").hover(
    function() {
      $(this)
        .find(".myproject")
        .show();
    },
    function() {
      $(this)
        .find(".myproject")
        .hide();
    }
  );
});

//poup on submission
$(document).ready(function() {
  document.getElementById("form").addEventListener("submit", popUp);
  function popUp() {
    alert("Thanks Your message has been received.");
  }
});

 
function submit(){
var name=document.getElementById("name").value;
var messages = document.getElementById("message").value;
if(name,messages == ''){
    alert("Make sure all field are filled")
}
else{
alert("Thank you for contacting Delani Studio.Wehave received your message" + ' ' + name );
}
};