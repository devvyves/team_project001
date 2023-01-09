$('body').prepend('<header>');
$('body').append('<footer>');

$('header').load('./inc.html .header_wrapper, .m_header_wrapper', headerFn);
$('footer').load('./inc.html .footer_wrapper');



function headerFn() {

  const url = location.href;
  const headBar = document.querySelector('.header_wrapper');
  const elMenu = document.querySelectorAll('.header_menu li a');
  const logo = document.querySelector('.logo > a > img');

  const moHeadBar = document.querySelector('.m_header_wrapper');
  const moMenuBar = document.querySelector('.m_menu_wrapper');
  const moHeadBtn = document.querySelector('.m_header_wrapper .m_header_cont .btn_wrapper nav button');
  const moLogo = document.querySelector('.m_logo > a > img');






  function headerActive() {

    window.addEventListener('scroll', () => {
      if (window.pageYOffset == 0) {
        headBar.classList.remove('active');
        moHeadBar.classList.remove('m_active');
        moMenuBar.classList.remove('m_menu_active');
      } else {
        headBar.classList.add('active');
        moHeadBar.classList.add('m_active');
      }
      logoImg();
      moLogoImg();
    });
  }
  headerActive();


  function moBtn() {

    moHeadBtn.addEventListener('click', () => {
      moMenuBar.classList.toggle('m_menu_active');

      if (moMenuBar.classList.contains('m_menu_active')) {
        document.querySelector('.m_header_wrapper .m_header_cont .btn_wrapper nav button span:nth-child(1)').style = `top: 50%; transform: rotate(45deg);`;
        document.querySelector('.m_header_wrapper .m_header_cont .btn_wrapper nav button span:nth-child(2)').style = `top: 50%; transform: translateX(100%); opacity: 0;`;
        document.querySelector('.m_header_wrapper .m_header_cont .btn_wrapper nav button span:nth-child(3)').style = `top: 50%; transform: rotate(-45deg);`;
      } else {
        document.querySelector('.m_header_wrapper .m_header_cont .btn_wrapper nav button span:nth-child(1)').style = `top: 0; `;
        document.querySelector('.m_header_wrapper .m_header_cont .btn_wrapper nav button span:nth-child(2)').style = `top: 50%;`;
        document.querySelector('.m_header_wrapper .m_header_cont .btn_wrapper nav button span:nth-child(3)').style = `top: 100%;`;
      }

      if (window.pageYOffset == 0 && moMenuBar.classList.contains('m_menu_active')) {
        moHeadBar.classList.add('m_active');
      }
      else if (window.pageYOffset !== 0) {
        moHeadBar.classList.add('m_active');
      }
      else {
        moHeadBar.classList.remove('m_active');
      }
    });
  }
  moBtn();

  function logoImg() {
    if (!url.match('collection')) {
      if (headBar.classList.contains('active')) {
        logo.src = "./image/logo_black.png";
      }
      else {
        logo.src = "./image/logo_white.png";
      }
    }
  }

  function moLogoImg() {
    if (!url.match('collection')) {
      if (moHeadBar.classList.contains('m_active')) {
        moLogo.src = "./image/logo_black.png";
      } else {
        moLogo.src = "./image/logo_white.png";
      }
    }
  }


  if (url.match('collection')) {
    logo.src = "./image/logo_black.png";
    moLogo.src = "./image/logo_black.png";
    elMenu.forEach((el) => {
      el.style = `color: var(--black);`;
    });
  }

}