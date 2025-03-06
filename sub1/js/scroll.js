$(document).ready(function () {
        
    $('.subNav li:eq(0)').find('a').addClass('spy');

    
    $('#content .history>li:eq(0)').addClass('boxMove');
   
    var smh= $('#content .tab_menu').offset().top-120;
    var h1=1298;
    var h2=2926;
    var h3=4478;
    var h4=5696;
    // var h4= $('#content .history_2010').offset().top-100 ;

   
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
      
       console.log(scroll);
        //$('.text').text(Math.floor(scroll));

        //sticky menu
        if(scroll>smh){ 
            $('.subNav').addClass('navOn');
    
            $('header').hide();
        }else{
            $('.subNav').removeClass('navOn');
          
            $('header').show();
        }
        
        
        $('.subNav li').find('a').removeClass('spy');

        if(scroll>=h1 && scroll<h2){
            $('.subNav li:eq(0)').find('a').addClass('spy');
        }else if(scroll>=h2 && scroll<h3){
            $('.subNav li:eq(1)').find('a').addClass('spy');
        }else if(scroll>=h3 && scroll<h4){
            $('.subNav li:eq(2)').find('a').addClass('spy');
        }else if(scroll>=h4){
            $('.subNav li:eq(3)').find('a').addClass('spy');
        }

    });


    $('.tab_menu a').click(function(e){
    e.preventDefault(); 

        var value=0; 

        if($(this).hasClass('link1')){  
            value=h1;  
        }else if($(this).hasClass('link2')){
             value=h2; 
        }else if($(this).hasClass('link3')){
            value=h3; 
        }else if($(this).hasClass('link4')){
            value=h4; 
        }
        
    $("html,body").stop().animate({"scrollTop":value},1000);
    });

});