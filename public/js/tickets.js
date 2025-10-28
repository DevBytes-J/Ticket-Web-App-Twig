const Tickets = {
  async saveTickets(tickets) {
    AppState.tickets = tickets;
    await Storage.setTickets(tickets);
  },

  async handleTicketSubmit() {
    if (!Validation.validateTicketForm()) {
      Utils.showToast("Please fix the errors in the form", "error");
      return;
    }

    const title = document.getElementById("ticket-title").value;
    const description = document.getElementById("ticket-description").value;
    const priority = document.getElementById("ticket-priority").value;
    const status = document.getElementById("ticket-status").value;

    if (AppState.editingTicket) {
      const updated = AppState.tickets.map((t) =>
        t.id === AppState.editingTicket.id
          ? {
              ...t,
              title,
              description,
              priority,
              status,
              updatedAt: new Date().toISOString(),
            }
          : t
      );
      await this.saveTickets(updated);
      Utils.showToast("Ticket updated successfully", "success");
    } else {
      const newTicket = {
        id: Date.now().toString(),
        title,
        description,
        priority,
        status,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      await this.saveTickets([...AppState.tickets, newTicket]);
      Utils.showToast("Ticket created successfully", "success");
    }

    this.closeModal();
    render();
  },

  confirmDelete(ticketId) {
    AppState.deleteTicketId = ticketId;
    AppState.showDeleteConfirm = true;
    render();
  },

  async deleteTicket() {
    await this.saveTickets(
      AppState.tickets.filter((t) => t.id !== AppState.deleteTicketId)
    );
    AppState.showDeleteConfirm = false;
    AppState.deleteTicketId = null;
    Utils.showToast("Ticket deleted successfully", "success");
    render();
  },

  openModal(ticketId = null) {
    if (ticketId) {
      AppState.editingTicket = AppState.tickets.find((t) => t.id === ticketId);
    } else {
      AppState.editingTicket = null;
    }
    AppState.showModal = true;
    render();
  },

  closeModal() {
    AppState.showModal = false;
    AppState.editingTicket = null;
    render();
  },
};
