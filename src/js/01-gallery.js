import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryContainerEl = document.querySelector('.gallery');

galleryContainerEl.addEventListener('click', onGalleryClick);

const galleryItemsMarkup = ({ preview, original, description }) => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('gallery__item');

  const linkEl = document.createElement('a');
  linkEl.classList.add('gallery__link');
  linkEl.setAttribute('href', `${original}`);

  const imgEl = document.createElement('img');
  imgEl.classList.add('gallery__image');
  imgEl.setAttribute('src', `${preview}`);
  imgEl.setAttribute('data-source', `${original}`);
  imgEl.setAttribute('alt', `${description}`);

  itemEl.append(imgEl, linkEl);
  console.log(itemEl);

  return itemEl;
};

const elementsImg = galleryItems.map(galleryItemsMarkup);

galleryContainerEl.append(...elementsImg);

// const galleryItemsImgMarkup = ({ preview, original, description }) => {
//   return `
//   <li class="gallery__item">
//   <a class="gallery__link" href="${original}">
//   <img
//   class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//       />
//       </a>
//       </li>`;
// };

// const makeGalleryItemsImg = galleryItems.map(galleryItemsImgMarkup).join('');

// galleryContainerEl.insertAdjacentHTML('beforeend', makeGalleryItemsImg);
// console.log(makeGalleryItemsImg);

const instance = basicLightbox.create(
  `
<img width="1280" height="auto" src="">`,
  {
    onShow: instance => {
      window.addEventListener('keydown', onEscKeyPress);
    },
    onClose: instance => {
      window.removeEventListener('keydown', onEscKeyPress);
    },
  }
);

function onGalleryClick(e) {
  e.preventDefault();

  const datasetSource = e.target.dataset.source;
  if (!datasetSource) return;
  instance.element().querySelector('img').src = datasetSource;
  instance.show();
}

function onEscKeyPress(e) {
  if (e.code !== 'Escape') return;
  instance.close();
}
