const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add("modal__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("modal__error_visible");
} ;

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove("modal__input_type_error");
  errorElement.classList.remove("modal__error_visible");
  errorElement.textContent = "";
} ;

const checkInputValidity= (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
} ;

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  }) ;
} ;

const toggleButtonState = (inputList, buttonElement, settings) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(settings.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(settings.inactiveButtonClass);
    buttonElement.disabled = false;
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(
    formElement.querySelectorAll(".modal__input")

  ) ;

  const buttonElement = formElement.querySelector(".modal__submit-button");
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    }) ;
  }) ;
} ;

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".modal__form"));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    }) ;
    setEventListeners(formElement);
  }) ;
} ;

function validateForm(settings) {
  const form = document.querySelector(settings.formSelector);
  const button = form.querySelector(settings.submitButtonSelector);
  button.classList.add(settings.inactiveButtonClass);
}

enableValidation(settings) ;

// optional, reset validation errors and button state when opening a form ↓↓

const disabledButtonClass = (buttonElement) => {
};

const resetValidation = (formElement, inputList) => {
  const buttonElement = formElement.querySelector(".modal__submit-button");

  inputList.forEach((inputElement) => {
    hideInputError(formElement, inputElement);
  }) ;

  toggleButtonState(inputList, buttonElement);
} ;

