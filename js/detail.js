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
        768:{
          slidesPerView:2,
          spaceBetween:0,
        },
        1024:{
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