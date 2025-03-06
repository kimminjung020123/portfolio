document.addEventListener('DOMContentLoaded', () => {
  // Zac
  const zacContainer = document.querySelectorAll('.container02')[0];
  const zacAbilities = zacContainer.querySelectorAll('.ability img');
  const zacVideoBox = zacContainer.querySelector('.video_box video');
  const zacVideoSource = zacVideoBox.querySelector('source');

  zacAbilities.forEach((img, index) => {
      img.addEventListener('click', () => {
          const newVideoSrc = `./images/sub2/zac0${index + 1}.mp4`;
          zacVideoSource.setAttribute('src', newVideoSrc);
          zacVideoBox.load();
          zacVideoBox.play();
      });
  });

  // Lee Sin
  const leesinContainer = document.querySelectorAll('.container02')[1];
  const leesinAbilities = leesinContainer.querySelectorAll('.ability img');
  const leesinVideoBox = leesinContainer.querySelector('.video_box video');
  const leesinVideoSource = leesinVideoBox.querySelector('source');

  leesinAbilities.forEach((img, index) => {
      img.addEventListener('click', () => {
          const newVideoSrc = `./images/sub2/leesin0${index + 1}.mp4`;
          leesinVideoSource.setAttribute('src', newVideoSrc);
          leesinVideoBox.load();
          leesinVideoBox.play();
      });
  });

  // Yasuo
  const yasuoContainer = document.querySelectorAll('.container02')[2];
  const yasuoAbilities = yasuoContainer.querySelectorAll('.ability img');
  const yasuoVideoBox = yasuoContainer.querySelector('.video_box video');
  const yasuoVideoSource = yasuoVideoBox.querySelector('source');

  yasuoAbilities.forEach((img, index) => {
      img.addEventListener('click', () => {
          const newVideoSrc = `./images/sub2/yasuo0${index + 1}.mp4`;
          yasuoVideoSource.setAttribute('src', newVideoSrc);
          yasuoVideoBox.load();
          yasuoVideoBox.play();
      });
  });

  // Miss Fortune
  const missContainer = document.querySelectorAll('.container02')[3];
  const missAbilities = missContainer.querySelectorAll('.ability img');
  const missVideoBox = missContainer.querySelector('.video_box video');
  const missVideoSource = missVideoBox.querySelector('source');

  missAbilities.forEach((img, index) => {
      img.addEventListener('click', () => {
          const newVideoSrc = `./images/sub2/miss0${index + 1}.mp4`;
          missVideoSource.setAttribute('src', newVideoSrc);
          missVideoBox.load();
          missVideoBox.play();
      });
  });

  // Blitzcrank
  const blitzContainer = document.querySelectorAll('.container02')[4];
  const blitzAbilities = blitzContainer.querySelectorAll('.ability img');
  const blitzVideoBox = blitzContainer.querySelector('.video_box video');
  const blitzVideoSource = blitzVideoBox.querySelector('source');

  blitzAbilities.forEach((img, index) => {
      img.addEventListener('click', () => {
          const newVideoSrc = `./images/sub2/Blitz0${index + 1}.mp4`;
          blitzVideoSource.setAttribute('src', newVideoSrc);
          blitzVideoBox.load();
          blitzVideoBox.play();
      });
  });
});




