if (localStorage.getItem("visit") === null) {
  var visitCount = 0;
} else {
  var visitCount = localStorage.getItem('visit');
}

if (visitCount > 5){
  document.getElementById('alleps').style.cssText = "display:static;";
} else {
  document.getElementById('intro').style.cssText = "display:static;";
}

localStorage.setItem('visit', visitCount + 1);