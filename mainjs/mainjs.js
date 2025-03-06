//메인 비주얼 처리 코드


var timeonoff;   //타이머 처리  홍길동 정보
var imageCount=$('.gallery ul li').size();   //이미지 총개수 5
var cnt=1;   //이미지 순서 1 2 3 4 5 1 2 3 4 5....(주인공!!=>현재 이미지 순서)
var onoff=true; // true=>타이머 동작중 , false=>동작하지 않을때

$('.btn1').css('background','#C8102E'); //첫번째 불켜
$('.btn1').css('width','40px'); // 버튼의 너비 증가

$('.gallery .link1').fadeIn('slow'); //첫번째 이미지 보인다..
$('.gallery .link1 .visual_bigtext').css('top',350).css('opacity',0);
$('.gallery .link1 .visual_smalltext').css('top',470).css('opacity',0); 
$('.gallery .link1 .visual_bigtext').delay(1000).animate({top:400, opacity:1},'slow');
$('.gallery .link1 .visual_smalltext').delay(1500).animate({top:550, opacity:1},'slow');

function gallery_change(){
  $('.gallery li').fadeOut('slow'); //모든 이미지 안보인다.
      $('.gallery .link'+cnt).fadeIn('slow');  //자기 자신만 이미지가 보인다

      // for(var i=1;i<=imageCount;i++){
        //   $('.btn'+i).css('background','#00f'); //버튼 모두불꺼
  //   $('.btn'+i).css('width','16');
      // }
  $('.mbutton').css('background','#fff'); //버튼 모두불꺼
  $('.mbutton').css('width','16px');
  $('.btn'+cnt).css('background','#C8102E');//자신 버튼만 불켜 
  $('.btn'+cnt).css('width','40px');
  
  $('.gallery li .visual_bigtext').css('top',350).css('opacity',0);
  $('.gallery li .visual_smalltext').css('top',470).css('opacity',0); 
  $('.gallery .link'+cnt).find('.visual_bigtext').delay(1000).animate({top:400, opacity:1},'slow');
  $('.gallery .link'+cnt).find('.visual_smalltext').delay(1500).animate({top:550, opacity:1},'slow');
}


function moveg(){
  if(cnt==imageCount+1)cnt=1;
  if(cnt==imageCount)cnt=0;  //카운트 초기화

  cnt++;  //카운트 1씩 증가.. 5가되면 다시 초기화 
         //1 2 3 4 5   1 2 3 4 5..
  gallery_change();

   if(cnt==imageCount)cnt=0;  //카운트의 초기화 0
 }
 
timeonoff= setInterval( moveg , 4000);// 타이머를 동작 1~5이미지를 순서대로 자동 처리
  //var 변수 = setInterval( function(){처리코드} , 4000);  //홍길동의 정보를 담아놓는다
  //clearInterval(변수); -> 살인마/사이코패스/살인청부업자


$('.mbutton').click(function(event){  //각각의 버튼 클릭시
    // var $target=$(event.target); //클릭한 버튼 $target == $(this)
   clearInterval(timeonoff); //타이머 중지     
 

      // if($target.is('.btn1')){  //첫번째 버튼 클릭??
        // 	 cnt=1;  //클릭한 해당 카운트를 담아놓는다
      // }else if($target.is('.btn2')){  //두번째 버튼 클릭??
        // 	 cnt=2; 
      // }else if($target.is('.btn3')){ 
        // 	 cnt=3; 
      // }else if($target.is('.btn4')){
        // 	 cnt=4; 
      // }else if($target.is('.btn5')){
        // 	 cnt=5; 
      // } 아래 걸로 심플하게 해결

  cnt = $(this).index('.mbutton') +1; // 0~4 -> 1~5



  gallery_change();

  if(cnt==imageCount)cnt=0;  //카운트 초기화
 
  timeonoff= setInterval( moveg , 4000); //타이머의 부활!!!
 
  if(onoff==false){ //중지상태냐??
        onoff=true; //동작~~
        $('.ps').html('<span class="hidden">stop</span><i class="fa-regular fa-circle-stop"></i>');
  }
  
});

 //stop/play 버튼 클릭시 타이머 동작/중지
