const editProfileBtn = document.querySelector(".profile__button_edit-profile");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editModalCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editSaveBtn = editProfileModal.querySelector(".modal__save-btn");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const profileNameEl = editProfileModal.querySelector("#profile-name__input");
const profileDescriptionEl = editProfileModal.querySelector(
  "#profile-description__input",
);
const newPostBtn = document.querySelector(".profile__button_new-post");
const newPostModal = document.querySelector("#new-post-modal");
const newPostModalCloseBtn = newPostModal.querySelector(".modal__close-btn");
const newPostSaveBtn = newPostModal.querySelector(".modal__save-btn");
const newPostLinkInput = newPostModal.querySelector("#image-link__input");
const newPostCaptionInput = newPostModal.querySelector("#caption__input");

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameEl.value;
  profileDescription.textContent = profileDescriptionEl.value;
  editProfileModal.classList.remove("modal_is-opened");
}

editProfileBtn.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-opened");
  profileNameEl.value = profileName.textContent;
  profileDescriptionEl.value = profileDescription.textContent;
});

editModalCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

editSaveBtn.addEventListener("click", handleEditProfileSubmit);

function handleNewPostSubmit(evt) {
  evt.preventDefault();
  console.log(newPostLinkInput, newPostCaptionInput);
  newPostModal.classList.remove("modal_is-opened");
}

newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

newPostModalCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});

newPostSaveBtn.addEventListener("submit", handleNewPostSubmit);
