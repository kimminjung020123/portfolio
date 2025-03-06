document.addEventListener('DOMContentLoaded', function() {
    function playAudio(event, audioId) {
        event.preventDefault(); // 기본 동작 막기

        var audios = document.getElementsByTagName('audio');
        for (var i = 0; i < audios.length; i++) {
            audios[i].pause();
            audios[i].currentTime = 0;
            var img = audios[i].parentNode.parentNode.querySelector('img');
            if (img) img.classList.remove('current');

            var imgBox = audios[i].parentNode.parentNode.querySelector('.img_box');
            if (imgBox) imgBox.classList.remove('active');
        }

        var audio = document.getElementById(audioId);
        if (audio) audio.play();

        var img = event.target.closest('li').querySelector('img');
        if (img) img.classList.add('current');

        var imgBox = event.target.closest('li').querySelector('.img_box');
        if (imgBox) {
            imgBox.classList.add('active'); // active 클래스 추가
        }
    }

    function stopAudio(event, audioId) {
        event.preventDefault();

        var audio = document.getElementById(audioId);
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }

        var img = event.target.closest('li').querySelector('img');
        if (img) img.classList.remove('current');

        var imgBox = event.target.closest('li').querySelector('.img_box');
        if (imgBox) imgBox.classList.remove('active'); // active 클래스 제거
    }

    window.playAudio = playAudio;
    window.stopAudio = stopAudio;
});






