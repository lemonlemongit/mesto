import {FormValidator} from './FormValidator.js';
import  {openPopup, closePopup} from './utilities.js';
import {Card} from './Card.js';

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
const popupZoomClose = document.querySelector('.zoom__close-button');
const validationConfig = {
  formSelector:'.popup__form', 
  inputSelector:'.popup__input',
  submitButtonSelector: '.popup__confirm-button',
  disabledButtonClass: 'popup__confirm-button_disabled',
  inputErrorClass: 'popup__input_visible'
};

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
//function Экземлпяр класса--------------
initialCards.forEach((data) => {
  const cardElem = create(data);
  render(cardElem)
 });

function create(data) {
  const card =  new Card (data, template);
  const cardElemement = card.createCard();
  return cardElemement
}

// function рендер---------------------------4
function render(cardElemement) {
  elementSection.append(cardElemement)
}

//function Слушатель закрытия----------------9
function listenCloseButton(button) {
  button.addEventListener('click', closePopup);
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
  elementSection.prepend(create(card))
  nameValue.value = '';
  linkValue.value = '';
  closePopup(event);
}

listenCloseButton(popupEditClose);  
listenCloseButton(popupAddedClose);
listenCloseButton(popupZoomClose);

// Слушатели событий 
editButton.addEventListener('click', openedPopupEdit);
addedButton.addEventListener('click', openedPopupAdded);
confirmForm.addEventListener('submit', editedPopup);
form.addEventListener('submit', addedNewCard);




//Вызов Валидации для форм
 const formAddedValidate = document.querySelector('.popup__form_added');
 const  validatorAddedForm = new FormValidator (validationConfig, formAddedValidate);
 validatorAddedForm .enableValidation();

 const formEditValidate = document.querySelector('.popup__form_edit');
 const  validatorEditForm = new FormValidator (validationConfig, formEditValidate);
 validatorEditForm.enableValidation();