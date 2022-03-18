
export class Card {
  constructor(data, cardTemplate, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardTemplate = cardTemplate;
    this._handleCardClick = handleCardClick;
  }
    createCard() {
    this._templateDate = this._cardTemplate.content.cloneNode(true);
    this._templateDate.querySelector('.element__image').setAttribute('style', `background-image: url(${this._link})`);
    this._templateDate.querySelector('.element__name').textContent = this._name;
    this._imageZoomValue = this._templateDate.querySelector('.element__image');
    this._setEventListeners(this._templateDate);
    return this._templateDate;
  }

  _setEventListeners(element) {
    element.querySelector('.element__delete').addEventListener('click', this._deleteCard);
    element.querySelector('.element__like').addEventListener('click', this._likeCard);
    this._imageZoomValue.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  _deleteCard(event) {
    event.target.closest('.element').remove();
  }

  _likeCard(event) {
    if (event.target.classList.contains('element__like')) {
      event.target.classList.toggle('element__like_active')
    }
  }

};