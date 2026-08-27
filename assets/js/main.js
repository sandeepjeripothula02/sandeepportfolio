document.addEventListener("DOMContentLoaded", () => {
  renderStats();
  renderSkills();
  renderServices();
  renderPortfolio();
  renderReviews();
  renderProcess();
  initNav();
  initFilters();
  initSlider();
  initContactForm();
});

/* ═══ Stats ═══ */
function renderStats() {
  const c = document.getElementById("stats-grid");
  if (!c) return;
  c.innerHTML = PORTFOLIO_DATA.profile.stats.map(s => `
    <div class="text-center p-5">
      <div class="text-3xl sm:text-4xl font-bold text-white">${s.value}</div>
      <div class="text-sm text-blue-100 mt-1 font-medium">${s.label}</div>
    </div>
  `).join("");
}

/* ═══ Skills ═══ */
function renderSkills() {
  const c = document.getElementById("skills-grid");
  if (!c) return;
  c.innerHTML = PORTFOLIO_DATA.skills.map(s => `
    <div class="card p-6 group">
      <div class="flex items-center gap-4 mb-4">
        <div class="w-14 h-14 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg group-hover:scale-110 transition-transform" style="background:${s.color}">
          ${s.short}
        </div>
        <div>
          <h3 class="font-bold text-gray-900">${s.name}</h3>
          <p class="text-sm text-gray-500">${s.level}% Proficiency</p>
        </div>
      </div>
      <div class="w-full bg-gray-100 rounded-full h-2.5">
        <div class="h-2.5 rounded-full transition-all duration-700" style="width:${s.level}%; background:${s.color}"></div>
      </div>
    </div>
  `).join("");
}

/* ═══ Services ═══ */
function renderServices() {
  const c = document.getElementById("services-grid");
  if (!c) return;
  c.innerHTML = PORTFOLIO_DATA.services.map(s => `
    <div class="card p-6 group cursor-pointer" onclick="openInquiry('${s.title}')">
      <div class="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center text-white text-lg mb-4 group-hover:scale-110 transition-transform shadow-md">
        <i class="fa-solid ${s.icon}"></i>
      </div>
      <h3 class="font-bold text-gray-900 mb-2 group-hover:text-[#015178] transition-colors">${s.title}</h3>
      <p class="text-sm text-gray-500 leading-relaxed">${s.desc}</p>
      <div class="mt-4 pt-3 border-t border-gray-100 flex items-center text-xs font-semibold text-[#015178] opacity-0 group-hover:opacity-100 transition-opacity">
        <span>Inquire Now</span>
        <i class="fa-solid fa-arrow-right ml-2 text-[10px]"></i>
      </div>
    </div>
  `).join("");
}

/* ═══ Portfolio ═══ */
let currentFilter = "all";

function renderPortfolio(filter) {
  filter = filter || currentFilter;
  const c = document.getElementById("portfolio-grid");
  if (!c) return;
  const items = filter === "all" ? PORTFOLIO_DATA.portfolio : PORTFOLIO_DATA.portfolio.filter(p => p.category === filter);

  c.innerHTML = items.map(p => `
    <div class="portfolio-card group cursor-pointer" onclick="openProject('${p.id}')">
      <div class="relative overflow-hidden h-56 sm:h-64">
        <img src="${p.image}" alt="${p.title}" class="portfolio-img w-full h-full object-cover" loading="lazy" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        <div class="portfolio-overlay absolute inset-0 bg-[#015178]/70 backdrop-blur-sm flex items-center justify-center">
          <div class="w-14 h-14 rounded-full bg-white text-[#015178] flex items-center justify-center text-xl shadow-2xl transform scale-75 group-hover:scale-100 transition-transform">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </div>
        </div>
        <div class="absolute top-3 left-3">
          <span class="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-[#015178] shadow-sm">${p.category}</span>
        </div>
      </div>
      <div class="p-5">
        <p class="text-xs text-[#E0AB47] font-semibold mb-1">${p.client} · ${p.year}</p>
        <h3 class="font-bold text-gray-900 group-hover:text-[#015178] transition-colors">${p.title}</h3>
      </div>
    </div>
  `).join("");
}

function initFilters() {
  renderPortfolio("all");
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      renderPortfolio(currentFilter);
    });
  });
}

