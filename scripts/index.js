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

const newPostButton = document.querySelector(".");
const newPostModal = document.querySelector;
const newPostCloseButton = document.querySelector;
