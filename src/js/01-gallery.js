// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryList = document.querySelector('.gallery');

function createGalleryItem({ preview, original, description }) {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery__item');

  const galleryLink = document.createElement('a');
  galleryLink.classList.add('gallery__link');
  galleryLink.href = original;

  const galleryImage = document.createElement('img');
  galleryImage.classList.add('gallery__image');
  galleryImage.src = preview;
  galleryImage.dataset.source = original;
  galleryImage.alt = description;

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);

  return galleryItem;
}

const galleryElements = galleryItems.map(createGalleryItem);
galleryList.append(...galleryElements);

galleryList.addEventListener('click', handleGalleryClick);

function handleGalleryClick(event) {
  event.preventDefault();

  const target = event.target;
  if (target.nodeName !== 'IMG') return;

  const source = target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${source}" width="800" height="600">
  `);

  instance.show();
}
console.log(galleryItems);
