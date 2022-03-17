export const descriptionZoom = document.querySelector('.zoom__image-description');
export const popupZoom = document.querySelector('.zoom');
export const imageLink = document.querySelector(".zoom__image");


//function Открыть любой попап--------------7
export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupOnEscape);
    popup.addEventListener("click", closePopupOverlay);
  }


  //function Закрыть любой попап--------------8.1 
  export function closePopup() {
    const popupClose = document.querySelector('.popup_opened');
    popupClose.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupOnEscape);
    popupClose.removeEventListener("click", closePopupOverlay);
    
   }

   ////function Закрыть любой попап через Escape--------------8.2
   export function closePopupOnEscape(popup) {
    if (popup.key === 'Escape') {
      const popupCloseEscape = document.querySelector('.popup_opened');
      closePopup(popupCloseEscape);
      
    } 
  }

  ////function Закрыть любой попап кликом на оверлей--------------8.3
  export const closePopupOverlay = (element) => {
    const popupCloseOverlay = document.querySelector('.popup_opened');
    if (element.target === element.currentTarget) 
      closePopup(popupCloseOverlay);
 
  };




