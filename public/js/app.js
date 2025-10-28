function requireAuth(page) {
  if (!AppState.user) {
    Utils.showToast("Your session has expired — please log in again.", "error");
    AppState.currentPage = "auth";
    render();
    return false;
  }
  AppState.currentPage = page;
  render();
  return true;
}

async function loadFromStorage() {
  const sessionUser = await Storage.getSession();
  const storedTickets = await Storage.getTickets();
  if (sessionUser) {
    AppState.user = sessionUser;
    AppState.currentPage = "dashboard";
  }
  AppState.tickets = storedTickets;
}

// safer lookup that falls back to a message if template is missing
const PageTemplates = {
  landing:
    window.LandingPageTemplate || (() => "<p>Landing template not loaded</p>"),
  auth: window.AuthPageTemplate || (() => "<p>Auth template not loaded</p>"),
  dashboard:
    window.DashboardPageTemplate ||
    (() => "<p>Dashboard template not loaded</p>"),
  tickets:
    window.TicketsPageTemplate || (() => "<p>Tickets template not loaded</p>"),
};

function render() {
  const container = document.getElementById("app-container");
  if (!container) {
    console.error("No #app-container element found in DOM");
    return;
  }

  console.debug("Rendering page:", AppState.currentPage);
  const tpl = PageTemplates[AppState.currentPage];
  if (typeof tpl !== "function") {
    console.error(
      "Template is not a function for page:",
      AppState.currentPage,
      tpl
    );
    container.innerHTML = `<p>Template for "${AppState.currentPage}" is missing.</p>`;
  } else {
    container.innerHTML = tpl();
  }

  // Safely initialize lucide icons
  if (window.lucide) {
    if (typeof lucide.createIcons === "function") {
      lucide.createIcons();
    } else if (typeof lucide.replace === "function") {
      lucide.replace();
    }
  }
}

// Initialize app
(async function () {
  await loadFromStorage();
  render();
})();
