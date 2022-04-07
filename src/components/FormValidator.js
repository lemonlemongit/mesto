export class FormValidator {
  constructor(setting, form) {
    this._form = form;
    this._setting = setting;
    this._button = this._form.querySelector(this._setting.submitButtonSelector);
    this._inputs = Array.from(this._form.querySelectorAll(this._setting.inputSelector));
  }

  _setDisableButton () {
    this._button.setAttribute('disabled', true);
    this._button.classList.add(this._setting.disabledButtonClass);
 };
 
  _setActivateButton () {
    this._button.removeAttribute('disabled');
    this._button.classList.remove(this._setting.disabledButtonClass);
 };
 
 _checkButtonValidity (button) {
   if (this._form.checkValidity())  {
     this._setActivateButton(this._button);
   } else {
     this._setDisableButton(this._button);
   }
 };
 
  _setInputInvalid (errorMessage, input)  {
   errorMessage.textContent = input.validationMessage;
   input.classList.add(this._setting.inputErrorClass);
 };
 
 _setInputValid  (errorMessage, input) {
   errorMessage.textContent = '';
   input.classList.remove(this._setting.inputErrorClass);
 };
 
  _checkInputValidity (input) {
    const errorMessage = this._form.querySelector(`#${input.id}-error`);
    if (input.validity.valid) {
     this._setInputValid(errorMessage, input);
   } else {
     this._setInputInvalid(errorMessage, input);
   }
 };
 
 _formSubmit (event)  {
   event.preventDefault();
   if (this._form.checkValidity()) {
   this._form.reset();
   }
 };
 
  _enableInput () {
    this._inputs.forEach(input => {
    input.addEventListener('input', () => {
       this._checkInputValidity(input);
       this._checkButtonValidity(this._button);
       })
     })
   };
 
  enableValidation() {
    this._form.addEventListener('submit', (event) => this._formSubmit(event));
    this._form.addEventListener('submit', () =>  this._setDisableButton(this._button));
    this._checkButtonValidity(this._button);
    this._enableInput(this._button);
   
   };
 };
 

 