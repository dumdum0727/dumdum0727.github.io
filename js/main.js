'use strict';

{
  // ふわっと表示
  function callback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }

  const options = {
    threshold: 0.2,
  };

  const observer = new IntersectionObserver(callback, options);

  const targets = document.querySelectorAll('.animate');

  targets.forEach(target => {
    observer.observe(target);
  });

  // 志田の画像切り替え
  function change(){
    setTimeout(() => {
      imgages[currentIndex].classList.remove('appear');
      currentIndex++;
      if(currentIndex > imgages.length - 1){
        currentIndex = 0;
      }
      imgages[currentIndex].classList.add('appear');
      change();
    }, 1000);
  }

  const imgages = document.querySelectorAll('.shida');
  let currentIndex = 0;

  change();
}