import {
  initialCards,
  editButton,
  addedButton,
  nameValue,
  professionValue,
  elementSection,
  template,
  validationConfig
} from '../components/constants.js';
import {
  FormValidator
} from '../components/FormValidator.js';
import {
  Card
} from '../components/Card.js';
import {
  Section
} from '../components/Section.js';
import {
  PopupWithImage
} from '../components/PopupWithImage.js';
import {
  PopupWithForm
} from '../components/PopupWithForm.js';
import {
  UserInfo
} from '../components/UserInfo.js';

import '../pages/index.css'

//зум изображения
function handleCardClick(name, link) {
  imagePopup.open(name, link)
};

//рендер
function create(data) {
  const card = new Card(data, template, handleCardClick);
  const cardElemement = card.createCard();
  return cardElemement
}

//класс Section
const section = new Section({
      items: initialCards,
      renderer: (data) => {
          const card = create(data);
          section.addItem(card)
      }
  },
  '.elements'
);
section.renderItems();

//класс PopupWithImage
const imagePopup = new PopupWithImage('.zoom');
imagePopup.setEventListeners();

//класс UserInfo
const userInfo = new UserInfo({
  profileNameSelector: '.profile__name',
  profileJobSelector: '.profile__profession'
});

// редактирование формы
const profileFormEditSubmit = (data) => {
  const {
      names,
      professions
  } = data;
  userInfo.setUserInfo(names, professions)
  editProfilePopup.close();
}
//добавление карточки
const сardFormAddedSubmit = (data) => {
  const card = create(data)
  elementSection.prepend(card);
  addCardPopup.close();
}

//класс PopupWithForm added
const addCardPopup = new PopupWithForm('.added-block', сardFormAddedSubmit)

//класс PopupWithForm edit
const editProfilePopup = new PopupWithForm('.edit-block', profileFormEditSubmit)

//слушатель edit формы. Получение зачений для формы edit из html
editButton.addEventListener("click", () => {
  const {
      name,
      job
  } = userInfo.getUserInfo();
  nameValue.value = name;
  professionValue.value = job;
  validatorEditForm.enableValidation();
  editProfilePopup.open();
});
//слушатель added формы.
addedButton.addEventListener("click", () => {
  addCardPopup.open();
});

//слушатели классов форм
addCardPopup.setEventListeners();
editProfilePopup.setEventListeners();

//Вызов Валидации для форм
const formAddedValidate = document.querySelector('.popup__form_added');
const validatorAddedForm = new FormValidator(validationConfig, formAddedValidate);
validatorAddedForm.enableValidation();

const formEditValidate = document.querySelector('.popup__form_edit');
const validatorEditForm = new FormValidator(validationConfig, formEditValidate);
validatorEditForm.enableValidation();