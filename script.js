let hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("open");
  overlay.classList.toggle("show");
  document.body.classList.toggle("stop-scrolling");
  mobileMenu.classList.toggle("mobile-show");
});

// Scrolling Check
document.addEventListener("scroll", scrollUp);
let isScrollStarted = false;
function scrollUp() {
  const scroll = window.scrollY;
  if (scroll > 100 && !isScrollStarted) {
    counterFun();
    isScrollStarted = true;
  } else if (scroll < 100 && isScrollStarted) {
    reset();
    isScrollStarted = false;
  }
}

let counter = document.querySelectorAll(".counter");
function counterFun() {
  counter.forEach((element) => {
    element.innerText = "0";
    const updateCounter = () => {
      let datatarget = +element.getAttribute("data-target");
      // Get current counter value  // here + for converting string to number
      const curr = +element.innerText;
      // create increment
      let increment = datatarget / 100;
      // console.log(increment);

      if (curr < datatarget) {
        // /Round up and set the counter values
        element.innerText = `${Math.ceil(curr + increment)}`;

        setTimeout(updateCounter, 75);
      } else {
        element.innerText = datatarget;
      }
    };
    updateCounter();
  });
}

function reset() {
  counter.forEach((counter) => (counter.innerText = "0"));
}
