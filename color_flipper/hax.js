let hax = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
let btn = document.getElementById("btn");
let color = document.querySelector(".color");

btn.addEventListener("click", () => {
  let haxColor = "#";
  for (i = 0; i < 6; i++) {
    haxColor += hax[getRandomNumber()];
  }
  console.log(haxColor);

  color.textContent = haxColor;
  document.body.style.backgroundColor = haxColor;
});

getRandomNumber = () => {
  return Math.floor(Math.random() * hax.length);
};
