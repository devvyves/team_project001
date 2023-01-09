const imgBox = document.querySelectorAll(".images > div");
const textBox = document.querySelector(".collection_wraper > p");
const Curtain = document.querySelector(".curtain");



/* ========== 커튼 ========== */
setTimeout(() => {
  Curtain.classList.add("active");
}, 1000);


/* ========== 텍스트 변경 ========== */
imgBox.forEach(function (el, key) {
  el.onmouseover = function () {
    if (key == 0) {
      textBox.innerHTML = "Santal 33";
    } else if (key == 1) {
      textBox.innerHTML = "Bergamote 22";
    } else if (key == 2) {
      textBox.innerHTML = "Rose 31";
    } else if (key == 3) {
      textBox.innerHTML = "Thé noir 29";
    } else if (key == 4) {
      textBox.innerHTML = "Labdanum 18";
    } else if (key == 5) {
      textBox.innerHTML = "Oud 27";
    }
  };

  el.onmouseout = function () {
    if (key == 0) {
      textBox.innerHTML = "";
    } else if (key == 1) {
      textBox.innerHTML = "";
    } else if (key == 2) {
      textBox.innerHTML = "";
    } else if (key == 3) {
      textBox.innerHTML = "";
    } else if (key == 4) {
      textBox.innerHTML = "";
    } else if (key == 5) {
      textBox.innerHTML = "";
    }
  };
});

// imgBox[1].onmouseover = function(){
//   textBox.innerHTML="red";
// }

/* ========== 홈페이지 이동 ========== */
imgBox.forEach(function (el, key) {
  el.addEventListener("click", () => {
    re(false);

    setTimeout(() => {
      if (key == 0) {
        window.location.href =
          "./detail.html";
      } else if (key == 1) {
        window.location.href = "./detail.html";
      } else if (key == 2) {
        window.location.href = "./detail.html";
      } else if (key == 3) {
        window.location.href = "./detail.html";
      } else if (key == 4) {
        window.location.href = "./detail.html";
      } else if (key == 5) {
        window.location.href = "./detail.html";
      }
    }, 4000);
  });
});

/*  ========== 이미지 축소,확대 ========== */
function re(n) {
  imgBox.forEach(function (el, key) {
    setTimeout(function () {
      if (n) {
        el.classList.remove("book");
        setTimeout(() => {
          el.style = `transform:scaleX(1) scaleY(1); transition:0.7s`;
        }, 1500);
      } else {
        // el.classList.add("book");
        el.style = `transform: scaleX(0) scaleY(1)`;


        //1.5초뒤에 커튼 올라감 
        setTimeout(() => {
          Curtain.classList.remove("active");
        }, 1500);
      }
    }, 100 * key);
  });
}

setTimeout(re,1500,true);

