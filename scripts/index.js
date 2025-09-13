// ↓ Card Data ↓

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

// ↓ Modal cards template and list ↓

const cardTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector(".cards__list");

// ↓ Modal edit profile inputs ↓

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
const profileDescriptionElement = document.querySelector(
  ".profile__description"
);

editProfileButton.addEventListener("click", () => {
  editProfileNameInput.value = profileNameElement.textContent;
  editProfileDescriptionInput.value = profileDescriptionElement.textContent;
  openModal(editProfileModal);
});

editProfileCloseButton.addEventListener("click", () => {
  closeModal(editProfileModal);
});

function handleEditProfileSubmit(e) {
  e.preventDefault();
  profileNameElement.textContent = editProfileNameInput.value;
  profileDescriptionElement.textContent = editProfileDescriptionInput.value;
  closeModal(editProfileModal);
}
editProfileForm.addEventListener("submit", handleEditProfileSubmit);

// ↓ Modal + new post profile inputs ↓

const newPostButton = document.querySelector(".profile__add-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseButton = newPostModal.querySelector(".modal__close-button");
const newPostForm = newPostModal.querySelector(".modal__form");

const cardNameInput = newPostModal.querySelector("#description-input");
const cardLinkInput = newPostModal.querySelector("#card-image-input");

function handleNewPostSubmit(e) {
  e.preventDefault();

  const newCardData = {
    name: cardNameInput.value,
    link: cardLinkInput.value,
  };

  const newCardElement = getCardElement(newCardData);

  cardsList.prepend(newCardElement);
  newPostForm.reset();
  closeModal(newPostModal);
}

newPostForm.addEventListener("submit", handleNewPostSubmit);

newPostButton.addEventListener("click", () => {
  openModal(newPostModal);
});

newPostCloseButton.addEventListener("click", () => {
  closeModal(newPostModal);
});

// ↓ Preview Modal Elements ↓

const previewModal = document.querySelector("#preview-modal");
const previewModalCloseButton = previewModal.querySelector(
  ".modal__close_type_preview"
);

const previewImageElement = previewModal.querySelector(".modal__image");
const previewCaptionElement = previewModal.querySelector(".modal__caption");

previewModalCloseButton.addEventListener("click", () => {
  closeModal(previewModal);
});

// ↓ Create a card element function ↓

function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const cardImageElement = cardElement.querySelector(".card__image");
  const cardNameElement = cardElement.querySelector(".card__title");
  cardImageElement.src = data.link;
  cardImageElement.alt = data.name;
  cardNameElement.textContent = data.name;

  const cardLikeButton = cardElement.querySelector(".card__like-button");
  cardLikeButton.addEventListener("click", () => {
    cardLikeButton.classList.toggle("card__like-button_active");
  });

  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImageElement.addEventListener("click", () => {
    previewImageElement.src = data.link;
    previewImageElement.alt = data.name;
    previewCaptionElement.textContent = data.name;
    openModal(previewModal);
  });

  return cardElement;
}

// ↓ Modal utility functions ↓

function openModal(modal) {
  modal.classList.add("modal_is-opened");
  document.addEventListener("keydown", handleEscClose);
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");

  // Only remove listener if no other modals are open

  if (!document.querySelector(".modal_is-opened")) {
    document.removeEventListener("keydown", handleEscClose);
  }
}

function handleEscClose(e) {
  if (e.key === "Escape") {
    const openedModal = document.querySelector(".modal.modal_is-opened");
    if (openedModal) {
      closeModal(openedModal);
    }
  }
}

// ↓ Initialize cards from initialCards array ↓

initialCards.forEach((cardItem) => {
  const cardElement = getCardElement(cardItem);
  cardsList.append(cardElement);
});
