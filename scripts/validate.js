
// Если валидация не пройдена ---------- 4.2
const setInputInvalid = (config, errorMessage, input) => {
  errorMessage.textContent = input.validationMessage;
  input.classList.add(config.inputErrorClass);
};

// Если валидация пройдена ---------- 4.1
const setInputValid = (config, errorMessage, input) => {
  errorMessage.textContent = '';
  input.classList.remove(config.inputErrorClass);
};

/// Поверка на валидность инпутов ---------- 4.0
const checkInputValidity = (config, formElement, input) => {
  const errorMessage = formElement.querySelector(`#${input.id}-error`);

  if (input.validity.valid) {
    setInputValid(config, errorMessage, input);
  } else {
    setInputInvalid(config, errorMessage, input);
  }
};


/////Деавктивация кнопки ---------- 3.2
const setDisableButton = (config, button) => {
  button.setAttribute('disabled', true);
  button.classList.add(config.disabledButtonClass);
};

 /////Активация кнопки ---------- 3.1
 const setActivateButton = (config, button) => {
  button.removeAttribute('disabled');
  button.classList.remove(config.disabledButtonClass);
};

//// Установка состояния кнопки ---------- 3.0
const checkButtonValidity = (config, formElement, button) => {
  if (formElement.checkValidity())  {
    setActivateButton(config, button);
  } else {
    setDisableButton(config, button);
  }
};

/// Сброс формы ---------- 2
const formSubmit = (event, formElement) => {
  event.preventDefault();
if (formElement.checkValidity()) {
  formElement.reset();
  }
};

//Перебор инпутов---------- 1.1
const enableInput = (config, formElement, button) => {
const inputs = Array.from(formElement.querySelectorAll(config.inputSelector));
  inputs.forEach(input => {
  input.addEventListener('input', () => {
    checkInputValidity(config, formElement, input);
    checkButtonValidity(config, formElement, button);
    })
  })
};


/// Инициализация валидации ---------- 1
function enableValidation(config) {
  const form =  Array.from(document.querySelectorAll(config.formSelector));
    form.forEach((formElement) => {
      formElement.addEventListener('submit', (event) => formSubmit(event, formElement));

  const button = formElement.querySelector(config.submitButtonSelector);
    formElement.addEventListener('submit', () => setDisableButton(config, button));
    checkButtonValidity(config, formElement, button);
    enableInput(config, formElement, button);
  })
};

//Переменные для валидации
enableValidation({
  formSelector:'.popup__form', 
  inputSelector:'.popup__input',
  submitButtonSelector: '.popup__confirm-button',
  disabledButtonClass: 'popup__confirm-button_disabled',
  inputErrorClass: 'popup__input_visible'
});
