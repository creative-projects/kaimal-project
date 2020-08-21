$(document).ready(function(){

function makeAccount(initial){
	  var account={}
	    account.package = undefined;
	    account.type = undefined;
		account.balance=initial;
		account.withraw=withraw;
		account.deposit=deposit;
		account.checkBalance=checkBalance;
	    account.setType = setType;
	    account.setPackage=setPackage;
	  return account;
}
var withraw = function(amount){
	if(this.balance-amount>=0){
		this.balance=this.balance - amount;
		return"here's your money: $" + amount;
	}
	   return "Insufficient fund.";
};
var deposit = function(amount){
	this.balance=this.balance + amount;
	return"your balance is:'$ " + this.balance;
};
var checkBalance=function(){
	return "your current balance is" + this.balance
};
var setType = function(type){
	this.type = type;
};
var setPackage = function(package){
	this.package = package;
}
 var account=makeAccount(1000)

 $('#bal').html(account.balance +" Dt")
 $("#btn2").click(function(){
	account.deposit(parseInt($("#deposit").val()))
	$('#bal').html(account.balance +" Dt")
});
$("#btn3").click(function(){
	account.withraw(parseInt($("#withdraw").val()))
	$('#bal').html(account.balance +" Dt")
});

});

