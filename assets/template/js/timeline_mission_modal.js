// document.addEventListener('DOMContentLoaded', () => {
(function () {
  const openModalButtons = document.querySelectorAll(
    ".open-modal-button-mission"
  );
  const modal = document.querySelector(".mission-modal");
  const closeModalButton = document.querySelector(
    ".mission-modal__close-button"
  );
  const modalOverlay = document.querySelector(".mission-modal__overlay");

  if (
    openModalButtons.length === 0 ||
    !modal ||
    !closeModalButton ||
    !modalOverlay
  ) {
    return;
  }

  const openModal = () => {
    console.log("openModal");
    modal.classList.remove("mission-modal--hidden");
  };

  const closeModal = () => {
    modal.classList.add("mission-modal--hidden");
  };

  openModalButtons.forEach((button) => {
    button.addEventListener("click", openModal);
  });

  closeModalButton.addEventListener("click", closeModal);

  modalOverlay.addEventListener("click", closeModal);
})();
// });
