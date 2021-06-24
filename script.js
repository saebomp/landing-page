function imgSlider(add) {
  document.querySelector('.starbucks').src = add;
}

function changeCircleColor(color){
  const circle = document.querySelector('.circle');
  circle.style.background = color;
}

var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: 1,
  // spaceBetween: 30,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// var i = 0;
// var txt = 'REFRESHINGLY RADIANT';
// var speed = 50;

// function typeWriter() {
//   if (i < txt.length) {
//     text.innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }
// typeWriter()