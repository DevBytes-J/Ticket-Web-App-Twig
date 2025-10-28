// Footer Component Template
const FooterTemplate = () => `
  <footer class="bg-gray-800 text-white py-12 px-4 mt-auto">
    <div class="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
      <div>
        <h4 class="text-xl font-bold mb-4 text-primary">SwiftPass</h4>
        <p class="text-sm text-gray-400">© 2025 SwiftPass, Inc. All rights reserved.</p>
      </div>

      <div>
        <h4 class="font-semibold mb-4 border-b border-primary/50 pb-1">Quick Links</h4>
        <ul class="space-y-2 text-sm text-gray-300">
          <li>
            <button onclick="AppState.currentPage = 'landing'; render();" class="hover:text-primary transition">
              Home
            </button>
          </li>
          <li>
            <a href="#" class="hover:text-primary transition">About Us</a>
          </li>
          <li>
            <a href="#" class="hover:text-primary transition">Event Guide</a>
          </li>
        </ul>
      </div>

      <div>
        <h4 class="font-semibold mb-4 border-b border-primary/50 pb-1">Support</h4>
        <ul class="space-y-2 text-sm text-gray-300">
          <li><a href="#" class="hover:text-primary transition">FAQ</a></li>
          <li><a href="#" class="hover:text-primary transition">Ticket Guarantee</a></li>
          <li><a href="#" class="hover:text-primary transition">Contact Support</a></li>
        </ul>
      </div>

    </div>
  </footer>
`;
// Toast Notification Template
const ToastTemplate = () => {
  if (!AppState.toast.show) return "";
  return `
    <div class="fixed top-4 right-4 z-50 px-6 py-4 rounded-lg shadow-lg ${
      AppState.toast.type === "success" ? "bg-green-500" : "bg-red-500"
    } text-white flex items-center gap-3">
      <i data-lucide="${
        AppState.toast.type === "success" ? "check-circle" : "alert-circle"
      }" class="w-5 h-5"></i>
      <span>${AppState.toast.message}</span>
    </div>
  `;
};

// Landing Page Template
const LandingPageTemplate = () => `
  <div class="min-h-screen flex flex-col">
    <!-- Hero Section -->
    <div class="relative bg-gradient-to-tr from-[#020024] via-[#2c0979] to-[#00d4ff] overflow-hidden">
      <div class="absolute top-10 right-10 w-64 h-64 bg-white opacity-10 rounded-full"></div>
      <div class="absolute bottom-20 left-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>
      
      <div class="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div class="text-center text-white mb-16">
          <i data-lucide="ticket" class="w-20 h-20 mx-auto mb-6"></i>
          <h1 class="text-6xl font-bold mb-4">SwiftPass</h1>
          <p class="text-2xl mb-8">  The ultimate platform for streamlined support, tracking, and issue
          resolution.</p>
          <div class="flex gap-4 justify-center flex-wrap">
            <button onclick="AppState.currentPage = 'auth'; render();" class="bg-white text-indigo-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-lg">
              Login
            </button>
            <button onclick="AppState.currentPage = 'auth'; render();" class="bg-indigo-800 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-900 transition shadow-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <svg class="absolute bottom-0 w-full" viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
        <path fill="#ffffff" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
      </svg>
    </div>

    <!-- Features Section -->
    <div class="max-w-7xl mx-auto px-4 py-16">
      <h2 class="text-4xl font-bold text-gray-800 mb-12 text-center">Why Choose SwiftPass?</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div class="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
            <i data-lucide="check-circle" class="w-8 h-8 text-green-600"></i>
          </div>
          <h3 class="font-bold text-2xl mb-3">Easy Management</h3>
          <p class="text-gray-600">Create, edit, and track tickets effortlessly with our intuitive interface</p>
        </div>
        <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div class="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
            <i data-lucide="ticket" class="w-8 h-8 text-amber-600"></i>
          </div>
          <h3 class="font-bold text-2xl mb-3">Priority System</h3>
          <p class="text-gray-600">Organize tickets by priority and status for maximum efficiency</p>
        </div>
        <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div class="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
            <i data-lucide="alert-circle" class="w-8 h-8 text-indigo-600"></i>
          </div>
          <h3 class="font-bold text-2xl mb-3">Real-time Updates</h3>
          <p class="text-gray-600">Stay informed with instant notifications and status changes</p>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="relative py-16 bg-gray-50">
      <div class="absolute top-10 right-20 w-32 h-32 bg-indigo-200 opacity-30 rounded-full"></div>
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">Ready to Get Started?</h2>
        <p class="text-gray-600 mb-8 text-lg">Join thousands of teams managing their tickets efficiently</p>
        <button onclick="AppState.currentPage = 'auth'; render();" class="bg-indigo-600 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition shadow-lg">
          Start Free Trial
        </button>
      </div>
    </div>

    ${FooterTemplate()}
    ${ToastTemplate()}
  </div>
`;

