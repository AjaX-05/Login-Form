document.addEventListener("DOMContentLoaded", () => {
  const emoji = document.querySelector("h3");
  const email = document.querySelector("input[type=email]");
  const password = document.querySelector("input[type=password]");

  email.addEventListener("keyup", () => {
    if (!email.value) {
      emoji.innerText = "🐒";
    }
    if (email.value.includes("@")) {
      emoji.innerText = "🙊";
    } else {
      emoji.innerText = "🐵";
    }
  });

  password.addEventListener("focus", () => {
    if (!password.value) {
      emoji.innerText = "🙄";
      return;
    }
  });

  password.addEventListener("keyup", () => {
    if (password.value) {
      emoji.innerText = "🙈";
      return;
    }
  });

  document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    emoji.innerText = "🎉 Sucess";
  });
});
