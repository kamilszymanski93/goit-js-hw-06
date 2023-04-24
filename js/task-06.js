const textInput = document.querySelector("#validation-input");
textInput.getAttribute("data-length");
textInput.addEventListener("blur", (event) => {
  if (event.target.value.length == textInput.getAttribute("data-length")) {
    textInput.classList.remove(...textInput.classList);
    textInput.classList.add("valid");
  } else {
    textInput.classList.remove(...textInput.classList);
    textInput.classList.add("invalid");
  }
});
