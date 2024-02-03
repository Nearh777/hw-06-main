import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryContainerEl = document.querySelector('.gallery');
// const itemsMarkup = galleryItemsMarkup(galleryItems);
// galleryContainerEl.addEventListener('click', onGalleryClick);

// function onGalleryClick(e) {
//   e.preventDefault();

//   if (e.target.nodeName !== 'IMG');

//   const instance = basicLightbox.create(`
//   <img src="${e.target.dataset.source}" width="800" height="600">`);

//   instance.show();
// }

// function galleryItemsMarkup(items) {
//   return items
//     .map(({ preview, original, description }) => {
//       return `<div class="gallery__item">
//     <a class="gallery__link" href="${original}>
//     <img
//     class="gallery__image"
//     src="${preview}"
//     data-source="${original}"
//     alt="${description}"
//     />
//     </a>
//     </div>`;
//     })
//     .join('');
// }

// galleryEl.insertAdjacentHTML('beforeend', itemsMarkup);

galleryContainerEl.addEventListener('click', onGalleryClick);

const galleryItemsMarkup = ({ preview, original, description }) => {
  const itemImgEl = document.createElement('li');
  itemImgEl.classList.add('gallery__item');

  const linkEl = document.createElement('a');
  linkEl.classList.add('gallery__link');
  linkEl.setAttribute('href', `${original}`);

  const imgEl = document.createElement('img');
  imgEl.classList.add('gallery__image');
  imgEl.setAttribute('src', `${preview}`);
  imgEl.setAttribute('data-source', `${original}`);
  imgEl.setAttribute('alt', `${description}`);

  itemImgEl.append(linkEl, imgEl);

  return itemImgEl;
};

const elementsImg = galleryItems.map(galleryItemsMarkup);

galleryContainerEl.append(...elementsImg);

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

  if (e.target.nodeName !== 'IMG') return;

  const isItemImage = e.target.classList.contains('gallery__image');
  if (!isItemImage) return;

  const currentImgUrl = e.target.dataset.source;

  const instance = basicLightbox.create(
    `
		<img src="${currentImgUrl}" width="1280" height="auto"/>
        `,
    {
      onShow: instance => {
        window.addEventListener('keydown', onEscKeyPress);
      },
      onClose: instance => {
        window.removeEventListener('keydown', onEscKeyPress);
      },
    }
  );
  instance.show();

  function onEscKeyPress(e) {
    if (e.code !== 'Escape') return;
    instance.close();
  }
}
