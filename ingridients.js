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
          "./detail.html?query=page01";
      } else if (key == 1) {
        window.location.href = "./detail.html?query=page02";
      } else if (key == 2) {
        window.location.href = "./detail.html?query=page03";
      } else if (key == 3) {
        window.location.href = "./detail.html?query=page04";
      } else if (key == 4) {
        window.location.href = "./detail.html?query=page05";
      } else if (key == 5) {
        window.location.href = "./detail.html?query=page06";
      }
    }, 4000);
  });
});