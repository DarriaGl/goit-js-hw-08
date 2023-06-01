// Add imports above this line
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const galleryEl = document.querySelector('.gallery');
function createGalleryItems(galleryItems) {
  let galleryElements = galleryItems.map(item => {
    let galleryItem = document.createElement('li');
    galleryItem.classList.add('gallery__item');
    let galleryLink = document.createElement('a');
    galleryLink.classList.add('gallery__link');
    galleryLink.href = item.original;
    let galleryImg = document.createElement('img');
    galleryImg.classList.add('gallery__image');
    galleryImg.src = item.preview;
    galleryImg.alt = item.description;
    galleryLink.appendChild(galleryImg);
    galleryItem.appendChild(galleryLink);
    return galleryItem;
  });
  galleryEl.append(...galleryElements);
}
createGalleryItems(galleryItems);
let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
console.log(galleryItems);
