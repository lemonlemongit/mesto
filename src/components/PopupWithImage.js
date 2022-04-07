import { Popup } from  './Popup.js';

export class PopupWithImage extends Popup {
    constructor (popupSelector) {
      super(popupSelector);
    }
  
    open(name, link) {
      super.open();
      const image = this._popup.querySelector('.zoom__image');
      const description = this._popup.querySelector('.zoom__image-description');
      image.src = link;
      description.textContent = name;
    }
  }