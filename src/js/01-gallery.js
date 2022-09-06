
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryConteiner = document.querySelector('.gallery');
console.log(galleryConteiner);

const makeGalleryElements = galleryItems.map(
    ({ preview, original, description }) => `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img class="gallery__image"src="${preview}" data-source="${original}" alt="${description}" />
      </a>
      </div>`
).join('');
console.log(makeGalleryElements)

galleryConteiner.insertAdjacentHTML("afterbegin", makeGalleryElements);

let gallery = new SimpleLightbox('.gallery a');
gallery.options.captionsData = 'alt';
gallery.options.captionDelay = 250;