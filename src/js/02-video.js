import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');
const VP_KEY = 'videoplayer-current-time';
const saveCurrentTime = throttle((currentTime) => {
  localStorage.setItem(VP_KEY, currentTime);
}, 1000);

player.on('timeupdate', (data) => {
  const currentTime = data.seconds;
  saveCurrentTime(currentTime);
});
const savedTime = localStorage.getItem(VP_KEY);

if (savedTime !== null) player.setCurrentTime(parseFloat(savedTime));
