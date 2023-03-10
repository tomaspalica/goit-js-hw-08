import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const onPlay = player.getCurrentTime().then(function (seconds) {
  console.log(seconds);
  localStorage.setItem(LOCALSTORAGE_KEY, seconds);
});
// const onPlay =function (data) {
//   const seconds = data.seconds;
//   localStorage.setItem('LOCALSTORAGE__KEY', JSON.stringify(seconds));
// };

player.on('timeupdate', throttle(onPlay, 1000));

const currentTime = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
player.setCurrentTime(currentTime);
