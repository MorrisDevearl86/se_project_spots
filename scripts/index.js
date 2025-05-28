const initialCards = [

 {
  name: "Golden Gate Bridge",
  link: " https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg"
},
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },

  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },

  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },

  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },

  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },

  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

// Modal edit profile inputs ↓↓↓

const editProfileButton = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseButton = editProfileModal.querySelector(
  ".modal__close-button"
);

const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);

const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);

const profileNameElement = document.querySelector(".profile__name");
const profileDescriptionElement = document.querySelector(".profile__description");

editProfileButton.addEventListener("click", function () {
  editProfileNameInput.value = profileNameElement.textContent;
  editProfileDescriptionInput.value = profileDescriptionElement.textContent;
  editProfileModal.classList.add("modal_is-opened");
});

editProfileCloseButton.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

function handleEditProfileSubmit(e) {
  e.preventDefault();

  profileNameElement.textContent = editProfileNameInput.value;
  profileDescriptionElement.textContent = editProfileDescriptionInput.value;
  editProfileModal.classList.remove("modal_is-opened");
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);

// Modal + new post profile inputs

const newPostButton = document.querySelector(".profile__add-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseButton = newPostModal.querySelector(".modal__close-button");

newPostButton.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

newPostCloseButton.addEventListener("click", function () {
newPostModal.classList.remove("modal_is-opened");
});

// Modal cards template ↓↓↓

const cardTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector(".cards__list");

<<<<<<< HEAD
function getCardElement(data) {
=======
const cardNameInput = document.getElementById("cardNameInput");
const cardLinkInput = document.getElementById("cardLinkInput");
const addCardForm = document.getElementById("addCardForm");
const addCardModal = document.getElementById("addCardModal");
const closeModalBtn = document.getElementById("closeModalBtn");

function handleAddCardSubmit(e) {
  e.preventDefault();
  console.log(cardNameInput.value);
  console.log(cardLinkInput.value);
  closeModal();
}

function closeModal() {
  addCardModal.style.display = "none";
}

addCardForm.addEventListener("submit", handleAddCardSubmit);
closeModalBtn.addEventListener("click", closeModal);

function getCardEl(data) {
  const cardEl = cardTemplate.content.querySelector(".card").cloneNode(true);
  const cardNameEl = cardEl.querySelector(".card__title");
  cardNameEl.textContent = data.name;
  const cardImageEl = cardEl.querySelector(".card__image");
>>>>>>> a36aa0139460fb29b41779f189319fecee92f2be

  const cardElement = cardTemplate.content.querySelector(".card").cloneNode(true);
  const cardImageElement = cardElement.querySelector(".card__image");
  const cardNameElement = cardElement.querySelector(".card__title");

  cardImageElement.src = data.link;
  cardImageElement.alt = data.name;
  cardNameElement.textContent = data.name;


      cardImageElement.addEventListener("click"), () => {

        previewImageElement.src = data.link;
        previewImageElement.alt = data.name;
        previewCaptionElement.textContent = data.name;

        previewModalClosedButton.addEventListener("click", () => {
        closeModal(previewModal);
    });

  cardLikeButton.addEventListener("click", () => {
    cardLikeButton.classList.toggle("card__like-button_active");
  });

  const cardLikeButton = cardElement.querySelector(".card__like-button")};

  const previewModal = document.querySelector("#preview-modal");
  const previewModalClosedButton = document.querySelector(".modal__close_type_preview");
  const previewImageElement = previewModal.querySelector(".modal__image");
  const previewCaptionElement = previewModal.querySelector(".modal__caption");
  const deleteButton = cardElement.querySelector(".card__delete-button");

  deleteButton.addEventListener("click", () => {
  deleteButton.closest(".card").remove() });

  previewCaptionElement.textContent = data.name;
    openModal(previewModal);
  });

const closeButton = document.querySelector('.modal-close');

closeButton.addEventListener('click', () => {
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';

return cardElement;

});

const cardModalLink = document.querySelector ("#card-image-input");
const cardNameInput = document.querySelector ("#description-input");
const cardLinkInput = cardModal.querySelector ("#card-image-input");

initialCards.forEach((cardItem, i, arr) => {
  console.log (i);
  console.log (arr);


  const cardElement = getCardElement(cardItem);
  cardsList.prepend(cardElement);

  // Create data object from form values

  const newCardData = {
    name: nameInput.value,
    link: linkInput.value
  };

  // Use getCardElement() to create the new card
  const closeButton = document.querySelector('.modal-close'); // Change the selector as needed

  closeButton.addEventListener('click', () => {
    const modal = document.querySelector('.modal'); // Change the selector as needed
    modal.style.display = 'none'; // Or toggle a class if using CSS classes
});

  // Add the new card to the DOM

});


// Declare and initialize cardModal



