const square = document.querySelector(".square");
const btnBlock = document.querySelector(".button-block");
const start = document.querySelector(".start");
const reset = document.querySelector(".reset");
let count = 0;
let active = false;
let animateId;

console.dir(square);

const animate = () => {
  count++;

  animateId = requestAnimationFrame(animate);

  if (square.style.left.slice(0, -2) < document.body.clientWidth - 100) {
    square.style.left = count * 5 + "px";
  } else {
    count = 0;
    square.style.left = 0;
  }
};

btnBlock.addEventListener("click", (e) => {
  if (e.target === start) {
    if (active) {
      cancelAnimationFrame(animateId);
      active = !active;
    } else {
      animate();
      active = !active;
    }
  } else if (e.target === reset) {
    cancelAnimationFrame(animateId);
    square.style.left = "";
    count = 0;
  }
});
