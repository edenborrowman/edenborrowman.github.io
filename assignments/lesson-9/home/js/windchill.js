let t = parseFloat(document.getElementById("temp").innerHTML);
let w = parseFloat(document.getElementById("speed").innerHTML);

if (t <= 50 && w >= 3) {
  let wc =
    35.74 +
    0.6215 * t -
    35.75 * Math.pow(w, 0.16) +
    0.4275 * t * Math.pow(w, 0.16);

  wc = document.getElementById("windchill_num").innerHTML =
    Math.round(wc) + "&deg; " + "F";
} else {
  wc = "Not Applicable";

  document.getElementById("windchill_num").innerHTML = wc;
}
