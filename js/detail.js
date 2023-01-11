/* ========== 커튼 ========== */
setTimeout(() => {
  Curtain.classList.add("active");
}, 1000);


//////////////////   페이지 json  ///////////////////
const paramStr = location.href.split('?')[1]; // 버튼 url
const searchParams = new URLSearchParams(paramStr);
const query = searchParams.get('query');    



function kkk (){
  
fetch('./js/detail.json')
.then(res=>res.json())
  .then(data=>{
    console.log(data[query].info[0].visual)
    // console.log(data[query]);
    // console.log(data[query].info[0]);
    // console.log(data[query].info[0].url);
    // console.log(data[query].info[0].text);
    // console.log(data[query].slide[0]);
    const Item01 = document.querySelector('.detail_main_visuals');
    const Item02 = document.querySelector('.detail_image_wrapper  ');
    const Item03 = document.querySelector('.detail_text_wrapper ');

      Item01.innerHTML =
      `<div  style="background-image:linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.1)) ,url(${data[query].info[0].visual});" class="detail_main_visual">
          <span class="visual_title">${data[query].info[0].span}</span>
        </div>`



      Item02.innerHTML =`
       
        <div class="detail_cont">
          <img src="${data[query].info[0].url}" alt="">
        </div>
        <div class="detail_area active">
          <div class="detail_spot">
            <h2>${data[query].info[0].title}</h2>
            <p>
              ${data[query].info[0].text}
            </p>
          </div>
        </div>`;
      
      Item03.innerHTML =`
        <div class="detail_area">
          <div class="detail_spot">
            <h2>${data[query].info[1].title}</h2>
            <p>
              ${data[query].info[1].text}
            </p>
          </div>
        </div>
        <div class="detail_img_area">
          <img src="${data[query].info[1].url}" alt="">
        </div>`;
        
    
  })
}
window.addEventListener('load',kkk);

 
function init(){

 ////////////////////  슬라이드  //////////////////

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
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints:{
        480:{
          slidesPerView:1,
          spaceBetween:0,
        },
        767:{
          slidesPerView:2,
          spaceBetween:10,
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
    
          // console.log(
          // e.activeIndex,
          // e.realIndex
          // )
        }
      }
    });
}
window.addEventListener('load',init);


// /* ========== 홈페이지 이동 ========== */
// const imgBox = document.querySelectorAll(".swiper-slide > a img");

// imgBox.forEach(function (el, key) {
//   el.addEventListener("click", () => {
//     re(false);

//     setTimeout(() => {
//       if (key == 0) {
//         window.location.href =
//           "./detail.html?query=page01";
//       } else if (key == 1) {
//         window.location.href = "./detail.html?query=page01";
//       } else if (key == 2) {
//         window.location.href = "./detail.html?query=page02";
//       } else if (key == 3) {
//         window.location.href = "./detail.html?query=page03";
//       } else if (key == 4) {
//         window.location.href = "./detail.html?query=page04";
//       } else if (key == 5) {
//         window.location.href = "./detail.html?query=page05";
//       }
//     }, 4000);
//   });
// });





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

// elSec.forEach(function (elSection, key) {
//   elAside.innerHTML += "<button></button>";
//   elSection.addEventListener("mousewheel", function () {
//     animation(key);
//   });
// });

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

