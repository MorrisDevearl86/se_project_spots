const showInputError = (formElement, inputElement, errorMessage) => {
  const errorMessageElement = document.querySelector('#${inputElement.id}-error');
  errorMessageElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement, errorMessage) => {
  const errorMessageElement = document.querySelector('#${inputElement.id}-error');
  errorMessageElement.textContent = errorMessage;
};

const checkInputValidity = (formElement,inputElement) => {
if (!inputElement.validity.valid) {
  showInputError(formElement, inputElement, inputElement.validationMessage);
}
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".modal__input"));
  const buttonElement = formElement.querySelector(".modal__button");

  // TODO - handle initial states
  // toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      // toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = document.querySelectorAll(".modal__form");
  formList.forEach((formElement) => {
   setEventListeners(formElement);
  });
};

enableValidation();