//팝업처리코드
var memo = [
    {imgsrc:'big1.jpg' ,title:'갈리오', posi:'위대한 석상', sub1:'데마시아를 수호하기 위해 만들어진 갈리오는 강력한 마법의 힘이 그를 깨울 때까지 수십 년, 때로는 수백 년 동안 한자리에 미동도 없이 서있다.'},
    {imgsrc:'big2.jpg' ,title:'그라가스', posi:'술취한 난동꾼', sub1:'몸집이 크고 소란스러워서 한 번 보면 잊기 힘든 쾌활한 주조가로, 완벽한 술을 만들기 위한 여정을 떠나게 되었다.'},
    {imgsrc:'big3.jpg' ,title:'그웬', posi:'신성한 재봉사', sub1:'마법의 힘으로 살아나 인간이 된 인형 그웬은 한때 자신을 만들었던 도구를 휘두른다. 발걸음을 내디딜 때마다 자신을 만든 창조자의 사랑을 느낀다.'},
    {imgsrc:'big4.jpg' ,title:'나미', posi:'파도 소환사', sub1:'바다에 사는 바스타야 종족으로, 어리지만 완고할 정도로 고집이 세다. 먼 옛날 타곤 인과 맺었던 약속이 깨지자, 처음으로 파도 치는 바다에서 나와 모험을 떠났다.'},
    {imgsrc:'big5.jpg' ,title:'노틸러스', posi:'심해의 타이탄', sub1:'빌지워터에는 처음으로 물에 잠긴 부두만큼이나 오래되었다는 쓸쓸한 전설이 하나 있다. 육중한 갑옷을 걸친 거인이 푸른 불꽃 제도 해안가의 검푸른 물을 배회한다는 이야기이다.'},
    {imgsrc:'big6.jpg' ,title:'녹턴', posi:'영원한 악몽', sub1:'언제부터인가 자의식이 있는 존재라면 반드시 꾸는 악몽이 있었다. 그리고 그 악몽들이 모여 사악한 기운을 끌어들였고, 그 속에서 태곳적 힘을 지닌 순수한 악 그 자체인 녹턴이 생겨났다.'},
    {imgsrc:'big7.jpg' ,title:'누누', posi:'소년과 설인', sub1:'아주 오랜 옛날, 무시무시한 괴물을 물리쳐 영웅이 되고 싶은 소년이 있었다. 하지만 소년이 발견한 것은 마법을 부리는, 단지 친구가 필요했던 외로운 설인이었다.'},
    {imgsrc:'big8.jpg' ,title:'니코', posi:'알쏭달쏭 카멜레온', sub1:'오랜 세월 잊힌 바스타야의 한 부족 출신인 니코는 다른 이의 모습을 빌려 어느 무리에든 뒤섞일 수 있으며, 심지어 상대의 감정을 흡수하여 적과 아군을 한눈에 구분할 수 있다. '},
    {imgsrc:'big9.jpg' ,title:'다리우스', posi:'녹서스의 실력자', sub1:'녹서스 그 자체를 상징하는 인물로 다리우스만큼 어울리는 사람도 없을 것이다. 실전에서 단련된 사령관이자 녹서스 내에서조차도 두려움의 대상이니까.'},
    {imgsrc:'big10.jpg' ,title:'다이애나', posi:'차가운 달의 분노', sub1:'오늘날 거의 사멸된 고대 종교 루나리의 전사이자, 은빛 달의 화신 그 자체다. 타곤 산 꼭대기에 떠오른 천체들의 기운을 온몸으로 받아들였고, 겨울 밤 설원처럼 초승달 검으로 무장했다.'},
    {imgsrc:'big11.jpg' ,title:'라칸', posi:'매혹하는 자', sub1:'활달하고 변덕스러우면서도 거부하기 힘든 매혹을 발산하는 라칸은 악명 높은 바스타야 말썽꾼이자 로틀란 부족 역사상 가장 훌륭한 전장의 춤꾼이다.'},
    {imgsrc:'big12.jpg' ,title:'람머스', posi:'중무장 아르마딜로', sub1:'알 수 없는 신비의 존재 람머스. 누군가에게는 숭배의 대상이고, 또 누군가에게는 경외의 대상인 우상과도 같은 인물. 더러는 우리와 똑같은 인간으로 여겨지는 경우도 있다.'},
    {imgsrc:'big13.jpg' ,title:'럭스', posi:'광명의 소녀', sub1:'럭산나 크라운가드는 데마시아 인으로, 마법 능력을 가진 자를 공포와 의심을 담은 편협한 시선으로 보는 환경에서 태어났다. 고귀한 가문의 딸이지만 빛을 자유자재로 다루는 마법력을 타고났다'},
    {imgsrc:'big14.jpg' ,title:'루시안', posi:'정화의 사도', sub1:'빛의 감시자 루시안은 고대의 마력이 깃든 한 쌍의 총으로 무장하고 언데드를 추격해 몰살하는 죽음의 사냥꾼이다.'},
    {imgsrc:'big15.jpg' ,title:'룰루', posi:'요정 마법사', sub1:'요들 마법사 룰루는 친구인 요정 픽스와 함께 룬테라를 돌아다니며, 꿈결같은 환상과 상상 속에서나 존재할 법한 생명체를 만들어내는 것으로 유명하다. '},
    {imgsrc:'big16.jpg' ,title:'르블랑', posi:'환술사', sub1:'검은 장미단의 다른 구성원들조차도 본모습을 알지 못하는 신비로운 존재다. 사실 녹서스 건국 초기부터 사람들과 사건을 마음대로 홀리고 조작하던, 안색이 창백한 어느 여인이 갖고 있던 수많은 이름 중 하나에 불과하다.'},
    {imgsrc:'big17.jpg' ,title:'모데카이저', posi:'강철의 망령', sub1:'이미 두 번이나 죽었지만 세 번째로 되살아난 모데카이저는 옛 시대의 잔혹한 군주로서 강령술을 사용해 영혼들을 영원한 노예로 만든다. 지금은 그의 정복 활동을 기억하거나, 그의 진정한 힘을 아는 이는 거의 없다. '},
    {imgsrc:'big18.jpg' ,title:'베인', posi:'어둠 사냥꾼', sub1:'가차 없는 괴물 사냥꾼 샤우나 베인은 가족을 몰살한 마녀를 찾아 죽이기로 맹세했다. 손목에 장착된 석궁과 복수심에 불타는 마음으로 무장하였다'},
    {imgsrc:'big19.jpg' ,title:'샤코', posi:'악마 어릿광대', sub1:'외로운 왕자를 위한 장난감으로 만들어졌다. 하지만 이제는 살육과 참사를 즐기는 마법 깃든 인형이다. 흑마법으로 타락하고 사랑하는 이를 잃은 상실감 때문에 오로지 불쌍한 인간들을 고문하는 것에서만 기쁨을 느끼게 되었다. '},
    {imgsrc:'big20.jpg' ,title:'아리', posi:'구미호', sub1:'영혼 세계의 마법과 선천적으로 연결된 아리는 먹잇감의 감정을 조종하고 정수를 집어삼킬 수 있는 여우 모습의 바스타야로, 영혼을 먹어 치울 때마다 그 안에 담긴 지혜와 기억의 편린을 받아들인다.'}

  ];  


$('.champion_icons .icon a').click(function(e){
  e.preventDefault();
  var txt ='';  //dl태그 생성
  var ind = $(this).index('.champion_icons .icon a');   // 0 1 2 3 4 5 ....

  $('.modal_box').fadeIn('slow');

  //$('.pop .popup img').attr('src','./images/big'+(ind+1)+'.jpg');
  $('.popup img').attr('src','./images/sub2/'+memo[ind].imgsrc);

  txt+= '<dl>';
  txt+= '<dt>'+memo[ind].title+'</dt>';
  txt+= '<dd>'+memo[ind].posi+'</dd>';
  txt+= '<dd>'+memo[ind].sub1+'</dd>';
  txt+= '</dl>';
  
  $('.popup .txt').html(txt);

});

$('.close_btn, .modal_box').click(function(e){
  e.preventDefault();
  $('.modal_box').fadeOut('fast');;
});


$('.champion_icons .icon a').mouseenter(function(){
  $('.champion_icons .icon a').find('img').css('filter','grayscale(100%)');
  $(this).find('img').css('filter','grayscale(0) contrast(150%)');
});

$('.champion_icons').mouseleave(function(){
  $('.champion_icons .icon a').find('img').css('filter','grayscale(0)');
});