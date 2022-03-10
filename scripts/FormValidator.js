export class FormValidator {
  constructor(setting, form) {
   this._form = form;
   this._setting = setting;
  }
 
 
 
  _setDisableButton (button) {
   button.setAttribute('disabled', true);
   button.classList.add(this._setting.disabledButtonClass);
 };
 
 
 
  /////Активация кнопки ---------- 3.1
  _setActivateButton (button) {
   button.removeAttribute('disabled');
   button.classList.remove(this._setting.disabledButtonClass);
 };
 
 
 
 //// Установка состояния кнопки ---------- 3.0
 _checkButtonValidity (button) {
   if (this._form.checkValidity())  {
     this._setActivateButton(button);
   } else {
     this._setDisableButton(button);
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
 
 
 
  _enableInput (button) {
   const inputs = Array.from(this._form.querySelectorAll(this._setting.inputSelector));
     inputs.forEach(input => {
     input.addEventListener('input', () => {
       this._checkInputValidity(input);
       this._checkButtonValidity(button);
       })
     })
   };
 
 
 
  enableValidation() {
   this._form.addEventListener('submit', (event) => this._formSubmit(event));
     const button = this._form.querySelector(this._setting.submitButtonSelector);
     this._form.addEventListener('submit', () =>  this._setDisableButton(button));
       this._checkButtonValidity(button);
       this._enableInput(button);
   
 };
 

 };
 

 