// Auth Page Template
const AuthPageTemplate = () => `
  <div class="min-h-screen flex flex-col bg-gray-50">
    <div class="flex-1 flex items-center justify-center px-4 py-12">
      <div class="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div class="text-center mb-8">
          <i data-lucide="ticket" class="w-16 h-16 mx-auto mb-4 text-indigo-600"></i>
          <h2 class="text-3xl font-bold text-gray-800">${
            AppState.authMode === "login" ? "Welcome Back" : "Create Account"
          }</h2>
        </div>
        <div>
          ${
            AppState.authMode === "register"
              ? `
            <div class="mb-4">
              <label class="block text-gray-700 font-semibold mb-2">Name</label>
              <input id="name" type="text" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your name">
              <p id="name-error" class="text-red-500 text-sm mt-1"></p>
            </div>
          `
              : ""
          }
          <div class="mb-4">
            <label class="block text-gray-700 font-semibold mb-2">Email</label>
            <input id="email" type="email" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="your@email.com">
            <p id="email-error" class="text-red-500 text-sm mt-1"></p>
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 font-semibold mb-2">Password</label>
            <input id="password" type="password" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="••••••••">
            <p id="password-error" class="text-red-500 text-sm mt-1"></p>
          </div>
          <button onclick="Auth.handleLogin()" class="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
            ${AppState.authMode === "login" ? "Sign In" : "Sign Up"}
          </button>
        </div>
        <div class="mt-6 text-center">
          <button onclick="Auth.toggleAuthMode()" class="text-indigo-600 hover:text-indigo-800 font-semibold">
            ${
              AppState.authMode === "login"
                ? "Need an account? Sign up"
                : "Already have an account? Sign in"
            }
          </button>
        </div>
        <div class="mt-4 text-center">
          <button onclick="AppState.currentPage = 'landing'; render();" class="text-gray-600 hover:text-gray-800 flex items-center gap-2 mx-auto">
            <i data-lucide="home" class="w-4 h-4"></i>
            Back to home
          </button>
        </div>
      </div>
    </div>
    ${FooterTemplate()}
    ${ToastTemplate()}
  </div>
`;

// Dashboard Page Template
const DashboardPageTemplate = () => {
  const stats = Utils.getStats();
  return `
    <div class="min-h-screen flex flex-col bg-gray-50">
      <nav class="bg-white shadow-sm border-b">
        <div class="max-w-7xl mx-auto px-4 py-4 flex flex-wrap justify-between items-center gap-4">
          <div class="flex items-center">
            <i data-lucide="ticket" class="w-8 h-8 text-indigo-600 mr-3"></i>
            <span class="text-2xl font-bold text-gray-800">TicketFlow</span>
          </div>
          <div class="flex items-center gap-4 flex-wrap">
            <button onclick="requireAuth('tickets')" class="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition">
              <i data-lucide="layout-dashboard" class="w-5 h-5"></i>
              Tickets
            </button>
            <span class="text-gray-700">Hello, ${AppState.user?.name}</span>
            <button onclick="Auth.handleLogout()" class="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition">
              <i data-lucide="log-out" class="w-5 h-5"></i>
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div class="flex-1 max-w-7xl mx-auto px-4 py-8 w-full">
        <div class="mb-8">
          <h1 class="text-4xl font-bold text-gray-800 mb-2">Dashboard</h1>
          <p class="text-gray-600">Overview of your ticket management system</p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div class="text-gray-600 mb-2 font-semibold">Total Tickets</div>
            <div class="text-4xl font-bold text-gray-800">${stats.total}</div>
          </div>
          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div class="text-gray-600 mb-2 font-semibold">Open</div>
            <div class="text-4xl font-bold text-green-600">${stats.open}</div>
          </div>
          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div class="text-gray-600 mb-2 font-semibold">In Progress</div>
            <div class="text-4xl font-bold text-amber-600">${
              stats.inProgress
            }</div>
          </div>
          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div class="text-gray-600 mb-2 font-semibold">Closed</div>
            <div class="text-4xl font-bold text-gray-600">${stats.closed}</div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-lg border border-gray-100 p-8 text-center">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">Quick Actions</h2>
          <button onclick="requireAuth('tickets')" class="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition inline-flex items-center gap-2">
            <i data-lucide="layout-dashboard" class="w-5 h-5"></i>
            Manage Tickets
          </button>
        </div>
      </div>

      ${FooterTemplate()}
      ${ToastTemplate()}
    </div>
  `;
};

