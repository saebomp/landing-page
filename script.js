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

// window.addEventListener('scroll', checkBoxes)
//   checkBoxes()
//   function checkBoxes() {
//     const triggerBottom = window.innerHeight / 5 * 4
    
//     text_wrap1.forEach(box => {
//       const boxTop = box.getBoundingClientRect().top
//       console.log(boxTop)
//       if(boxTop < triggerBottom) {
//         box.classList.add('show')
//       } else {
//         box.classList.remove('show')
//       }
//     })
//   }