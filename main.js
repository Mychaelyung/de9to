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
