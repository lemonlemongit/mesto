import  { popupZoom, imageLink, descriptionZoom, openPopup, closePopup, closePopupOnEscape, closePopupOverlay} from './utilities.js';

export class Card {
  constructor(data, cardTemplate) {
    this._name = data.name;
    this._link = data.link;
    this._cardTemplate = cardTemplate;
  }
    createCard() {
    this._templateDate = this._cardTemplate.content.cloneNode(true);
    this._templateDate.querySelector('.element__image').setAttribute('style', `background-image: url(${this._link})`);
    this._templateDate.querySelector('.element__name').textContent = this._name;
    this._imageZoomValue = this._templateDate.querySelector('.element__image');
    this._listenElements(this._templateDate);
    this._imageZoomValue.addEventListener('click', this._zoomImage);
    return this._templateDate;
  }

  _listenElements(element) {
    element.querySelector('.element__delete').addEventListener('click', this._deleteCard);
    element.querySelector('.element__like').addEventListener('click', this._likeCard);
    element.addEventListener('submit', this._addedNewCard);
  }

  _deleteCard(event) {
    event.target.closest('.element').remove();
  }

  _likeCard(event) {
    if (event.target.classList.contains('element__like')) {
      event.target.classList.toggle('element__like_active')
    }
  }

  _zoomImage(event) {
    if (event.target.classList.contains('element__image')) {
      this._link = event.target.getAttribute('style').slice(22, -1);
      imageLink.setAttribute('src', `${this._link}`);
      this._imageTitle = event.target.closest('.element').querySelector('.element__name').textContent;
      imageLink.setAttribute('alt', `${this._imageTitle}`);
      descriptionZoom.innerText = this._imageTitle;
      openPopup(popupZoom);//<-- в утилс
    }
  }
};