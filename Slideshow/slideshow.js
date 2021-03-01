var i = 0; //Start point
var images = [];
var time = 3000;

// Billede liste
images[0] = "frisoer.jpg";
images[1] = "frisoer1.jpg";
images[2] = "frisoer2.jpg";
images[3] = "frisoer3.jpg";
images[4] = "frisoer4.jpg";

// Billede skift
function changeImg() {
  document.slide.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);
}

window.onload = changeImg;
