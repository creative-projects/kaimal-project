$(document).ready(function(){
  $("#btn").click(function(){
      //console.log("OKKKKK")
  if($("#password").val()==="12345"&&$("#account").val()==="12345" ){
  	console.log("OKKKKK")
  	window.location.replace("strategies of thinking outside the box.html");
  }else{
  	$("#msgerr").show();
  }

  });
});   



