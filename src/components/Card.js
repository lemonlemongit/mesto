
export class Card {
  constructor(data, cardTemplateSelector, handleCardClick, handleDeleteClick, handleLikeClick) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data.id; 
    this._userId = data.userId;  //user id при поулучении getProfile
    this._ownerId = data.ownerId; // тот кто создает карточку .// data.userId и data.ownerId должны совпадать 
   
    this._cardTemplate = document.querySelector(cardTemplateSelector)
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;

  }
    createCard() {
    this._templateDate = this._cardTemplate.content.cloneNode(true);
    this._templateDate.querySelector('.element__image').setAttribute('style', `background-image: url(${this._link})`);
    this._templateDate.querySelector('.element__name').textContent = this._name;
    this._imageZoomValue = this._templateDate.querySelector('.element__image');
    this._likeButton = this._templateDate.querySelector('.element__like'); 
    this._likeCount = this._templateDate.querySelector('.element__like-count');
    this._element = this._templateDate.querySelector('.element');
    this._deleteCard = this._templateDate.querySelector('.element__delete');
    this._setEventListeners(this._templateDate);
    this.countLikes(this._likes)

    if (this._ownerId !== this._userId) {
      this._deleteCard.style.display = 'none';
    }
    

    return this._templateDate;
  }

  _setEventListeners(element) {
    element.querySelector('.element__delete').addEventListener('click', () => this._handleDeleteClick(this._id));
    //element.querySelector('.element__like').addEventListener('click', () => this._handleLikeClick(this._id));
    this._likeButton.addEventListener('click', () =>  this._handleLikeClick(this._id)); 

    this._imageZoomValue.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  deleteCard() {
   // event.target.closest('.element').remove();
   this._element.remove();
  }

  isLiked() { //определеяем cтавить или удалять лайк
    const userHasLikedCard = this._likes.find(user => user._id === this._userId)
     return userHasLikedCard;
  }



  countLikes(newLikes) {  //setLikes
    this._likes = newLikes;
    this._likeCount.textContent = this._likes.length;

    if(this.isLiked()) {
        this._fillLike()
    } else {
      this._unfillLike()
    }
  }

  _fillLike() {
    this._likeButton.classList.add('element__like_active'); 
  }
  _unfillLike() { //изобретаем новое слово
    this._likeButton.classList.remove('element__like_active'); 
  }
};
