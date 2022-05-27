const button = document.querySelector(".featured_button");
const close = document.querySelector(".close");
const modal = document.querySelector(".modal");

button.addEventListener("click", openModal("roko"));

close.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", () => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

export const openModal = (data) => {
  const modalText = document.querySelector(".modal-text");
  modal.innerText = data;
  modal.style.display = "block";
};
