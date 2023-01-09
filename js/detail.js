// const Curtain = document.querySelector(".curtain");

/* ========== 커튼 ========== */
setTimeout(() => {
  Curtain.classList.add("active");
}, 1000);



function init(){
    var swiper = new Swiper(".mySwiper", {
      loop: true,
      pagination: {
        el: ".swiper-pagination"
        
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints:{
        480:{
          slidesPerView:1,
          spaceBetween:0,
        },
        767:{
          slidesPerView:2,
          spaceBetween:0,
        },
        1023:{
          slidesPerView:2,
          spaceBetween:0,
        },
        1400:{
          slidesPerView:3,
          spaceBetween:0,
        }
      },
      on:{
        slideChange:function(e){
    
          const elActive =document.querySelector('.swpier-slide-active');
          if(elActive)
            elActive.style ='color:red;';
    
          console.log(
            e.activeIndex,
            e.realIndex
          )
        }
      }
    });
    }
    window.onload = init;

////////////  소개 이벤트 /////////////////
const elFigure = document.querySelectorAll("div");

window.addEventListener("scroll", function () {
  elFigure.forEach(function (figu,key) {
    if (
      elFigure[key].offsetTop - this.window.innerHeight * 0.8 < window.pageYOffset
    ) {
      elFigure[key].classList.add("active");
    }
  });
});

const Curtain = document.querySelector(".curtain");





//////////////   스크롤    /////////////////////


const elMain = document.querySelector("main"),
  elAside = document.querySelector("aside"),
  elSec = document.querySelectorAll("section");

let move = 0;

elSec.forEach(function (elSection, key) {
  elAside.innerHTML += "<button></button>";
  elSection.addEventListener("mousewheel", function () {
    animation(key);
  });
});

const elBtns = document.querySelectorAll("aside button");
let idx = 0;
elBtns.forEach(function (btn, key) {
  btn.addEventListener("click", function () {
    animation(key);
  });
});

function update(key) {
  elBtns[idx].classList.remove("active");
  elBtns[key].classList.add("active");
  idx = key;
}

function animation(key) {
  try {
    if (event.wheelDelta < 0) {
      //마우스휠
      move = elSec[key].nextElementSibling.offsetTop;
      key++;
    } else if (event.wheelDelta > 0) {
      //마우스휠 
      move = elSec[key].previousElementSibling.offsetTop;
      key--;
    // } else {
    //   //클릭
    //   move = elSec[key].offsetTop;
   }
  } catch {}

  elMain.style = `transform:translateY(-${move}px)`;

  update(key);
} 

