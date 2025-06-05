document.addEventListener('DOMContentLoaded', () => {
    const qrForm = document.getElementById('qrForm');
    const qrInput = document.getElementById('qrInput');
    const qrResult = document.getElementById('qrResult');
    const qrCodeDiv = document.getElementById('qrCode');
    const downloadBtn = document.getElementById('downloadBtn');
    const themeToggle = document.getElementById('themeToggle');
  
    const cozyColors = [
      "#E0E0E0", "#D1C4E9", "#B2EBF2", "#F8BBD0",
      "#C8E6C9", "#FFE0B2", "#FFECB3", "#B3E5FC"
    ];
  
    const qrCode = new QRCodeStyling({
      width: 260,
      height: 260,
      type: "canvas",
      data: "",
      image: "",
      dotsOptions: {
        type: "rounded",
        color: cozyColors[0]
      },
      backgroundOptions: {
        color: "#000000"
      },
      imageOptions: {
        crossOrigin: "anonymous",
        margin: 4
      }
    });
  
    qrResult.style.opacity = 0;
    downloadBtn.style.display = 'none';
  
    qrForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = qrInput.value.trim();
      if (!text) return;
  
      const randomColor = cozyColors[Math.floor(Math.random() * cozyColors.length)];
  
      qrCode.update({
        data: text,
        dotsOptions: {
          type: "rounded",
          color: randomColor
        },
        backgroundOptions: {
          color: "#000000"
        }
      });
  
      qrCodeDiv.innerHTML = "";
      qrCode.append(qrCodeDiv);
  
      setTimeout(() => {
        qrResult.style.opacity = 1;
        downloadBtn.style.display = 'flex';
      }, 200);
    });
  
    downloadBtn.addEventListener('click', () => {
      qrCode.download({ name: "scanify-qr", extension: "png" });
    });
  
    // Fade-in effects for elements with .fade-in class
    document.querySelectorAll('.fade-in').forEach((el, i) => {
      el.style.opacity = 0;
      setTimeout(() => {
        el.style.opacity = 1;
      }, 200 + i * 150);
    });
  
    // Mobile menu toggle
    const mobileMenu = document.getElementById('mobile-menu');
    window.toggleMenu = () => {
      mobileMenu.classList.toggle('active');
    };
    window.closeMenu = () => {
      mobileMenu.classList.remove('active');
    };
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          closeMenu();
        }
      });
    });
  });
  
  var audio = document.getElementById("audioPlayer"),
  loader = document.getElementById("preloader");
function settingtoggle() {
  document
    .getElementById("setting-container")
    .classList.toggle("settingactivate"),
    document
      .getElementById("visualmodetogglebuttoncontainer")
      .classList.toggle("visualmodeshow"),
    document
      .getElementById("soundtogglebuttoncontainer")
      .classList.toggle("soundmodeshow");
}
function playpause() {
  !1 == document.getElementById("switchforsound").checked
    ? audio.pause()
    : audio.play();
}
function visualmode() {
  document.body.classList.toggle("light-mode"),
    document.querySelectorAll(".needtobeinvert").forEach(function (e) {
      e.classList.toggle("invertapplied");
    });
}
window.addEventListener("load", function () {
  (loader.style.display = "none"),
    document.querySelector(".hey").classList.add("popup");
});
let emptyArea = document.getElementById("emptyarea"),
  mobileTogglemenu = document.getElementById("mobiletogglemenu");
function hamburgerMenu() {
  document.body.classList.toggle("stopscrolling"),
    document
      .getElementById("mobiletogglemenu")
      .classList.toggle("show-toggle-menu"),
    document
      .getElementById("burger-bar1")
      .classList.toggle("hamburger-animation1"),
    document
      .getElementById("burger-bar2")
      .classList.toggle("hamburger-animation2"),
    document
      .getElementById("burger-bar3")
      .classList.toggle("hamburger-animation3");
}
function hidemenubyli() {
  document.body.classList.toggle("stopscrolling"),
    document
      .getElementById("mobiletogglemenu")
      .classList.remove("show-toggle-menu"),
    document
      .getElementById("burger-bar1")
      .classList.remove("hamburger-animation1"),
    document
      .getElementById("burger-bar2")
      .classList.remove("hamburger-animation2"),
    document
      .getElementById("burger-bar3")
      .classList.remove("hamburger-animation3");
}
const sections = document.querySelectorAll("section"),
  navLi = document.querySelectorAll(".navbar .navbar-tabs .navbar-tabs-ul li"),
  mobilenavLi = document.querySelectorAll(
    ".mobiletogglemenu .mobile-navbar-tabs-ul li"
  );
window.addEventListener("scroll", () => {
  let e = "";
  sections.forEach((t) => {
    let o = t.offsetTop;
    t.clientHeight, pageYOffset >= o - 200 && (e = t.getAttribute("id"));
  }),
    mobilenavLi.forEach((t) => {
      t.classList.remove("activeThismobiletab"),
        t.classList.contains(e) && t.classList.add("activeThismobiletab");
    }),
    navLi.forEach((t) => {
      t.classList.remove("activeThistab"),
        t.classList.contains(e) && t.classList.add("activeThistab");
    });
}),
  console.log(
    "%c Designed and Developed by Jaskaran Singh ",
    "background-image: linear-gradient(90deg,#8000ff,#6bc5f8); color: white;font-weight:900;font-size:1rem; padding:20px;"
  );
let mybutton = document.getElementById("backtotopbutton");
function scrollFunction() {
  document.body.scrollTop > 400 || document.documentElement.scrollTop > 400
    ? (mybutton.style.display = "block")
    : (mybutton.style.display = "none");
}
function scrolltoTopfunction() {
  (document.body.scrollTop = 0), (document.documentElement.scrollTop = 0);
}
(window.onscroll = function () {
  scrollFunction();
}),
  document.addEventListener(
    "contextmenu",
    function (e) {
      "IMG" === e.target.nodeName && e.preventDefault();
    },
    !1
  );
  windowResize = (e) => {
    (mouseXEndPoint = window.innerWidth),
      (mouseYEndPoint = window.innerHeight),
      (mouseXRange = mouseXEndPoint - mouseXStartPoint);
  };
window.addEventListener("mousemove", mouseMove),
  window.addEventListener("resize", windowResize);
