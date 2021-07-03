
const nav = document.querySelector('.header')
window.addEventListener('scroll', fixNav)
function fixNav() {
  console.log("ddd")
  if(window.scrollY > nav.offsetHeight + 10) {
    nav.classList.add('scrollEvent')
  } else {
    nav.classList.remove('scrollEvent')
  }
}

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
let menuToggle = document.querySelector('.toggle')
let navigation = document.querySelector('.swiper-pagination')
const toggleMenu = () => {
  menuToggle.classList.toggle('active')
  navigation.classList.toggle('mobile-menu')
}

const activeMenus = document.querySelectorAll('.swiper-pagination-bullet')
activeMenus.forEach(activeMenu => {
  activeMenu.addEventListener('click', ()=> {
    menuToggle.classList.remove('active')
    navigation.classList.remove('mobile-menu')
  })
})
