let openPopup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closePopup = document.querySelector('.popup__close-button');
let confirmForm =  document.querySelector('.popup__form');
let nameValue = confirmForm.querySelector('.popup__input_type_name');
let professionValue = confirmForm.querySelector('.popup__input_type_profession');
let nameProfile = document.querySelector('.profile__name');
let professionProfile = document.querySelector('.profile__profession');

//function Открытие попапа
function openedPopup() {
  nameValue.value = nameProfile.innerText;
  professionValue.value = professionProfile.innerText;
  openPopup.classList.add('popup_opened');
}

//function Закрытие попапа
function closedPopup() {
  openPopup.classList.remove('popup_opened');
}

//function Редактирование формы
function editedPopup(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameValue.value;
  professionProfile.textContent = professionValue.value;
  closedPopup();
}

// Слушатели событий
editButton.addEventListener('click', openedPopup);
closePopup.addEventListener('click', closedPopup);
confirmForm.addEventListener('submit', editedPopup);