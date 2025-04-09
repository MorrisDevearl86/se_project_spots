//Edit Profile Button ↓↓↓

const editProfileButton = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseButton = editProfileModal.querySelector(
  ".modal__close-button"
);

editProfileButton.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-opened");
});

editProfileCloseButton.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

// New Post Button ↓↓↓

const newPostProfileButton = document.querySelector(".profile__edit-button");
const newPostProfileModal = document.querySelector("#new-post-modal");
const newPostProfileCloseButton = newPostProfileModal.querySelector(
  ".modal__close-button"
);

newPostProfileButton.addEventListener("click", function () {
  newPostProfileModal.classList.add("modal_is-opened");
});

newPostProfileCloseButton.addEventListener("click", function () {
  newPostProfileModal.classList.remove("modal_is-opened");
});
