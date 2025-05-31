const burger = document.querySelector(".burger");
const nav = document.querySelector(".navlinks");
const navLinks = document.querySelectorAll(".navlinks ul li");
const navBtns = document.querySelectorAll(".navlinks_btns button");

burger.addEventListener("click", showNav);

function showNav() {
  nav.classList.toggle("active");
}

function removeNav() {
  //   nav.classList.toggle("active");

  if (nav.classList.contains("active")) {
    nav.classList.remove("active");
  }
}

navLinks.forEach(function (item) {
  item.addEventListener("click", removeNav);
});

navBtns.forEach(function (item) {
  item.addEventListener("click", removeNav);
});

// Appointment transition
const appointmentBtns = document.querySelectorAll(
  ".appointment .issues_header .btns img"
);

const appointmentCarousel = document.querySelector(".doctors");

const appointmentPrevBtn = appointmentBtns[0];
const appointmentNextBtn = appointmentBtns[1];

let currentAppointment = 0;
const multiplier = 420;

function moveAppointmentCarousel(moveTo) {
  if (moveTo === "left") {
    if (currentAppointment < 3) {
      currentAppointment++;
      appointmentCarousel.style.left =
        "-" +
        (currentAppointment * multiplier + currentAppointment * 20) +
        "px";
      return currentAppointment;
    }
  }
  if (moveTo === "right") {
    if (currentAppointment > 0) {
      currentAppointment--;
      appointmentCarousel.style.left =
        "-" +
        (currentAppointment * multiplier + currentAppointment * 20) +
        "px";
      return currentAppointment;
    }
  }
}

appointmentNextBtn.addEventListener("click", function () {
  moveAppointmentCarousel("left");
});

appointmentPrevBtn.addEventListener("click", function () {
  moveAppointmentCarousel("right");
});

// Blog transition
const blogBtns = document.querySelectorAll(
  ".appointment .issues_header .btns img"
);

const blogCarousel = document.getElementById("blog");

const blogPrevBtn = blogBtns[2];
const blogNextBtn = blogBtns[3];

let currentBlog = 0;
const multiplierb = 420;

function moveBlogCarousel(moveTo) {
  if (moveTo === "left") {
    if (currentBlog < 3) {
      currentBlog++;
      blogCarousel.style.left =
        "-" + (currentBlog * multiplierb + currentBlog * 20) + "px";
      return currentBlog;
    }
  }
  if (moveTo === "right") {
    if (currentBlog > 0) {
      currentBlog--;
      blogCarousel.style.left =
        "-" + (currentBlog * multiplierb + currentBlog * 20) + "px";
      return currentBlog;
    }
  }
}

blogNextBtn.addEventListener("click", function () {
  moveBlogCarousel("left");
});

blogPrevBtn.addEventListener("click", function () {
  moveBlogCarousel("right");
});

// Choose transition
const chooseBtns = document.querySelectorAll(".choose_us .btns img");

const chooseCarousel = document.querySelector(".ish");

const choosePrevBtn = chooseBtns[0];
const chooseNextBtn = chooseBtns[1];

let currentChoose = 0;
const multiplierc = 420;

function moveChooseCarousel(moveTo) {
  if (moveTo === "left") {
    if (currentChoose < 3) {
      currentChoose++;
      chooseCarousel.style.left =
        "-" + (currentChoose * multiplierc + currentChoose * 20) + "px";
      return currentChoose;
    }
  }
  if (moveTo === "right") {
    if (currentChoose > 0) {
      currentChoose--;
      chooseCarousel.style.left =
        "-" + (currentChoose * multiplierc + currentChoose * 20) + "px";
      return currentChoose;
    }
  }
}

chooseNextBtn.addEventListener("click", function () {
  moveChooseCarousel("left");
});

choosePrevBtn.addEventListener("click", function () {
  moveChooseCarousel("right");
});
