let videoEL = document.querySelector(".video");
let juice = document.querySelector(".orange-juice");
let btnPlay = document.querySelector(".btn-play");

function togglePlayPause() {
    if(videoEL.paused){
        btnPlay.src = "./icon/pause.svg";
        videoEL.play();
    }else {
        btnPlay.src = "./icon/play-button.svg";      
        videoEL.pause();
    }
}


btnPlay.addEventListener("click", togglePlayPause);
videoEL.addEventListener('timeupdate', function() {
    let timeNow = videoEL.currentTime / videoEL.duration;
    juice.style.width = timeNow *100 + "%";
});

