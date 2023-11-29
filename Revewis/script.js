let reviews = [
  {
    img: "Imgs/1.jpg",
    author: "John Wilson",
    job: "Web Designer",
    review:
      "Great experience working with John! He has a keen eye for design and always delivers top-notch websites. Highly recommended.",
  },
  {
    img: "Imgs/2.jpg",
    author: "Emily Davis",
    job: "Software Engineer",
    review:
      "Emily is a coding genius! She helped us optimize our software and improve its efficiency. Amazing teamwork and results.",
  },
  {
    img: "Imgs/3.jpg",
    author: "Lisa Smith",
    job: "Marketing Specialist",
    review:
      "Lisa's marketing strategies were a game-changer for our business. Our sales increased significantly after implementing her ideas.",
  },
  {
    img: "Imgs/4.jpg",
    author: "Michael Brown",
    job: "Product Manager",
    review:
      "Michael is a true professional. His attention to detail and project management skills are unparalleled. It was a pleasure working with him.",
  },
  {
    img: "Imgs/5.jpg",
    author: "Sophie Turner",
    job: "UX/UI Designer",
    review:
      "Sophie created a stunning user interface for our app. The design is not only visually appealing but also user-friendly. Exceptional work!",
  },
  {
    img: "Imgs/6.jpg",
    author: "Alex Carter",
    job: "Data Scientist",
    review:
      "Alex's data analysis skills are outstanding. He provided valuable insights that significantly improved our decision-making process.",
  },
  {
    img: "Imgs/7.jpg",
    author: "Chris Miller",
    job: "Customer Support Specialist",
    review:
      "Chris went above and beyond to assist our customers. His dedication and excellent communication skills set a high standard for customer support.",
  },
  {
    img: "Imgs/8.jpg",
    author: "Eva Martinez",
    job: "Project Manager",
    review:
      "Eva is a phenomenal project manager. She kept everything organized, met deadlines, and ensured the project's success. Highly impressed!",
  },
  {
    img: "Imgs/9.jpg",
    author: "Ryan Turner",
    job: "IT Consultant",
    review:
      "Ryan's IT solutions saved us time and money. His expertise and quick problem-solving skills are commendable. We're grateful for his support.",
  },
];

let img = document.getElementById("person-img");
let author = document.getElementById("author");
let job = document.getElementById("job");
let info = document.getElementById("info");

let prevBtn = document.querySelector(".prev-btn");
let nextBtn = document.querySelector(".next-btn");
let randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
  let item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.author;
  job.textContent = item.job;
  info.textContent = item.review;
});

showPerson = (person) => {
  let item = reviews[person];
  img.src = item.img;
  author.textContent = item.author;
  job.textContent = item.job;
  info.textContent = item.review;
};

nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
prevBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
randomBtn.addEventListener("click", () => {
  console.log("Hello");
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
