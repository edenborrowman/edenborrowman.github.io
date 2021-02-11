let t = parseFloat(document.getElementById("temp").innerHTML);
let w = parseFloat(document.getElementById("speed").innerHTML);

console.log(t);
console.log(w);
let wc =
  35.74 +
  0.6215 * t -
  35.75 * Math.pow(w, 0.16) +
  0.4275 * t * Math.pow(w, 0.16);

document.getElementById("windchill_num").innerHTML =
  wc.toFixed(2) + "&deg; " + "F";
