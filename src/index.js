require("./style.css");

const dropdownBtn = document.getElementById("click-dropdown-btn");
const dropdownContent = document.getElementById("dropdown-items-container");

dropdownBtn.addEventListener("click", () => {
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "block";
  }
});
