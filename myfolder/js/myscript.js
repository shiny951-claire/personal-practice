(function () {
  'use strict';

  // DOM 준비 완료 시 실행되는 유틸 함수
  function onDomReady(callback) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback);
    } else {
      callback();
    }
  }

  // Swiper 슬라이더를 초기화하고 autoplay 설정을 적용합니다.
  function initializeSwiper() {
    return new Swiper('.swiper1', {
      direction: 'horizontal',
      loop: true,
      centeredSlide: true,
      slidesPerView: 3,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        addIcons: false,
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });
  }

  // 재생/정지 버튼에 클릭 핸들러를 연결하여 토글 동작을 수행합니다.
  function setupPlayToggle(swiperInstance) {
    var playToggleBtn = document.querySelector('.swiper-button-play-toggle');
    if (!playToggleBtn || !swiperInstance || !swiperInstance.autoplay) {
      return;
    }

    playToggleBtn.addEventListener('click', function () {
      if (this.classList.contains('is-play')) {
        swiperInstance.autoplay.stop();
        this.classList.remove('is-play');
        this.classList.add('is-pause');
      } else {
        swiperInstance.autoplay.start();
        this.classList.remove('is-pause');
        this.classList.add('is-play');
      }
    });
  }

  // DOM이 준비된 후 Swiper와 토글 기능을 초기화합니다.
  onDomReady(function () {
    var swiper1 = initializeSwiper();
    setupPlayToggle(swiper1);
  });
})();
