
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from "./gallery-items";

const galleryEl = document.querySelector('.gallery')
galleryEl.style.listStyleType = "none";
const makrup = galleryItems.map(({preview, original, description}) => {
  return`<li class="gallery__item">
  <a class="gallery__link" href="${original}">
     <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>`}).join('');
  galleryEl.insertAdjacentHTML('afterbegin',makrup);
  
  
  galleryEl.addEventListener('click', modalOpen)



  function modalOpen(evt) {
    const target = evt.target;
    evt.preventDefault();
    if (target === evt.currentTarget) {
      return;
    }
     const gallery = new SimpleLightbox('.gallery a',{
      captionsData: 'alt', 
      captionDelay: 250,
      close: false,
      enableKeyboard: true,
      captionPosition: 'bottom',
      captionSelector: 'img',
      overlayOpacity: 0.2,
    })
    
  }