/* ═══ Reviews ═══ */
function renderReviews() {
  const c = document.getElementById("reviews-grid");
  if (!c) return;
  c.innerHTML = PORTFOLIO_DATA.reviews.map(r => {
    const stars = Array(5).fill(0).map((_, i) => i < r.rating
      ? '<i class="fa-solid fa-star star"></i>'
      : '<i class="fa-solid fa-star star-empty"></i>'
    ).join("");
    return `
      <div class="review-card p-6">
        <div class="flex items-center gap-1.5 mb-3">${stars}</div>
        <p class="text-sm text-gray-600 leading-relaxed mb-5 italic">"${r.text}"</p>
        <div class="flex items-center gap-3 pt-4 border-t border-gray-100">
          <div class="w-11 h-11 rounded-full gradient-bg flex items-center justify-center text-white text-sm font-bold shadow-md">${r.avatar}</div>
          <div>
            <h4 class="font-semibold text-gray-900 text-sm">${r.name}</h4>
            <p class="text-xs text-gray-500">${r.role}</p>
          </div>
        </div>
      </div>
    `;
  }).join("");

  const s = PORTFOLIO_DATA.overallScore;
  const badge = document.getElementById("score-badge");
  if (badge) {
    badge.innerHTML = `
      <div class="text-6xl sm:text-7xl font-black mb-2">${s.score}</div>
      <div class="text-lg font-semibold mb-1">out of ${s.total}</div>
      <div class="flex items-center justify-center gap-1 mb-3 text-xl">
        ${'<i class="fa-solid fa-star text-yellow-300"></i>'.repeat(5)}
      </div>
      <div class="text-sm font-medium opacity-90">${s.label}</div>
      <div class="text-xs opacity-70 mt-1">Based on ${s.reviewCount} client reviews</div>
    `;
  }
}

/* ═══ Process ═══ */
function renderProcess() {
  const c = document.getElementById("process-grid");
  if (!c) return;
  c.innerHTML = PORTFOLIO_DATA.process.map(p => `
    <div class="card p-6 group text-center">
      <div class="w-14 h-14 rounded-xl gradient-bg text-white flex items-center justify-center text-xl mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md">
        <i class="fa-solid ${p.icon}"></i>
      </div>
      <span class="text-xs font-bold text-[#E0AB47] tracking-wider">STEP ${p.step}</span>
      <h3 class="text-lg font-bold text-gray-900 mt-1 mb-2 group-hover:text-[#015178] transition-colors">${p.title}</h3>
      <p class="text-sm text-gray-500">${p.desc}</p>
    </div>
  `).join("");
}

/* ═══ Navigation ═══ */
function initNav() {
  const nav = document.getElementById("navbar");
  const toggle = document.getElementById("menu-toggle");
  const drawer = document.getElementById("menu-drawer");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) nav.classList.add("nav-fixed");
    else nav.classList.remove("nav-fixed");
  });

  if (toggle && drawer) {
    toggle.addEventListener("click", () => drawer.classList.toggle("hidden"));
    drawer.querySelectorAll("a").forEach(a => a.addEventListener("click", () => drawer.classList.add("hidden")));
  }
}

/* ═══ Before/After Slider ═══ */
function initSlider() {
  const box = document.getElementById("ba-slider");
  if (!box) return;
  const handle = box.querySelector(".comparison-handle");
  const before = box.querySelector(".comparison-before");
  let dragging = false;

  function set(x) {
    const r = box.getBoundingClientRect();
    let p = Math.max(0, Math.min(x - r.left, r.width));
    const pct = (p / r.width) * 100;
    handle.style.left = pct + "%";
    before.style.width = pct + "%";
  }

  box.addEventListener("mousedown", e => { dragging = true; set(e.clientX); });
  window.addEventListener("mousemove", e => { if (dragging) set(e.clientX); });
  window.addEventListener("mouseup", () => dragging = false);
  box.addEventListener("touchstart", e => { dragging = true; set(e.touches[0].clientX); });
  window.addEventListener("touchmove", e => { if (dragging) set(e.touches[0].clientX); });
  window.addEventListener("touchend", () => dragging = false);

  setTimeout(() => set(box.getBoundingClientRect().left + box.offsetWidth / 2), 300);
}

/* ═══ Contact Form ═══ */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", e => { e.preventDefault(); sendEmail(); });
}

