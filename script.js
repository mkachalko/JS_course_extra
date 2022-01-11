const input = document.querySelector("input");
const text = document.querySelector("p");
let interval;

const textToInput = (e) => {
  clearInterval(interval);

  interval = setTimeout(() => (text.textContent = e.target.value), 300);
};

input.addEventListener("input", textToInput);
