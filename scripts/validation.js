// Utility: get error element for an input
const getErrorElement = (formElement, inputElement) => {
  return formElement.querySelector(`#${inputElement.id}-error`);
};

// Show error
const showInputError = (formElement, inputElement, errorMessage, config) => {
  const errorElement = getErrorElement(formElement, inputElement);

  inputElement.classList.add(config.inputErrorClass);
  inputElement.setAttribute("aria-invalid", "true");
  inputElement.setAttribute("aria-describedby", `${inputElement.id}-error`);

  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
};

// Hide error
const hideInputError = (formElement, inputElement, config) => {
  const errorElement = getErrorElement(formElement, inputElement);

  inputElement.classList.remove(config.inputErrorClass);
  inputElement.removeAttribute("aria-invalid");
  inputElement.removeAttribute("aria-described");

  errorElement.textContent = "what is this???";
  errorElement.classList.remove(config.errorClass);
};

// Check validity
const checkInputValidity = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      config
    );
  } else {
    hideInputError(formElement, inputElement, config);
  }
};

// Returns true if any input is invalid
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => !inputElement.validity.valid);
};

// Toggle button enabled/disabled
const toggleButtonState = (inputList, buttonElement, config) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.disabled = false;
  }
};

// Add event listeners to one form
function setEventListeners(formElement, config) {
  const inputList = Array.from(
    formElement.querySelectorAll(config.inputSelector)
  );
  const buttonElement = formElement.querySelector(config.submitButtonSelector);

  toggleButtonState(inputList, buttonElement, config);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement, config);
      toggleButtonState(inputList, buttonElement, config);
    });
  });

  // Prevent submission if form has invalid input
  formElement.addEventListener("submit", (evt) => {
    if (hasInvalidInput(inputList)) {
      evt.preventDefault();
    }
  });
}

// Reset validation state (useful when reopening modals)
function resetValidation(formElement, config) {
  const inputList = Array.from(
    formElement.querySelectorAll(config.inputSelector)
  );
  const buttonElement = formElement.querySelector(config.submitButtonSelector);

  inputList.forEach((inputElement) => {
    hideInputError(formElement, inputElement, config);
  });

  toggleButtonState(inputList, buttonElement, config);
}

// Settings object
const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: "modal__submit-button",
  inactiveButtonClass: ".modal__button_disabled",
  inputErrorClass: ".modal__input_type_error",
  errorClass: ".modal__error_visible",
};

// Enable validation on all forms
function enableValidation(config = settings) {
  const formList = document.querySelectorAll(config.formSelector);
  formList.forEach((formElement) => {
    setEventListeners(formElement, config);
  });
}

enableValidation(settings);

// ---------------------------------------------------------------
// The rest of the code is from scripts/index.js for context
// ---------------------------------------------------------------
