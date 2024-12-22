const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed2", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("cookieBannerDisplayed2")) {
    cookieContainer.classList.add("active");
  }
}, 2000);
