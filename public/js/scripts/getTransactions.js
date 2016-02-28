var xhr = new XMLHttpRequest();

xhr.open("GET", "transactions?t=" + Math.random(), false);

xhr.send();

console.log(xhr.status);

document.getElementById("pings").innerHTML = xhr.responseText;
