var i = 0; //Start point
var images = [];
var time = 3000;

// Billede liste
images[0] = "img/frisoer.jpg";
images[1] = "img/frisoer1.jpg";
images[2] = "img/frisoer2.jpg";
images[3] = "img/frisoer3.jpg";
images[4] = "img/frisoer4.jpg";

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
