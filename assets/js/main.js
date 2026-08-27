document.addEventListener("DOMContentLoaded", () => {
  renderStats();
  renderSkills();
  renderSoftware();
  renderServices();
  renderPortfolio();
  initFilters();
  initNav();
  initSearch();
});

function renderStats() {
  const c = document.getElementById("stats-grid");
  if (!c) return;
  c.innerHTML = PORTFOLIO_DATA.profile.stats.map(s => `
    <div class="text-center p-6 border-r border-white/10 last:border-0">
      <div class="text-3xl sm:text-4xl font-extrabold text-white mb-1">${s.value}</div>
      <div class="text-xs font-semibold tracking-wider text-gray-400 uppercase">${s.label}</div>
    </div>
  `).join("");
}

function renderSkills() {
  const c = document.getElementById("skills-grid");
  if (!c) return;
  c.innerHTML = PORTFOLIO_DATA.skills.map(s => `
    <div class="glass-card p-6 flex flex-col items-center text-center group">
      <div class="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xl text-white mb-4 group-hover:bg-white group-hover:text-[#001524] transition-all duration-300 shadow-lg">
        <i class="fa-solid ${s.icon}"></i>
      </div>
      <h3 class="font-bold text-white mb-2 text-lg">${s.name}</h3>
      <p class="text-sm text-gray-400 leading-relaxed">${s.desc}</p>
    </div>
  `).join("");
}

function renderSoftware() {
  const c = document.getElementById("software-grid");
  if (!c) return;
  c.innerHTML = PORTFOLIO_DATA.software.map(s => `
    <div class="glass-card p-6 flex items-start gap-5 group cursor-default">
      <div class="w-14 h-14 shrink-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center text-2xl text-white group-hover:scale-110 transition-transform duration-300">
        <i class="fa-solid ${s.faClass}"></i>
      </div>
      <div>
        <h3 class="font-bold text-white mb-1 text-lg group-hover:text-blue-300 transition-colors">${s.name}</h3>
        <p class="text-sm text-gray-400 leading-relaxed">${s.desc}</p>
      </div>
    </div>
  `).join("");
}

function renderServices() {
  const c = document.getElementById("services-grid");
  if (!c) return;
  c.innerHTML = PORTFOLIO_DATA.services.map(s => `
    <div class="glass-card p-6 group">
      <div class="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-5 group-hover:bg-white/20 transition-all shadow-md">
        <i class="fa-solid ${s.icon}"></i>
      </div>
      <h3 class="font-bold text-white mb-2 text-lg">${s.title}</h3>
      <p class="text-sm text-gray-400 leading-relaxed">${s.desc}</p>
    </div>
  `).join("");
}

let currentFilter = "all";
function renderPortfolio(f) {
  f = f || currentFilter;
  const c = document.getElementById("portfolio-grid");
  if (!c) return;
  const items = f === "all" ? PORTFOLIO_DATA.portfolio : PORTFOLIO_DATA.portfolio.filter(p => p.category === f);
  c.innerHTML = items.map(p => `
    <div class="portfolio-card group cursor-pointer" onclick="openProject('${p.id}')">
      <div class="relative overflow-hidden h-64">
        <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover" loading="lazy"/>
        <div class="absolute inset-0 portfolio-overlay opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div class="absolute top-4 left-4">
          <span class="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 backdrop-blur-md text-white border border-white/20">${p.category}</span>
        </div>
        
        <div class="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <p class="text-xs text-gray-300 mb-1 uppercase tracking-wider">${p.client}</p>
          <h3 class="font-bold text-white text-xl mb-3">${p.title}</h3>
          <span class="text-sm font-semibold text-white flex items-center gap-2">View Project <i class="fa-solid fa-arrow-right text-xs"></i></span>
        </div>
      </div>
    </div>
  `).join("");
}

function initFilters() {
  renderPortfolio("all");
  document.querySelectorAll(".filter-btn").forEach(b => {
    b.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(x => x.classList.remove("active"));
      b.classList.add("active");
      currentFilter = b.dataset.filter;
      renderPortfolio(currentFilter);
    });
  });
}

function initNav() {
  const nav = document.getElementById("navbar");
  const tog = document.getElementById("menu-toggle");
  const dr = document.getElementById("menu-drawer");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) nav.classList.add("nav-fixed", "shadow-2xl");
    else nav.classList.remove("nav-fixed", "shadow-2xl");
  });
  if (tog && dr) {
    tog.addEventListener("click", () => dr.classList.toggle("hidden"));
    dr.querySelectorAll("a").forEach(a => a.addEventListener("click", () => dr.classList.add("hidden")));
  }
}

function initSearch() {
  const input = document.getElementById("search-input");
  if(!input) return;
  input.addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();
    // Basic search simulation
    if(term.length > 2) {
      console.log("Searching for: " + term);
      // In a real app, this would filter DOM elements or open a search modal
    }
  });
}

window.openProject = function(id) {
  const p = PORTFOLIO_DATA.portfolio.find(x => x.id === id);
  if (!p) return;
  // Fallback to simple alert or use a custom modal if needed
  alert("Viewing Project: " + p.title + "\nCategory: " + p.category);
};