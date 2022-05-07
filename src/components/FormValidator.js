export class FormValidator {
  constructor(setting, form) {
    this._form = form;
    this._setting = setting;
    this._button = this._form.querySelector(this._setting.submitButtonSelector);
    this._inputs = Array.from(this._form.querySelectorAll(this._setting.inputSelector));
  }

  //добавлю сброс ошибок инпутов
  resetValidation = () => {
   this.checkButtonValidity();
    this._inputs.forEach((inputElement) => {
      this._setInputValid(inputElement);
    });
  };

  _setDisableButton () {
    this._button.setAttribute('disabled', true);
    this._button.classList.add(this._setting.disabledButtonClass);
 };
 
  _setActivateButton () {
    this._button.removeAttribute('disabled');
    this._button.classList.remove(this._setting.disabledButtonClass);
 };
 
 checkButtonValidity (button) {
   if (this._form.checkValidity())  {
     this._setActivateButton(this._button);
   } else {
     this._setDisableButton(this._button);
   }
 };
 
  _setInputInvalid (input)  {
    const errorMessage = this._form.querySelector(`#${input.id}-error`);
   errorMessage.textContent = input.validationMessage;
   input.classList.add(this._setting.inputErrorClass);
 };
 
 _setInputValid (input) {
  const errorMessage = this._form.querySelector(`#${input.id}-error`);
   errorMessage.textContent = '';
   input.classList.remove(this._setting.inputErrorClass);
 };
 
  _checkInputValidity (input) {
    
    if (input.validity.valid) {
     this._setInputValid(input);
   } else {
     this._setInputInvalid(input, input.validationMessage);
   }
 };

  _enableInput () {
    this._inputs.forEach(input => {
    input.addEventListener('input', () => {
       this._checkInputValidity(input);
       this.checkButtonValidity(this._button);
       })
     })
   };
 
  enableValidation() {
    this.checkButtonValidity(this._button);
    this._enableInput(this._button);
   
   };
 };
 

 