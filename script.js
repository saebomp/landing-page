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