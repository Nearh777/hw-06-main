import Player from '@vimeo/player';

const refs = {
  iframe: document.querySelector('iframe'),
};

const player = new Vimeo.Player(refs.iframe);

player.on('play', onPlay);

function onPlay(e) {
  const currentTime = e.seconds;
  console.log(currentTime);
  // localStorage.setItem;
}
