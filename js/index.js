const body = document.body
const themeIcon = document.querySelector(".fa-sun")

// Toggle theme depending on user preference and with icon

themeIcon.addEventListener("click", () => {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    body.classList.toggle("lightmode")
    console.log("I am darkmode")
  }else {
    body.classList.toggle("darkmode")
  }  
})