$('.ps').click(function(){ 
 if(onoff==true){ // 타이머가 동작 중이냐??
       clearInterval(timeonoff);   //살인마 고용 stop버튼 클릭시
         $(this).html('<span class="hidden">play</span><i class="fa-regular fa-circle-play"></i>'); //js파일에서는 경로의 기준이 html파일이 기준!!
     onoff=false;   
   }else{  // false 타이머가 중지 상태냐??
       timeonoff= setInterval( moveg , 4000); //play버튼 클릭시  부활
       $(this).html('<span class="hidden">stop</span><i class="fa-regular fa-circle-stop"></i>');
       onoff=true; 
   }
});	

//왼쪽/오른쪽 버튼 처리
$('.visual .btn').click(function(){

  clearInterval(timeonoff); //살인마

  if($(this).is('.btnRight')){ // 오른쪽 버튼 클릭
      if(cnt==imageCount)cnt=0;  //카운트가 마지막 번호(5)라면 초기화 0
      //if(cnt==imageCount+1)cnt=1;  
      cnt++; //카운트 1씩증가
  }else if($(this).is('.btnLeft')){  //왼쪽 버튼 클릭
      if(cnt==1)cnt=imageCount+1;   // 1->6  최초..
      if(cnt==0)cnt=imageCount;
      cnt--; //카운트 감소
  }

  
  gallery_change();


  timeonoff= setInterval( moveg , 4000); //부활

if(onoff==false){ //중지
  onoff=true;//동작
  $('.ps').html('<span class="hidden">stop</span><i class="fa-regular fa-circle-stop"></i>');
}
});


//상품 갤러리 처리 코드






//콘텐츠 2

var swiper = new Swiper('.swiper-container',{
  slidesPerView: 'auto',  //단수 (보이는 슬라이드 칸 수 ,'auto'(내가 원하는 단의 너비를 사용하려면 auto 사용하기 )
  spaceBetween: 100,  //단사이 여백
  //initialSlide: 2, 
  loop: true,  //무한 loop (1~10까지 가고 안 끊기고 무한히 돌아감)
  //centeredSlides: true, //첫번째 슬리아드 위치가 센터로 오게 바꾸기(만약 단수가 2개이면 양쪽은 반반씩 보임)
  //effect: 'fade',   //페이드 효과 (단수가 1단이 된다)
  navigation: {    //이전/다음 버튼
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
  },
  pagination: {   //페이지 네이션
  el: '.swiper-pagination',
  dynamicBullets: true, //점 점 점 일직선 말고 변형 시키기
  clickable: true, //점 점 점 누르면 슬라이드 이동하기

  },
  
  // autoplay: {  //자동으로 넘어가기
  // delay: 3000,
  // disableOnInteraction: false //슬라이드 한번 마우스로 눌러서 돌리면 더이상 안 돌아감
  // },


});

swiper.on('transitionEnd', function() {
  //console.log(swiper.realIndex);

  var facility = document.getElementById('facility');
  var sind = swiper.realIndex+2;
  if(sind==7)sind=1;
  facility.style.background='#000 url(./images/blur0'+ sind +'.png)';
  facility.style.backgroundSize='cover';
  });





//컨텐츠 4

  const experienceSection = document.querySelector('#content .experience');
  const listItems = document.querySelectorAll('#content .experience ul li');

  // 각 li 요소에 마우스 이벤트 추가
  listItems.forEach((item, index) => {
      item.addEventListener('mouseenter', () => {
          
       
          // 각각 배경 이미지 변경
          if (index === 0) {
              experienceSection.style.backgroundImage = "url('./images/taxi1.png')";
              item.style.backgroundColor='rgba(147, 194, 217, .8)';
          } else if (index === 1) {
              experienceSection.style.backgroundImage = "url('./images/safari1.png')";
              item.style.backgroundColor='rgba(138,165,62, .8)';
          } else if (index === 2) {
              experienceSection.style.backgroundImage = "url('./images/kart1.png')";
              item.style.backgroundColor='rgba(150,183,164, .8)';
          }
      });

      item.addEventListener('mouseleave', () => {
          // 기본 첫번째 배경 이미지로 돌아오기
          experienceSection.style.backgroundImage = "url('./images/taxi1.png')";
          item.style.backgroundColor='rgba(255, 255, 255, .3)';
      });
  });

