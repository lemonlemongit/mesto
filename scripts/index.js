const initialCards = [
  {
    name: 'Домбай',
    link: 'https://images.unsplash.com/photo-1637579176819-36455abf2e97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
  },
  {
    name: 'Сундал',
    link: 'https://images.unsplash.com/photo-1643721859448-4d241d04448b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Нью-Йорк',
    link: 'https://images.unsplash.com/photo-1522092372459-dff01028d904?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Торонто',
    link: 'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=690&q=80'
  },
  {
    name: 'Мурманск',
    link: 'https://images.unsplash.com/photo-1601291490701-2bdf663581ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
  },
  {
    name: 'Байкал',
    link: 'https://images.unsplash.com/photo-1552588353-5682e06233fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80'
  }
]; 

const popupEdit = document.querySelector('.edit-block');
const popupAdded = document.querySelector('.added-block');
const editButton = document.querySelector('.profile__edit-button');
const addedButton = document.querySelector('.profile__button-add'); 
const popupEditClose = document.querySelector('.popup__close-button_edit-block'); 
const popupAddedClose = document.querySelector('.popup__close-button_added-block'); 
const confirmForm =  document.querySelector('.popup__form');
const nameValue = confirmForm.querySelector('.popup__input_type_name');
const professionValue = confirmForm.querySelector('.popup__input_type_profession');
const nameProfile = document.querySelector('.profile__name');
const professionProfile = document.querySelector('.profile__profession');
const elementSection = document.querySelector('.elements');
const template = document.getElementById('template-element');
const form = document.querySelector('.popup__form_added');
const popupZoom = document.querySelector('.zoom');
const popupZoomClose = document.querySelector('.zoom__close-button');
const descriptionZoom = document.querySelector('.zoom__image-description');
const imageLink = document.querySelector(".zoom__image");
 

//function Открытие попапа редактирования----1
function openedPopupEdit() {
  nameValue.value = nameProfile.innerText;
  professionValue.value = professionProfile.innerText;
  openPopup(popupEdit);
}

//function Открытие попапа Добавления--------2
function openedPopupAdded() {
  openPopup(popupAdded);
}

//function Редактирование формы--------------3
function editedPopup(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameValue.value;
  professionProfile.textContent = professionValue.value;
  closePopup(evt);
}

// function рендер---------------------------4
function render() {
  initialCards.forEach(function(object) {
  elementSection.append(createCard(object));
 })
}

// function Создание карточки-----------------5
function createCard(object) {
  const templateDate = template.content.cloneNode(true);
  templateDate.querySelector('.element__image').setAttribute('style', `background-image: url(${object.link})`);
  templateDate.querySelector('.element__name').textContent = object.name;
  const imageZoomValue = templateDate.querySelector('.element__image');
  listenElements(templateDate);
  imageZoomValue.addEventListener('click', zoomImage);
  return templateDate;
}

//function Лайк-----------------------------6
function likeCard(event) {
  if (event.target.classList.contains('element__like')) {
    event.target.classList.toggle('element__like_active')
  }
}

//function Открыть любой попап--------------7
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupOnEscape);
  popup.addEventListener("click", closePopupOverlay);
}

//function Закрыть любой попап--------------8.1 
function closePopup() {
 const popupClose = document.querySelector('.popup_opened');
 popupClose.classList.remove('popup_opened');
 document.removeEventListener('keydown', closePopupOnEscape);
 popupClose.removeEventListener("click", closePopupOverlay);
 
}

////function Закрыть любой попап через Escape--------------8.2
function closePopupOnEscape(popup) {
  if (popup.key === 'Escape') {
    const popupCloseEscape = document.querySelector('.popup_opened');
    closePopup(popupCloseEscape);
    
  } 
}

////function Закрыть любой попап кликом на оверлей--------------8.3
const closePopupOverlay = (element) => {
  const popupCloseOverlay = document.querySelector('.popup_opened');
  if (element.target === element.currentTarget) 
    closePopup(popupCloseOverlay);
    //element.target.closest('.popup').classList.remove('popup_opened');
};

//function Слушатель закрытия----------------9
function listenCloseButton(button) {
  button.addEventListener('click', closePopup);
}

//function Слушатели-------------------------10
function listenElements(element) {
  element.querySelector('.element__delete').addEventListener('click', deleteCard);
  element.querySelector('.element__like').addEventListener('click', likeCard);
}

//function Удаление-------------------------11
function deleteCard(event) {
  event.target.closest('.element').remove();
}

//function Добавление карточки пользователем-------------------------12
function addedNewCard(event) {
  event.preventDefault();
  const nameValue = form.elements.name;
  const linkValue = form.elements.link;
  const card = {
    name: nameValue.value,
    link: linkValue.value
  }
  const cardCreate = createCard(card);
  const renderElement = (card, place) => {
  place.prepend(card);
  }
  renderElement(cardCreate, elementSection);
  nameValue.value = '';
  linkValue.value = '';
   
  closePopup(event);
}

//function Зум изображений-------------------------13
function zoomImage(event) {
  if (event.target.classList.contains('element__image')) {
    const link = event.target.getAttribute('style').slice(22, -1);
    imageLink.setAttribute('src', `${link}`);
    
    const imageTitle = event.target.closest('.element').querySelector('.element__name').textContent;
    imageLink.setAttribute('alt', `${imageTitle}`);
    descriptionZoom.innerText = imageTitle;
  openPopup(popupZoom);
  }
}


listenCloseButton(popupEditClose);  
listenCloseButton(popupAddedClose);
listenCloseButton(popupZoomClose);
render();

// Слушатели событий 
const btn = document.querySelector('.popup__confirm-button_type_add'); 
editButton.addEventListener('click', openedPopupEdit);
addedButton.addEventListener('click', openedPopupAdded);
confirmForm.addEventListener('submit', editedPopup);
form.addEventListener('submit', addedNewCard);
//popupAdded.addEventListener('submit', () => setDisableButton(config, button));