window.sendEmail = function() {
  const n = document.getElementById("f-name")?.value.trim() || "";
  const e = document.getElementById("f-email")?.value.trim() || "";
  const s = document.getElementById("f-service")?.value || "";
  const m = document.getElementById("f-message")?.value.trim() || "";
  if (!n || !m) return toast("Please enter your name and project details.", "error");

  const subj = encodeURIComponent("Project Inquiry: " + s + " — " + n);
  const body = encodeURIComponent("Hello Sandeep,\n\nName: " + n + "\nEmail: " + e + "\nService: " + s + "\n\nProject Details:\n" + m + "\n\nLooking forward to working with you!");
  window.location.href = "mailto:sandeepjeripothula8@gmail.com?subject=" + subj + "&body=" + body;
  toast("Opening your email client...", "success");
};

window.sendWhatsApp = function() {
  const n = document.getElementById("f-name")?.value.trim() || "Client";
  const s = document.getElementById("f-service")?.value || "";
  const m = document.getElementById("f-message")?.value.trim() || "I want to discuss a project!";
  const t = encodeURIComponent("*Project Inquiry*\n\nName: " + n + "\nService: " + s + "\n\nDetails: " + m);
  window.open("https://wa.me/919545382894?text=" + t, "_blank");
  toast("Opening WhatsApp...", "success");
};

window.openInquiry = function(svc) {
  const m = document.getElementById("inquiry-modal");
  if (m) { m.classList.remove("hidden"); m.classList.add("flex"); document.body.style.overflow = "hidden"; }
  const sel = document.getElementById("iq-service");
  if (sel && svc) sel.value = svc;
};

window.closeInquiry = function() {
  const m = document.getElementById("inquiry-modal");
  if (m) { m.classList.add("hidden"); m.classList.remove("flex"); document.body.style.overflow = "auto"; }
};

window.openProject = function(id) {
  const p = PORTFOLIO_DATA.portfolio.find(x => x.id === id);
  if (!p) return;
  const m = document.getElementById("project-modal");
  document.getElementById("pm-title").textContent = p.title;
  document.getElementById("pm-cat").textContent = p.category;
  document.getElementById("pm-client").textContent = p.client + " · " + p.year;
  document.getElementById("pm-img").src = p.image;
  m.classList.remove("hidden"); m.classList.add("flex");
  document.body.style.overflow = "hidden";
};

window.closeProject = function() {
  const m = document.getElementById("project-modal");
  m.classList.add("hidden"); m.classList.remove("flex");
  document.body.style.overflow = "auto";
};

window.copyEmail = function() {
  navigator.clipboard.writeText("sandeepjeripothula8@gmail.com").then(() => toast("Email copied!", "success")).catch(() => toast("sandeepjeripothula8@gmail.com", "info"));
};

window.copyPhone = function() {
  navigator.clipboard.writeText("9545382894").then(() => toast("Phone copied!", "success")).catch(() => toast("9545382894", "info"));
};

function toast(msg, type) {
  let t = document.getElementById("toast-el");
  if (!t) { t = document.createElement("div"); t.id = "toast-el"; t.className = "fixed bottom-20 sm:bottom-6 right-6 z-50 px-5 py-3 rounded-xl shadow-2xl text-sm font-semibold flex items-center gap-2 transition-all duration-300 opacity-0 translate-y-4 pointer-events-none"; document.body.appendChild(t); }
  t.style.background = type === "error" ? "#fee2e2" : type === "success" ? "#ecfdf5" : "#eff6ff";
  t.style.color = type === "error" ? "#991b1b" : type === "success" ? "#065f46" : "#1e40af";
  t.style.border = "1px solid " + (type === "error" ? "#fecaca" : type === "success" ? "#a7f3d0" : "#bfdbfe");
  const icon = type === "success" ? "fa-circle-check" : type === "error" ? "fa-circle-exclamation" : "fa-circle-info";
  t.innerHTML = '<i class="fa-solid ' + icon + '"></i><span>' + msg + "</span>";
  t.classList.remove("opacity-0", "translate-y-4", "pointer-events-none");
  t.classList.add("opacity-100", "translate-y-0");
  setTimeout(() => { t.classList.add("opacity-0", "translate-y-4", "pointer-events-none"); t.classList.remove("opacity-100", "translate-y-0"); }, 3500);
}

window.addEventListener("keydown", e => {
  if (e.key === "Escape") { closeInquiry(); closeProject(); }
});