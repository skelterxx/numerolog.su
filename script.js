// Transformed code with scroll reset on page reload and button visibility tracking
const zSpacing = -2000;
let lastPos = zSpacing / 5;
const frames = Array.from(document.getElementsByClassName("frame"));
const buttons = Array.from(document.getElementsByClassName("button")); 
const zVol = [];

// preloader
function hidePreloader() {
  const preloader = document.getElementById("preloader");
  preloader.style.display = "none";
}

window.onload = function () {
  setTimeout(hidePreloader, 2500);
  window.scrollTo(0, 2);
};

const button = document.querySelector('.button');

// Track button visibility on scroll
window.onscroll = function () {
  let top = document.documentElement.scrollTop;
  if (top < 0) {
    top = 0;
  } else if (top > 4400) {
    top = 4400;
  }
  
  const delta = lastPos - top;
  lastPos = top;
  
  frames.forEach((frame, i) => {
    zVol.push(i * zSpacing + zSpacing);
    zVol[i] += delta * -5.5;

    const transform = `translateZ(${zVol[i]}px)`;
    const opacity = zVol[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0;
    frame.setAttribute("style", `transform: ${transform}; opacity: ${opacity}`);
  }); 
};