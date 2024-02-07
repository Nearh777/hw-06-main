import Player from '@vimeo/player';
import Throttle from 'lodash.throttle';

// const refs = {
//   iframe: document.querySelector('iframe'),
// };

// const player = new Vimeo.Player(refs.iframe);

// const onPlay = function (data) {
//   console.log(data);
// };

// player.on('timeupdate', onPlay);

// refs.iframe.addEventListener('click', onClick);

// function onClick(e) {
//   console.log(e);
// }

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEYCURRENTTIME = 'videoplayer-current-time';

let isTimeNow = localStorage.getItem(KEYCURRENTTIME);

function CurrentTime(e) {
  localStorage.setItem(KEYCURRENTTIME, e.seconds);
}

function getCurrentTime(e) {
  if (isTimeNow) {
    player.setCurrentTime(isTimeNow);
    player.off('play', getCurrentTime);
  }
  player.on('timeupdate', Throttle(CurrentTime, 1000));
}

player.on('play', getCurrentTime);
