const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");
inputEl.addEventListener("input", (event) => {
  const trimmedValue = inputEl.value.trim();
  outputEl.textContent = trimmedValue === "" ? "Anonymous" : trimmedValue;
});
