/******************************************************/
/************************swiper***********************/
/*****************************************************/
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

/******************************************************/
/**********************navigation*********************/
/*****************************************************/
const toggleMenu = () => {
  const menuToggle = document.querySelector('.toggle')
  const navigation = document.querySelector('.swiper-pagination')
  menuToggle.classList.toggle('active')
  navigation.classList.toggle('mobile-menu')
}