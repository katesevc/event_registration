// Importing functions
import { loadData } from "./loadData.js";
import { createWidgets } from "./createWidgets.js";

// Importing values
import { APIkey } from "./constants.js";

// Takes the data and makes the widgets
const loadAndCreateWidgets = async () => {
  const data = await loadData();
  createWidgets(data);
};

const button = document.querySelector(".featured_button");
const button1 = document.querySelector(".event_button1");

const close = document.querySelector(".close");
const modal = document.querySelector(".modal");

const openModal = () => {
  modal.style.display = "block";
};

button.addEventListener("click", () => openModal());

window.addEventListener("click", () => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
