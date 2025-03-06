

// champion

function changeCharacter(imageSrc, position, name, koreanName) {
    document.getElementById('character_image').src = imageSrc;
    document.querySelector('.character_info .position').textContent = position;
    document.querySelector('.character_info .character_name').textContent = name;
    document.querySelector('.character_info .character_korean').textContent = koreanName;
  }



  var swiper1 = new Swiper('.swiper1', {
    slidesPerView: 1, // 기본값: 640px 이하에서 1개
    spaceBetween: 10, // 기본 간격
    loop: true, // 무한 루프
    centeredSlides: false, 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        641: { // 641px 이상일 때 적용
            slidesPerView: 2, // 슬라이드가 2개
            spaceBetween: 20, 
            centeredSlides: true, // 첫 슬라이드가 가운데 정렬
        }
    },
});



swiper1.on('transitionEnd', function() {
    console.log(swiper1.realIndex);

    var box1 = document.getElementById('box1');
    var sind = swiper1.realIndex;
    box1.style.background='url(./images/fitem0'+ (sind+1) +'.jpg)';
    box1.style.backgroundSize='cover';
    });

