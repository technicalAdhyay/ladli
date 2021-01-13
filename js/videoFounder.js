var allCauseVideoButtons = document.getElementsByClassName('cause__buttonbox');
var videoPopup = document.querySelector('.videopopup');
var videoPopupClose = document.querySelector('.videopopup__close');
videoPopupClose.addEventListener('click',function(){
    videoPopup.classList.remove('select');
    let video = videoPopup.querySelector('.videopopup__video');
    video.pause();
});
Array.from(allCauseVideoButtons).forEach( (button,index) => {
    button.addEventListener('click',function(){
        videoPopup.classList.add('select');
        let video = videoPopup.querySelector('.videopopup__video');
        let path = button.getAttribute('data-video');
        video.src = path;
    });
} );