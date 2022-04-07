
export class Card {
  constructor(data, cardTemplateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    //this._cardTemplate = cardTemplate;
    this._cardTemplate = document.querySelector(cardTemplateSelector)
    this._handleCardClick = handleCardClick;
  }
    createCard() {
    this._templateDate = this._cardTemplate.content.cloneNode(true);
    this._templateDate.querySelector('.element__image').setAttribute('style', `background-image: url(${this._link})`);
    this._templateDate.querySelector('.element__name').textContent = this._name;
    this._imageZoomValue = this._templateDate.querySelector('.element__image');
    this._likeButton = this._templateDate.querySelector('.element__like'); 
    this._setEventListeners(this._templateDate);
    return this._templateDate;
  }

  _setEventListeners(element) {
    element.querySelector('.element__delete').addEventListener('click', this._deleteCard);
    this._likeButton.addEventListener('click', (evt) => { 
      this._likeCard(evt); 
     }); 

    this._imageZoomValue.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  _deleteCard(event) {
    event.target.closest('.element').remove();
  }

  _likeCard() {
    this._likeButton.classList.toggle('element__like_active'); 
  }
};