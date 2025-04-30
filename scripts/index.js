// cards information ↓↓↓

const initialCards = [
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

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

editProfileButton.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  editProfileModal.classList.add("modal_is-opened");
});

editProfileCloseButton.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

function handleEditProfileSubmit(e) {
  e.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
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

  cardImageEl.src = data.link;
  cardImageEl.alt = data.name;

  return cardEl;
}

initialCards.forEach((cardItem, i, arr) => {
  console.log(i);
  console.log(arr);
  const cardEl = getCardEl(cardItem);
  cardsList.prepend(cardEl);
});
