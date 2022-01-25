'use strict'

function showElementAnimation() {
    const elements = document.getElementsByClassName('fuwa');
  
    const showTiming = window.innerHeight > 200; 
    const scrollY = window.pageYOffset;
    const windowH = window.innerHeight;
  
    for (let i=0;i<elements.length;i++) {
      const clientRect = elements[i].getBoundingClientRect();
      const elemY = scrollY + clientRect.top;
      if(scrollY + windowH - showTiming > elemY) {
        elements[i].classList.add('show');
      } else if(scrollY + windowH < elemY) {
        elements[i].classList.remove('show');
      }
    }
  }
  showElementAnimation();
  window.addEventListener('scroll', showElementAnimation);