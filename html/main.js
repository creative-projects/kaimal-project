$(document).ready(function(){
  $("#box").on('click',function(){
    $(".hi").slideDown();
       $(".hi").css( "visibility", "visible")
  });


 
 $("#btn").click(function(){
   if($("#password").val()==="12345"&&$("#account").val()==="12345" ){
  	console.log("access accepted")
  	window.location.replace("KaiMal+.html");
    }else{
  	  $("#msgerr").show();
  }
 });

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}


});



 
