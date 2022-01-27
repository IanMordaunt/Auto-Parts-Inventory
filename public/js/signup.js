const signupFormHandler = async (event) => {
  event.preventDefault();

  const user_name = document.querySelector("#name-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (user_name && email && password) {
    const response = await fetch("/signup", {
      method: "POST",
      body: JSON.stringify({ user_name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/parts");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .getElementById("signup-form")
  .addEventListener("submit", signupFormHandler);
