var swiper1 = new Swiper('.swiper1', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  coverflowEffect: {
    rotate: -15,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows : true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

  var gdata1 = [
    {'title':'케이틀린', 'desc':'필트오버의 보안관'},
    {'title':'하이머딩거', 'desc':'위대한 발명가'},
    {'title':'제이스', 'desc':'위대한 수호자'},
    {'title':'오리아나', 'desc':'시계태엽 소녀'},
    {'title':'바이', 'desc':'필트오버 집행자'}
  ];
  var text1 = document.querySelector('.text1');
  var output1 ='';

  output1 +='<dl>';
  output1 +='<dt>'+ gdata1[0].title +'</dt>';
  output1 +='<dd>'+ gdata1[0].desc +'</dd>';
  output1 +='</dt>';  
  text1.innerHTML = output1;

  swiper1.on('transitionEnd', function() {
      //console.log(swiper.realIndex);
      var sind1 = swiper1.realIndex;  // 0~9
      
      output1 ='<dl>';
      output1 +='<dt>'+ gdata1[sind1].title +'</dt>';
      output1 +='<dd>'+ gdata1[sind1].desc +'</dd>';
      output1 +='</dt>';  
      text1.innerHTML = output1;
  });

//---------------------------------------------2

var swiper2 = new Swiper('.swiper2', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  coverflowEffect: {
    rotate: -15,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows : true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

  var gdata2 = [
    {'title':'케이틀린2', 'desc':'필트오버의 보안관'},
    {'title':'하이머딩거2', 'desc':'위대한 발명가'},
    {'title':'제이스2', 'desc':'위대한 수호자'},
    {'title':'오리아나2', 'desc':'시계태엽 소녀'},
    {'title':'바이2', 'desc':'필트오버 집행자'}
  ];
  var text2 = document.querySelector('.text2');
  var output2 ='';

  output2 +='<dl>';
  output2 +='<dt>'+ gdata2[0].title +'</dt>';
  output2 +='<dd>'+ gdata2[0].desc +'</dd>';
  output2 +='</dt>';  
  text2.innerHTML = output2;

  swiper2.on('transitionEnd', function() {
      //console.log(swiper.realIndex);
      var sind2 = swiper2.realIndex;  // 0~9
      
      output2 ='<dl>';
      output2 +='<dt>'+ gdata2[sind2].title +'</dt>';
      output2 +='<dd>'+ gdata2[sind2].desc +'</dd>';
      output2 +='</dt>';  
      text2.innerHTML = output2;
  });
  //----------------------------------------------------------3
  var swiper3 = new Swiper('.swiper3', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    coverflowEffect: {
      rotate: -15,
      stretch: 0,
      depth: 300,
      modifier: 1,
      slideShadows : true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
  
    var gdata3 = [
      {'title':'케이틀린3', 'desc':'필트오버의 보안관'},
      {'title':'하이머딩거3', 'desc':'위대한 발명가'},
      {'title':'제이스3', 'desc':'위대한 수호자'},
      {'title':'오리아나3', 'desc':'시계태엽 소녀'},
      {'title':'바이3', 'desc':'필트오버 집행자'}
    ];
    var text3 = document.querySelector('.text3');
    var output3 ='';
  
    output3 +='<dl>';
    output3 +='<dt>'+ gdata3[0].title +'</dt>';
    output3 +='<dd>'+ gdata3[0].desc +'</dd>';
    output3 +='</dt>';  
    text3.innerHTML = output3;
  
    swiper3.on('transitionEnd', function() {
        //console.log(swiper.realIndex);
        var sind3 = swiper3.realIndex;  // 0~9
        
        output3 ='<dl>';
        output3 +='<dt>'+ gdata3[sind3].title +'</dt>';
        output3 +='<dd>'+ gdata3[sind3].desc +'</dd>';
        output3 +='</dt>';  
        text3.innerHTML = output3;
    });
    //----------------------------------------------------4
    var swiper4 = new Swiper('.swiper4', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      loop: true,
      coverflowEffect: {
        rotate: -15,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
    
      var gdata4 = [
        {'title':'케이틀린4', 'desc':'필트오버의 보안관'},
        {'title':'하이머딩거4', 'desc':'위대한 발명가'},
        {'title':'제이스4', 'desc':'위대한 수호자'},
        {'title':'오리아나4', 'desc':'시계태엽 소녀'},
        {'title':'바이4', 'desc':'필트오버 집행자'}
      ];
      var text4 = document.querySelector('.text4');
      var output4 ='';
    
      output4 +='<dl>';
      output4 +='<dt>'+ gdata4[0].title +'</dt>';
      output4 +='<dd>'+ gdata4[0].desc +'</dd>';
      output4 +='</dt>';  
      text4.innerHTML = output4;
    
      swiper4.on('transitionEnd', function() {
          //console.log(swiper.realIndex);
          var sind4 = swiper4.realIndex;  // 0~9
          
          output4 ='<dl>';
          output4 +='<dt>'+ gdata4[sind4].title +'</dt>';
          output4 +='<dd>'+ gdata4[sind4].desc +'</dd>';
          output4 +='</dt>';  
          text4.innerHTML = output4;
      });