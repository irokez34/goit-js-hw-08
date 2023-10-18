import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

const saveCurrentTime = throttle((currentTime) => {
  localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000);

player.on('timeupdate', (data) => {
  const currentTime = data.seconds;
  saveCurrentTime(currentTime);
});
const savedTime = localStorage.getItem('videoplayer-current-time');

if (savedTime !== null) player.setCurrentTime(parseFloat(savedTime));
