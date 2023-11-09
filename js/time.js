function showTime (){
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();

var time= h + " : "  +   m   +  " :"  +  s;
document.getElementsByClassName('time')[0].innerText = time
  setTimeout(showTime,1000);
}