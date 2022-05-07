import {
  initialCards,
  editButton,
  addedButton,
  nameValue,
  professionValue,
  validationConfig,
  editAvatarButton
} from '../utils/constants.js';
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
  PopupWithConfirm
} from '../components/PopupWithConfirm.js';
import {
  UserInfo
} from '../components/UserInfo.js';
import {
   api 
} from '../components/Api.js';

import '../pages/index.css'

//перезаписываем id
let userId

Promise.all([api.getProfile(), api.getInitialCards()])
  .then(([res, cardList]) => {
    userId = res._id
    userInfo.setUserInfo(res.name, res.about);
    
    const avatar = res.avatar
    userInfo.setUserAvatar(avatar)

    cardList.forEach(data => {
      const card = create({
        name: data.name,
        link: data.link,
        likes: data.likes,
        id: data._id,
        userId: userId,
        ownerId: data.owner._id,
      });
    
        section.addItem(card)
    });
  })
  .catch((res) => console.log(res))

//зум изображения
function handleCardClick(name, link) {
  imagePopup.open(name, link)
};

//рендер
function create(data) {
  const card = new Card(

    data, 

    "#template-element",

    handleCardClick,

     (id) => {
    confirmPopup.open()
    confirmPopup.changeSubmitHandler( () => {
      api.deleteCard(id)
      .then(res => {
        card.deleteCard()
        confirmPopup.close()
      })
   })
  }, 

  (id) => {
    if(card.isLiked()) {
      api.deleteLike(id) //удаляем свой лайк
    .then(res => {
      //console.log(res)
      card.countLikes(res.likes)
    })
    .catch((res) => console.log(res));

  } else {
    api.addLike(id) //ставим лайк
    .then(res => {
      //console.log(res)
      card.countLikes(res.likes)
    })
    .catch((res) => console.log(res));
   }
 }
);
  const cardElemement = card.createCard();
  return cardElemement
}

//класс Section
const section = new Section({
      items: [],
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
  profileJobSelector: '.profile__profession',
  profileAvatar: '.profile__photo',
});

// редактирование формы
const profileFormEditSubmit = (data) => {
  const {
      names,
      professions
  } = data;
  editProfilePopup.loadingDateFromServer('Сохранение...')
  api.editProfile(names,professions)
  .then(res => {
    userInfo.setUserInfo(names, professions)
    editProfilePopup.close();
  })
  .catch((res) => console.log(res))
    .finally(() => {
      editProfilePopup.loadingDateFromServer('Сохранить');
    })
}

//добавление карточки
const сardFormAddedSubmit = (data) => {
  addCardPopup.loadingDateFromServer('Сохранение....')
  api.addCard(data.name, data.link)
  .then(res => {
    const card = create ({
      name:res.name,
      link:res.link,
      likes:res.likes,
      id: res._id,
      userId: userId,
      ownerId: res.owner._id,
  })
  addCardPopup.close();
  section.addItem(card)
})
  .catch((err) => console.log(err))
  .finally(() => {
    addCardPopup.loadingDateFromServer('Сохранить');
  })
}

//класс PopupWithForm submit-delete-block
const confirmPopup = new PopupWithConfirm('.deletet-block')

//открытие формы edit avatar
function avatarFormOpen() {
  validatorAvatarForm.resetValidation();
  editAvatarPopup.open()
}

//редактирование аватара
function avatarFormSubmit(data) {
  editAvatarPopup.loadingDateFromServer('Сохранение....')
  api.setAvatar(data.name)

  .then((res) => {
    const dataUrl = {avatar: data.name}
    userInfo.setUserAvatar(dataUrl.avatar);
    editAvatarPopup.close();
  })
  .catch((err) => console.log(err))
  .finally(() => {
    editAvatarPopup.loadingDateFromServer('Сохранить');
  })
}

//класс PopupWithForm avatar
const editAvatarPopup = new PopupWithForm('.avatar-block', avatarFormSubmit)
editAvatarPopup.setEventListeners();
editAvatarButton.addEventListener('click', avatarFormOpen);

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
  validatorEditForm.resetValidation();
  editProfilePopup.open();
});
//слушатель added формы.
addedButton.addEventListener("click", () => {
  validatorAddedForm.resetValidation();
  addCardPopup.open();
});

//слушатели классов форм
confirmPopup.setEventListeners();
addCardPopup.setEventListeners();
editProfilePopup.setEventListeners();

//Вызов Валидации для форм
const formAddedValidate = document.querySelector('.popup__form_added');
const validatorAddedForm = new FormValidator(validationConfig, formAddedValidate);
validatorAddedForm.enableValidation();

const formEditValidate = document.querySelector('.popup__form_edit');
const validatorEditForm = new FormValidator(validationConfig, formEditValidate);
validatorEditForm.enableValidation();

const formEditPhotoValidate = document.querySelector('.popup__form_avatar');
const validatorAvatarForm = new FormValidator(validationConfig, formEditPhotoValidate);
validatorAvatarForm.enableValidation();