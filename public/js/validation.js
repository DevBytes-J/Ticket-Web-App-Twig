const Validation = {
  validateAuthForm() {
    const email = document.getElementById("email")?.value || "";
    const password = document.getElementById("password")?.value || "";
    const name = document.getElementById("name")?.value || "";

    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const nameError = document.getElementById("name-error");

    let isValid = true;

    if (!email) {
      if (emailError) emailError.textContent = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      if (emailError) emailError.textContent = "Email is invalid";
      isValid = false;
    } else {
      if (emailError) emailError.textContent = "";
    }

    if (!password) {
      if (passwordError) passwordError.textContent = "Password is required";
      isValid = false;
    } else if (password.length < 6) {
      if (passwordError)
        passwordError.textContent = "Password must be at least 6 characters";
      isValid = false;
    } else {
      if (passwordError) passwordError.textContent = "";
    }

    if (AppState.authMode === "register" && !name) {
      if (nameError) nameError.textContent = "Name is required";
      isValid = false;
    } else {
      if (nameError) nameError.textContent = "";
    }

    return isValid;
  },

  validateTicketForm() {
    const title = document.getElementById("ticket-title")?.value || "";
    const status = document.getElementById("ticket-status")?.value || "";
    const description =
      document.getElementById("ticket-description")?.value || "";

    const titleError = document.getElementById("title-error");
    const statusError = document.getElementById("status-error");
    const descError = document.getElementById("description-error");

    let isValid = true;

    if (!title || title.trim() === "") {
      if (titleError) titleError.textContent = "Title is required";
      isValid = false;
    } else {
      if (titleError) titleError.textContent = "";
    }

    if (!status) {
      if (statusError) statusError.textContent = "Status is required";
      isValid = false;
    } else if (!["open", "in_progress", "closed"].includes(status)) {
      if (statusError)
        statusError.textContent = "Status must be open, in_progress, or closed";
      isValid = false;
    } else {
      if (statusError) statusError.textContent = "";
    }

    if (description && description.length > 500) {
      if (descError)
        descError.textContent = "Description must be less than 500 characters";
      isValid = false;
    } else {
      if (descError) descError.textContent = "";
    }

    return isValid;
  },
};
