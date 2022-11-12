const video = document.getElementById('video');
const play = document.getElementById('play');
const pause = document.getElementById('pause');


pause.addEventListener('click', () => {video.pause()});
play.addEventListener('click', () => {video.play()});



