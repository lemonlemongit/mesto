export const initialCards = [
  {
    name: 'Домбай',
    link: 'https://images.unsplash.com/photo-1640763403347-54557b9dbed3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
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

export const editButton = document.querySelector('.profile__edit-button');
export const addedButton = document.querySelector('.profile__button-add'); 
const confirmForm =  document.querySelector('.popup__form');
export const nameValue = confirmForm.querySelector('.popup__input_type_name');
export const professionValue = confirmForm.querySelector('.popup__input_type_profession');
export const editAvatarButton = document.querySelector('.profile__avatar');
export const validationConfig = {
  formSelector:'.popup__form', 
  inputSelector:'.popup__input',
  submitButtonSelector: '.popup__confirm-button',
  disabledButtonClass: 'popup__confirm-button_disabled',
  inputErrorClass: 'popup__input_visible'
};