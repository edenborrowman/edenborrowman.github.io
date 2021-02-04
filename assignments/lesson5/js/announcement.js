window.onload = function toggleAnnouncement() {
  let d = new Date();
  let q = d.getDay();
  //   console.log(document.getElementById("pancakes").classList);

  if ((q = !5)) {
    document.getElementById("pancakes").classList.toggle("hide");
  }
};
