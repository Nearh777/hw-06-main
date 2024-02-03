import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainerEl = document.querySelector('.gallery');

{
  /* <li class="gallery__item">
   <a class="gallery__link" href="large-image.jpg">
      <img class="gallery__image" src="small-image.jpg" alt="Image description" />
   </a>
</li> */
}

const galleryItemsImgMarkup = ({ preview, original, description }) => {
  return `
  <li class="gallery__item">
  <a class="gallery__link" href="${original}">
  <img
  class="gallery__image"
      src="${preview}"
      alt="${description}"
      />
      </a>
      </li>`;
};

const makeGalleryItemsImg = galleryItems.map(galleryItemsImgMarkup).join('');

galleryContainerEl.insertAdjacentHTML('beforeend', makeGalleryItemsImg);
console.log(makeGalleryItemsImg);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
