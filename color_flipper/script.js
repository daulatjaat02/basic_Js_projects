let colors = [
  "green",
  "red",
  "rgb(23, 34, 66)",
  "rgba(23, 64, 124, 0.8)",
  "#f15025",
];
let btn = document.getElementById("btn");
let color = document.querySelector(".color");

btn.addEventListener("click", () => {
  let randomNumber = getRandomNumber();
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};
