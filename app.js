// we are adding a global event to our page on clicking the any button we are doing this

function playSound(event) {
  //   console.log(event.keyCode);
  const audio = document.querySelector(`.soundBar${event.keyCode}`);

  let key = document.querySelector(`.key[data-key = "${event.keyCode}`);
  //   console.log(key);

  // if audio not present at that key you just press it will return nothing
  if (!audio) return;

  // if audio already in play then make it's currentTime to 0 to play again and again
  audio.currentTime = 0;
  // otherwise we can play it
  audio.play();

  // make animation
  key.classList.add("playing");
  //   setTimeout(() => {
  //     key.classList.remove("playing");
  //   }, 70);
  // instead of using settimeout we are removing the transition using class name
}

function removeTransition(e) {
  if (e.propertyName != "transform") return; // skip if not transform

  //   console.log(e.propertyName)
  this.classList.remove("playing"); // this => key bcz it is call for key
}

// getting all the keys
const keys = document.querySelectorAll(".key");

keys.forEach((key) => {
  // transitionend it as an event triggered as soon as over transition ends
  key.addEventListener("transitionend", removeTransition);
});

window.addEventListener("keydown", playSound);
