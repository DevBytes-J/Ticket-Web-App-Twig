const Auth = {
  async handleLogin() {
    if (!Validation.validateAuthForm()) {
      Utils.showToast("Please fix the errors in the form", "error");
      return;
    }

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const name = document.getElementById("name")?.value;

    const newUser = { email, name: name || email.split("@")[0] };
    AppState.user = newUser;
    await Storage.setSession(newUser);
    AppState.currentPage = "dashboard";
    Utils.showToast(`Welcome ${newUser.name}!`, "success");
    render();
  },

  async handleLogout() {
    AppState.user = null;
    await Storage.clearSession();
    AppState.currentPage = "landing";
    Utils.showToast("Logged out successfully", "success");
    render();
  },

  toggleAuthMode() {
    AppState.authMode = AppState.authMode === "login" ? "register" : "login";
    render();
  },
};
