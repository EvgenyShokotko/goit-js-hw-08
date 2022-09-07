import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay,1000));
setVideoTime();
function onPlay(event) {
    localStorage.setItem(STORAGE_KEY, event.seconds);
}


function setVideoTime() {
    const videoPlayerCurrentTime = localStorage.getItem(STORAGE_KEY);

    if (videoPlayerCurrentTime) {
        player.setCurrentTime(videoPlayerCurrentTime).then(function (seconds) {
            }).catch(function(error) {
                switch (error.name) {
                    case 'RangeError':
                        break;
                default:
                    break;
                }
            })
    }
}