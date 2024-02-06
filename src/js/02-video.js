import Player from '@vimeo/player';
import Throttle from 'lodash.throttle';

const refs = {
  iframe: document.querySelector('iframe'),
};

const player = new Vimeo.Player(refs.iframe);

const onPlay = function (data) {
  console.log(data);
};

player.on('timeupdate', onPlay);
