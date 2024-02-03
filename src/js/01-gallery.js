import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryRef = document.querySelector('.gallery');

galleryRef.addEventListener('click', onGalleryClick);

function onGalleryClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG');

  const instance = basicLightbox.create(`
  <img src="${e.target.dataset.source}" width="800" height="600">`);

  instance.show();
}

const galleryItemsMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}>
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
    </a>
    </div>`;
  })
  .join('');

galleryRef.insertAdjacentHTML('beforeend', galleryItemsMarkup);
