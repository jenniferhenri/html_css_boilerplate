// hey hey hey


//
window.onload = function(){
//alert('hey hey hey');
statusReport('hey hey hey');

var username = prompt("what is your name?");
var mission = prompt("what is your mission?");

var contentContainer =  document.getElementById('content');

contentContainer.innerHTML = username + ' is on a mission to ' + mission;





}

function statusReport(message){
console.log(message);
return message;

}
