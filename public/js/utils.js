const Utils = {
  getPriorityColor(priority) {
    const colors = {
      low: "bg-blue-100 text-blue-800",
      medium: "bg-yellow-100 text-yellow-800",
      high: "bg-red-100 text-red-800",
    };
    return colors[priority] || colors.medium;
  },

  getStatusColor(status) {
    const colors = {
      open: "bg-green-100 text-green-800",
      in_progress: "bg-amber-100 text-amber-800",
      closed: "bg-gray-100 text-gray-800",
    };
    return colors[status] || colors.open;
  },

  getStats() {
    return {
      total: AppState.tickets.length,
      open: AppState.tickets.filter((t) => t.status === "open").length,
      inProgress: AppState.tickets.filter((t) => t.status === "in_progress")
        .length,
      closed: AppState.tickets.filter((t) => t.status === "closed").length,
    };
  },

  showToast(message, type = "success") {
    AppState.toast = { show: true, message, type };
    render();
    setTimeout(() => {
      AppState.toast = { show: false, message: "", type: "" };
      render();
    }, 4000);
  },
};
