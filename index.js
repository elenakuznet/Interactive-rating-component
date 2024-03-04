const ratingNumbers = document.querySelectorAll(".rating__circle");
console.log(ratingNumbers);

function removeAll() {
  ratingNumbers.forEach((number) => {
    number.classList.remove("active");
  });
}

ratingNumbers.forEach((number) => {
  number.addEventListener("click", () => {
    console.log("click");
    removeAll();
    number.classList.add("active");
  });
});
