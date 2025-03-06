// JavaScript Document


    $('.box3 .contlist:eq(0)').show(); // 첫번째 탭 내용만 열어라
   
    $('.location .tab').click(function(e){
          e.preventDefault();   // <a> href="#" 값을 강제로 막는다  
          
          var ind = $(this).index('.location .tab');  // 클릭시 해당 index를 뽑아준다
          //console.log(ind);

          $(".box3 .contlist").hide(); //모든 탭내용을 안보이게...
          $(".box3 .contlist:eq("+ind+")").show(); //클릭한 해당 탭내용만 보여라
          $('.tab').removeClass('on'); //모든 탭메뉴를 비활성화
          $(this).addClass('on'); // 클릭한 해당 탭메뉴만 활성화

     });
   



