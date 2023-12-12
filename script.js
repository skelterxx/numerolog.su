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

// buttons.forEach((button) => {
  //   if (button.parentElement.style.opacity === "1" && button.parentElement.getBoundingClientRect().top < window.innerHeight) {
  //     button.style.opacity = 1;
  //   } else {
  //     button.style.opacity = 0;
  //   }
  // });

// var zSpacing = -2000; 
// var	lastPos = zSpacing / 5;
// var	allFrames = document.getElementsByClassName('frame');
// var	frames = Array.from(allFrames);
// var allButtons = document.getElementsByClassName('button'); 
// var buttons = Array.from(allButtons);
// var	zVol = [];

// // preloader
// function hidePreloader() {
// 	var preloader = document.getElementById('preloader');
// 	preloader.style.display = 'none';
//   }

// 	// Сохранение значения scrollTop в sessionStorage при обновлении страницы
// // window.onbeforeunload = function() {
// //   sessionStorage.setItem('scrollTop', window.scrollY);
// // };

// // Восстановление значения scrollTop из sessionStorage после загрузки страницы
// // window.onload = function() {
// //   var scrollTop = sessionStorage.getItem('scrollTop');
// //   if (scrollTop !== null) {
// //     window.scrollTo(0, scrollTop);
// //     sessionStorage.removeItem('scrollTop'); // Очистка сохраненного значения после восстановления
// //   }
// // };

// window.onload = function() {
// 	// var topOnLoad = document.documentElement.scrollTop; 
// 	// if (topOnLoad > 0) {
// 	// 	lastPos = -400;
// 	// };
// 	setTimeout(hidePreloader, 2500);
// 	window.scrollTo(0, 2);
//   };


// // zScroll	
// window.onscroll = function () {
	
// 	var top = document.documentElement.scrollTop;
// 			if (top < 0) {
// 				top = 0;
// 			} else if (top > 4400) {
// 				top = 4400;
// 			}
// 			var delta = lastPos - top;

// 	lastPos = top;
	
// 	frames.forEach(function(n, i) {
// 		zVol.push((i * zSpacing) + zSpacing);
// 		zVol[i] += delta * -5.5;



// 		var frame = frames[i],
// 				transform = `translateZ(${zVol[i]}px)`,
// 				opacity = zVol[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0;
// 				frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`);
				

// 			// buttons.forEach(function(button, j) {
// 			// 		var button = buttons[j];
// 			// 		if (frame.style.translateZ >= '-650px' && frame.style.translateZ <= '150px'){
// 			// 		button.setAttribute('style', `opacity: 0`);
// 					// } else {
// 					// button.setAttribute('style', `opacity: 0`);	
// 					// } 
// 				// });

// 			// buttons.forEach(function(button, i) {
// 			// 		var frame = button.closest('.frame');
// 			// 		if (frame.style.opacity === '1') {
// 			// 			button.style.opacity = '1'
// 			// 		}
// 			// 	});	
// 	});	 

// };

// // // Создаем новый observer (наблюдатель)
// // let observer = new IntersectionObserver(function (entries) {
// // 	entries.forEach(function (entry) {
// // // Выводим в консоль сам элемент
// // 			console.log(entry.target);
// // // Выводим в консоль true (если элемент виден) или false (если нет)
// // 			console.log(entry.isIntersecting);
// // 	});
// // });

// // // Задаем элемент для наблюдения
// // let el = document.querySelector('.button');

// // // Прикрепляем его к «наблюдателю»
// // observer.observe(el);

// // // Создаем новый observer (наблюдатель)
// // let observer = new IntersectionObserver(function (entries, obs) {
// // 	entries.forEach(function (entry) {
// // // Если элемент в зоне видимости, то ничего не происходит
// // 			if (!entry.isIntersecting) return;
// // // Отключаем «наблюдатель»
// // 			obs.unobserve(entry.target);
// // // Добавляем текст
// // 			entry.target.textContent = ` Элемент вошел в зону видимости.`;
// // 	});
// // });

// // // Задаем элемент для наблюдения
// // let el = document.querySelector('.frame');

// // // Прикрепляем его к «наблюдателю»
// // observer.observe(el);