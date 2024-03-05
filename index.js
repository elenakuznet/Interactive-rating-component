const ratingNumbers = document.querySelectorAll(".rating__circle");
const ratingBtn = document.querySelector(".rating__button");
const ratingWrapper = document.querySelector(".rating__wrapper");
const thanksWrapper = document.querySelector(".thanks");
const ratingResult = document.querySelector(".rating__result");

function removeAll() {
  ratingNumbers.forEach((number) => {
    number.classList.remove("active");
  });
}

ratingNumbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    ratingResult.innerText = event.target.innerText;
    removeAll();
    number.classList.add("active");
  });
});

ratingBtn.addEventListener("click", () => {
  if (ratingResult.innerText) {
    thanksWrapper.classList.remove("hidden");
    ratingWrapper.classList.add("hidden");
  }
});
