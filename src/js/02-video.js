import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const player = new Player('vimeo-player');
const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
  player.setCurrentTime(savedTime);
}
const updateCurrentTime = throttle(() => {
  player.getCurrentTime().then(currentTime => {
    localStorage.setItem('videoplayer-current-time', currentTime);
  });
}, 1000);

player.on('timeupdate', updateCurrentTime);
