function retrieveTransactionData() {

  var xhr = new XMLHttpRequest();

  xhr.open("GET", "transactions?t=" + Math.random(), false);
  xhr.send();

  console.log(xhr.status);

  document.getElementById("pings").innerHTML = xhr.responseText;

}

$(document).ready(function() {
  retrieveTransactionData();
  setInterval(retrieveTransactionData, 5000);
});
