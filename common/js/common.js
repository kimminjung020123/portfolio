//전체 페이지 공통 js


//스크롤 애니메이션 aos





//글로벌 네비게이션(gnb)


$(document).ready(function() {
  
    var smh=$('.visual').height();  //비주얼 이미지의 높이를 리턴한다 900px
    var on_off=false;  //false(안오버)  true(오버)
    var up_down = 'up';  //'up','down'

    
        $('#headerArea').mouseenter(function(){
          // var scroll = $(window).scrollTop();
            $(this).css('background','#242424');
            $('.dropdownmenu li a').css('color','#fff'); 
            $('#headerArea h1 a').css('color','#fff'); 
            on_off=true;
        });
     
        $('#headerArea').mouseleave(function(){
            var scroll = $(window).scrollTop();  //스크롤의 거리
              
              if(scroll<smh-200 ){
                  $(this).css('background','none');
              }else{
                  $(this).css('background','#242424');
              }
            on_off=false;    
        });
     
        $(window).on('scroll',function(){//스크롤의 거리가 발생하면
            var scroll = $(window).scrollTop();  
            //스크롤의 거리를 리턴하는 함수
            //console.log(scroll);
  
              if(scroll>smh-200){//스크롤이 비주얼의 높이-header높이 까지 내리면
                  $('#headerArea').css('background','#242424');
                  $('#headerArea .header_top').addClass('ch');
                  $('#gnb .dropdownmenu').addClass('ch');
                  $('#headerArea').css('height','120px');
                  up_down = 'down';
              }else{//스크롤 내리기 전 디폴트(마우스올리지않음)
                  if(on_off==false){
                      $('#headerArea').css('background','none');
                      $('.dropdownmenu li a').css('color','#fff');
                      $('#headerArea h1 a').css('color','#fff');
                      $('#headerArea .header_top').removeClass('ch');
                      $('#gnb .dropdownmenu').removeClass('ch');
                      $('#headerArea').css('height','199px');
                  }
                  up_down = 'up';
              }; 
              
        });
  
    
      //2depth 열기/닫기
      $('.dropdownmenu').hover(function() { 
            $('ul.dropdownmenu li.menu ul').fadeIn('slow',function(){$(this).stop();}); //모든 서브를 다 열어라
            if(up_down == 'up'){
              $('#headerArea').animate({height:370},'normal').clearQueue();
            }else{
              $('#headerArea').animate({height:300},'normal').clearQueue();
            }
          },function() {
            $('ul.dropdownmenu li.menu ul').hide(); //모든 서브를 다 닫아라
            if(up_down == 'up'){
              $('#headerArea').animate({height:180},'normal').clearQueue();
            }else{
              $('#headerArea').animate({height:95},'normal').clearQueue();
            }
            
      });
      
       //1depth 효과
      $('ul.dropdownmenu .menu').hover(function() { 
        
            $('.depth1',this).css('color','#C8102E');
          },function() {
            $('.depth1',this).css('color','#fff');
      });
  
    
  
       //2depth 효과
      $('.dropdownmenu .menu ul li').hover(function() { 
        
            $('a',this).css('color','#C8102E').css('font-weight',500);
        },function() {
          $('a',this).css('color','#fff');
      });
  

  
    //tab 처리
    $('ul.dropdownmenu li.menu .depth1').on('focus', function () {        
        $('ul.dropdownmenu li.menu ul').slideDown('normal');
        $('#headerArea').animate({height:200},'fast').clearQueue();
     });

    $('ul.dropdownmenu li.m6 li:last').find('a').on('blur', function () {        
        $('ul.dropdownmenu li.menu ul').slideUp('fast');
        $('#headerArea').animate({height:200},'normal').clearQueue();
    });
});




//페밀리 사이트 이동

//top으로 이동 

$(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
  var scroll = $(window).scrollTop(); //스크롤의 거리
 
 
  $('.text').text(scroll);

  if(scroll>500){ //300이상의 거리가 발생되면
      $('.top_move').fadeIn('slow');  //top보여라~~~~
  }else{
      $('.top_move').fadeOut('fast');//top안보여라~~~~
  }
});

$('.top_move').click(function(e){
 e.preventDefault();
  //상단으로 스르륵 이동합니다.
 $("html,body").stop().animate({"scrollTop":0},1000); 
});

//슬라이드 메뉴 클릭시 해당 콘텐츠로 스스륵~~~ 이동
$('.slideMenu a').click(function(e){
 e.preventDefault(); //href="#" 속성을 막아주는..메소드

  var value=0; //이동할 스크롤의 거리

  if($(this).hasClass('link1')){   //첫번째 메뉴를 클릭했냐?   if($(this).is('#link1')){
     value= $('#content .con1').offset().top;  // 해당 콘테츠의 상단의 거리~~
  }else if($(this).hasClass('link2')){
     value= $('#content .con2').offset().top; 
  }else if($(this).hasClass('link3')){
     value= $('#content .con3').offset().top; 
  }else if($(this).hasClass('link4')){
     value= $('#content .con4').offset().top; 
  }
  
$("html,body").stop().animate({"scrollTop":value},1000);
});


//푸터 영역

$('.family .arrow').toggle(function(){
  $('.family .aList').fadeIn('slow');	
  $(this).children('span').html('<i class="fa-solid fa-chevron-up"></i>');	
},function(){
      $('.family .aList').fadeOut('fast');	
  $(this).children('span').html('<i class="fa-solid fa-chevron-down"></i>');	
});

//tab키 처리
  $('.family .arrow').on('focus', function () {        
            $('.family .aList').fadeIn('slow');	
     });
     $('.family .aList li:last a').on('blur', function () {        
            $('.family .aList').fadeOut('fast');
     });

