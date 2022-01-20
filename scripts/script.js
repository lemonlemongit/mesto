let openPopup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit');
let closePopup = document.querySelector('.popup__close');
let elementSection =  document.querySelector('.elements');
let confirmButton =  document.querySelector('.popup__form');

//function 
function openedPopup() {
  openPopup.classList.add('popup_opened');
}
editButton.addEventListener('click', openedPopup);

//function 
function closedPopup() {
  openPopup.classList.remove('popup_opened');
}
closePopup.addEventListener('click', closedPopup);

//function 
function editedPopup(evt) {
  evt.preventDefault();
  let nameProfile = document.querySelector('.profile__name');
  let professionProfile = document.querySelector('.profile__profession');

  let formElement = document.querySelector('.popup__form');
  let nameValue = formElement.querySelector('.name-form');
  let professionValue = formElement.querySelector('.job-form');

  nameProfile.textContent = nameValue.value;
  professionProfile.textContent = professionValue.value;
  closedPopup();
}
confirmButton.addEventListener('submit', editedPopup);