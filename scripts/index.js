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

const openPopupEdit = document.querySelector('.popup-block__type_edit');
const openPopupAdded = document.querySelector('.popup-block__type_added');
const editButton = document.querySelector('.profile__edit-button');
const AddedButton = document.querySelector('.profile__button-add'); 
const closePopupEdit = document.querySelector('.popup__close-button_edit-block');
const closePopupAdded = document.querySelector('.popup__close-button_added-block');
const confirmForm =  document.querySelector('.popup__form');
const nameValue = confirmForm.querySelector('.popup__input_type_name');
const professionValue = confirmForm.querySelector('.popup__input_type_profession');
const nameProfile = document.querySelector('.profile__name');
const professionProfile = document.querySelector('.profile__profession');
const elementSection = document.querySelector('.elements');
const template = document.getElementById('template-element');
const form = document.querySelector('.popup__form_added');
const openZoom = document.querySelector('.zoom');
const closeZoom = document.querySelector('.zoom__close');
const descriptionZoom = document.querySelector('.zoom__image-description');
 
//function Открытие попапа редактирования-----1
function openedPopupEdit(event) {
    nameValue.value = nameProfile.innerText;
    professionValue.value = professionProfile.innerText;
    openPopupEdit.classList.add('popup_opened');
}

//function Закрытие попапа редактирования-----2
function closedPopupEdit() {
  openPopupEdit.classList.remove('popup_opened');
}

//function Открытие попапа Добавления---------3
function openedPopupAdded() {
  openPopupAdded.classList.add('popup_opened');
}

//function Закрытия попапа Добавления---------4
function closedPopupAdded() {
  openPopupAdded.classList.remove('popup_opened');
}

//function Редактирование формы---------------5
function editedPopup(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameValue.value;
  professionProfile.textContent = professionValue.value;
  closedPopupEdit();
}

// function рендер----------------------------6
function render() {
  initialCards.forEach(renderCard);
}

// function Рендер карточки-------------------7
function renderCard(object) {
  const templateDate = template.content.cloneNode(true);
  templateDate.querySelector('.element__image').setAttribute('style', `background-image: url(${object.link})`);
  templateDate.querySelector('.element__name').textContent = object.name;
  listenElements(templateDate);
  elementSection.prepend(templateDate);
}

//function Лайк------------------------------8
function likeCard(event) {
  if (event.target.classList.contains('element__like')) {
    event.target.classList.toggle('element__like_active')
  }
}

//function Слушатель-------------------------9
function listenElements(element) {
  element.querySelector('.element__delete').addEventListener('click', deleteCard);
  element.querySelector('.element__like').addEventListener('click', likeCard);
}

//function Удаление-------------------------10
function deleteCard(event) {
  event.target.closest('.element').remove();
}

//function Добавление-------------------------11
function addedNewCard(event) {
  event.preventDefault();
  const nameValue = form.elements.name;
  const linkValue = form.elements.link;
  const card = {
    name: nameValue.value,
    link: linkValue.value
  }
  renderCard(card, elementSection)
  nameValue.value = '';
  linkValue.value = '';
  closedPopupAdded();
}

//function Зум изображений-------------------------12
function zoomImage(event) {
  if (event.target.classList.contains('element__image')) {
      let link = event.target.getAttribute('style').slice(22, -1);
      let srcLink = document.querySelector(".zoom__image");
      srcLink.setAttribute('src', `${link}`);

      let imageTitle = event.target.closest('.element').querySelector('.element__name').textContent;
      descriptionZoom.innerText = imageTitle;
      openZoom.classList.toggle('zoom_opened');
  }
}

//function Закрытие Зума-------------------------13
function closedZoomImage() {
  openZoom.classList.toggle('zoom_opened');
}


// Слушатели событий
editButton.addEventListener('click', openedPopupEdit);
AddedButton.addEventListener('click', openedPopupAdded);
closePopupEdit.addEventListener('click', closedPopupEdit);
closePopupAdded.addEventListener('click', closedPopupAdded);
confirmForm.addEventListener('submit', editedPopup);
form.addEventListener('submit', addedNewCard);
elementSection.addEventListener('click', zoomImage);
closeZoom.addEventListener('click', closedZoomImage);

render();

