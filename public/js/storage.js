const Storage = {
  async getSession() {
    try {
      const raw = window.localStorage.getItem("session");
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      console.error("getSession error", e);
      return null;
    }
  },

  async setSession(user) {
    try {
      if (user == null) {
        window.localStorage.removeItem("session");
      } else {
        window.localStorage.setItem("session", JSON.stringify(user));
      }
      return true;
    } catch (e) {
      console.error("setSession error", e);
      return false;
    }
  },

  async clearSession() {
    try {
      window.localStorage.removeItem("session");
      return true;
    } catch (e) {
      console.error("clearSession error", e);
      return false;
    }
  },

  async getTickets() {
    try {
      const raw = window.localStorage.getItem("tickets");
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      console.error("getTickets error", e);
      return [];
    }
  },

  async setTickets(tickets) {
    try {
      window.localStorage.setItem("tickets", JSON.stringify(tickets || []));
      return true;
    } catch (e) {
      console.error("setTickets error", e);
      return false;
    }
  },
};

// expose for non-module usage
window.Storage = Storage;
