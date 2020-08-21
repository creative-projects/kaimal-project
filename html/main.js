$(document).ready(function(){
  $("#box").on('click',function(){
    $(".hi").slideDown();
       $(".hi").css( "visibility", "visible")
  });


 
 $("#btn").click(function(){
   if($("#password").val()==="12345"&&$("#account").val()==="12345" ){
  	console.log("access accepted")
  	window.location.replace("KA2.html");
    }else{
  	  $("#msgerr").show();
  }
 });
});  


/*var client=makeAccount() {
var	account= {};
var	balance= initial
	account.deposit(amount) {
		this.balance = this.balance + amount
		return this.balance;
	}
	account.withDraw(amount) {
		this.balance = this.balance - amount
		return this.balance;
	}
}
*/