// Tickets Page Template
const TicketsPageTemplate = () => `
  <div class="min-h-screen flex flex-col bg-gray-50">
    <nav class="bg-white shadow-sm border-b">
      <div class="max-w-7xl mx-auto px-4 py-4 flex flex-wrap justify-between items-center gap-4">
        <div class="flex items-center">
          <i data-lucide="ticket" class="w-8 h-8 text-indigo-600 mr-3"></i>
          <span class="text-2xl font-bold text-gray-800">TicketFlow</span>
        </div>
        <div class="flex items-center gap-4 flex-wrap">
          <button onclick="requireAuth('dashboard')" class="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition">
            <i data-lucide="home" class="w-5 h-5"></i>
            Dashboard
          </button>
          <span class="text-gray-700">Hello, ${AppState.user?.name}</span>
          <button onclick="Auth.handleLogout()" class="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition">
            <i data-lucide="log-out" class="w-5 h-5"></i>
            Logout
          </button>
        </div>
      </div>
    </nav>

    <div class="flex-1 max-w-7xl mx-auto px-4 py-8 w-full">
      <div class="bg-white rounded-xl shadow-lg border border-gray-100">
        <div class="p-6 border-b flex flex-wrap justify-between items-center gap-4">
          <h2 class="text-2xl font-bold text-gray-800">All Tickets</h2>
          <button onclick="Tickets.openModal()" class="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
            <i data-lucide="plus" class="w-5 h-5"></i>
            New Ticket
          </button>
        </div>
        <div class="p-6">
          ${
            AppState.tickets.length === 0
              ? `
            <div class="text-center py-12 text-gray-500">
              <i data-lucide="ticket" class="w-16 h-16 mx-auto mb-4 opacity-50"></i>
              <p class="text-xl">No tickets yet. Create your first ticket!</p>
            </div>
          `
              : `
            <div class="grid gap-4">
              ${AppState.tickets
                .map(
                  (ticket) => `
                <div class="border-2 border-gray-200 rounded-xl p-6 hover:shadow-md transition bg-white">
                  <div class="flex justify-between items-start mb-3 flex-wrap gap-2">
                    <h3 class="text-xl font-bold text-gray-800">${
                      ticket.title
                    }</h3>
                    <div class="flex gap-2">
                      <button onclick="Tickets.openModal('${
                        ticket.id
                      }')" class="text-indigo-600 hover:text-indigo-800 p-2 hover:bg-indigo-50 rounded-lg transition">
                        <i data-lucide="edit-2" class="w-5 h-5"></i>
                      </button>
                      <button onclick="Tickets.confirmDelete('${
                        ticket.id
                      }')" class="text-red-600 hover:text-red-800 p-2 hover:bg-red-50 rounded-lg transition">
                        <i data-lucide="trash-2" class="w-5 h-5"></i>
                      </button>
                    </div>
                  </div>
                  ${
                    ticket.description
                      ? `<p class="text-gray-600 mb-4">${ticket.description}</p>`
                      : ""
                  }
                  <div class="flex gap-2 flex-wrap">
                    <span class="${Utils.getPriorityColor(
                      ticket.priority
                    )} px-4 py-2 rounded-full text-sm font-bold">
                      ${ticket.priority}
                    </span>
                    <span class="${Utils.getStatusColor(
                      ticket.status
                    )} px-4 py-2 rounded-full text-sm font-bold">
                      ${ticket.status.replace("_", " ")}
                    </span>
                  </div>
                </div>
              `
                )
                .join("")}
            </div>
          `
          }
        </div>
      </div>
    </div>

    ${FooterTemplate()}

    ${
      AppState.showModal
        ? `
      <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div class="bg-white rounded-xl shadow-2xl w-full max-w-md">
          <div class="p-6 border-b flex justify-between items-center">
            <h3 class="text-2xl font-bold text-gray-800">${
              AppState.editingTicket ? "Edit Ticket" : "New Ticket"
            }</h3>
            <button onclick="Tickets.closeModal()" class="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-lg">
              <i data-lucide="x" class="w-6 h-6"></i>
            </button>
          </div>
          <div class="p-6">
            <div class="mb-4">
              <label class="block text-gray-700 font-semibold mb-2">Title *</label>
              <input id="ticket-title" type="text" value="${
                AppState.editingTicket?.title || ""
              }" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter ticket title">
              <p id="title-error" class="text-red-500 text-sm mt-1"></p>
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 font-semibold mb-2">Description</label>
              <textarea id="ticket-description" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" rows="4" placeholder="Enter ticket description">${
                AppState.editingTicket?.description || ""
              }</textarea>
              <p id="description-error" class="text-red-500 text-sm mt-1"></p>
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 font-semibold mb-2">Priority</label>
              <select id="ticket-priority" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option value="low" ${
                  AppState.editingTicket?.priority === "low" ? "selected" : ""
                }>Low</option>
                <option value="medium" ${
                  !AppState.editingTicket ||
                  AppState.editingTicket?.priority === "medium"
                    ? "selected"
                    : ""
                }>Medium</option>
                <option value="high" ${
                  AppState.editingTicket?.priority === "high" ? "selected" : ""
                }>High</option>
              </select>
            </div>
            <div class="mb-6">
              <label class="block text-gray-700 font-semibold mb-2">Status *</label>
              <select id="ticket-status" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option value="open" ${
                  !AppState.editingTicket ||
                  AppState.editingTicket?.status === "open"
                    ? "selected"
                    : ""
                }>Open</option>
                <option value="in_progress" ${
                  AppState.editingTicket?.status === "in_progress"
                    ? "selected"
                    : ""
                }>In Progress</option>
                <option value="closed" ${
                  AppState.editingTicket?.status === "closed" ? "selected" : ""
                }>Closed</option>
              </select>
              <p id="status-error" class="text-red-500 text-sm mt-1"></p>
            </div>
            <div class="flex gap-3">
              <button onclick="Tickets.handleTicketSubmit()" class="flex-1 bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
                ${AppState.editingTicket ? "Update" : "Create"}
              </button>
              <button onclick="Tickets.closeModal()" class="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    `
        : ""
    }

    ${
      AppState.showDeleteConfirm
        ? `
      <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div class="bg-white rounded-xl shadow-2xl w-full max-w-md p-6">
          <h3 class="text-2xl font-bold text-gray-800 mb-4">Confirm Delete</h3>
          <p class="text-gray-600 mb-6">Are you sure you want to delete this ticket? This action cannot be undone.</p>
          <div class="flex gap-3">
            <button onclick="Tickets.deleteTicket()" class="flex-1 bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition">
              Delete
            </button>
            <button onclick="AppState.showDeleteConfirm = false; render();" class="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition">
              Cancel
            </button>
          </div>
        </div>
      </div>
    `
        : ""
    }

    ${ToastTemplate()}
  </div>
`;

// expose templates to global scope
window.LandingPageTemplate = LandingPageTemplate;
window.AuthPageTemplate = AuthPageTemplate;
window.DashboardPageTemplate = DashboardPageTemplate;
window.TicketsPageTemplate = TicketsPageTemplate;
window.FooterTemplate = FooterTemplate;
window.ToastTemplate = ToastTemplate;
