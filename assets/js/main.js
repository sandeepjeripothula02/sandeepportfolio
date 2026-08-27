document.addEventListener("DOMContentLoaded", () => {
  renderStats();
  renderAboutStats();
  renderSkills();
  renderSoftware();
  renderServices();
  renderPortfolio();
  renderProcess();
  renderWhyMe();
  initFilters();
  initNav();
  initSearch();
  initScrollAnimations();
});

function renderStats() {
  const c = document.getElementById("hero-stats");
  if (!c) return;
  c.innerHTML = PORTFOLIO_DATA.profile.stats.map(s => `
    <div class="text-left py-2 pr-4 border-r border-white/10 last:border-0 last:pr-0">
      <div class="text-2xl sm:text-3xl font-extrabold text-white mb-0.5">${s.value}</div>
      <div class="text-[10px] sm:text-xs font-semibold tracking-widest text-gray-400 uppercase">${s.label}</div>
    </div>
  `).join("");
}

function renderAboutStats() {
  const c = document.getElementById("experience-stats");
  if (!c) return;
  c.innerHTML = PORTFOLIO_DATA.profile.experienceStats.map(s => `
    <div class="glass-card p-6 text-center reveal">
      <div class="text-4xl font-extrabold text-white mb-2 counter">${s.value}</div>
      <div class="text-xs font-semibold tracking-wider text-gray-400 uppercase">${s.label}</div>
    </div>
  `).join("");
}

function renderSkills() {
  const c = document.getElementById("skills-grid");
  if (!c) return;
  c.innerHTML = PORTFOLIO_DATA.skills.map(s => `
    <div class="glass-card p-8 flex flex-col group reveal">
      <div class="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-xl text-white mb-5 group-hover:bg-white group-hover:text-[#001524] transition-all duration-300">
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
    <div class="glass-card p-6 flex flex-col group cursor-default reveal">
      <div class="flex items-center gap-4 mb-4">
        <div class="w-12 h-12 shrink-0 rounded-lg bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center text-xl text-white group-hover:scale-110 transition-transform duration-300">
          <i class="fa-solid ${s.faClass}"></i>
        </div>
        <h3 class="font-bold text-white text-lg">${s.name}</h3>
      </div>
      <p class="text-sm text-gray-400 leading-relaxed">${s.desc}</p>
    </div>
  `).join("");
}

function renderServices() {
  const c = document.getElementById("services-grid");
  if (!c) return;
  c.innerHTML = PORTFOLIO_DATA.services.map(s => `
    <div class="glass-card p-6 flex items-start gap-4 group reveal">
      <div class="w-10 h-10 shrink-0 rounded border border-white/10 flex items-center justify-center text-white bg-white/5 group-hover:bg-white/20 transition-all">
        <i class="fa-solid ${s.icon}"></i>
      </div>
      <div>
        <h3 class="font-bold text-white mb-1.5 text-base">${s.title}</h3>
        <p class="text-sm text-gray-400 leading-relaxed">${s.desc}</p>
      </div>
    </div>
  `).join("");
}

function renderProcess() {
  const c = document.getElementById("process-grid");
  if (!c) return;
  c.innerHTML = PORTFOLIO_DATA.process.map((p, i) => `
    <div class="relative pl-10 pb-10 border-l border-white/10 last:border-0 last:pb-0 reveal">
      <div class="absolute left-[-17px] top-0 w-8 h-8 rounded-full bg-[#001524] border-2 border-white/30 flex items-center justify-center text-xs font-bold text-white z-10">${p.step}</div>
      <h3 class="font-bold text-white text-xl mb-2">${p.title}</h3>
      <p class="text-gray-400 text-sm leading-relaxed">${p.desc}</p>
    </div>
  `).join("");
}

function renderWhyMe() {
  const c = document.getElementById("why-me-grid");
  if (!c) return;
  c.innerHTML = PORTFOLIO_DATA.whyMe.map(w => `
    <div class="glass-card p-6 text-center group reveal">
      <div class="w-12 h-12 mx-auto rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white mb-4">
        <i class="fa-solid ${w.icon}"></i>
      </div>
      <h3 class="font-bold text-white mb-2">${w.title}</h3>
      <p class="text-sm text-gray-400">${w.desc}</p>
    </div>
  `).join("");
}

let currentFilter = "all";
function renderPortfolio(f, query="") {
  f = f || currentFilter;
  const c = document.getElementById("portfolio-grid");
  const noRes = document.getElementById("no-results");
  if (!c) return;
  
  let items = PORTFOLIO_DATA.portfolio;
  
  if (f !== "all") {
    items = items.filter(p => p.category === f);
  }
  
  if (query) {
    const q = query.toLowerCase();
    items = items.filter(p => 
      p.title.toLowerCase().includes(q) || 
      p.category.toLowerCase().includes(q) || 
      (p.searchTerms && p.searchTerms.toLowerCase().includes(q))
    );
  }
  
  if (items.length === 0) {
    c.innerHTML = "";
    if(noRes) noRes.classList.remove("hidden");
    return;
  }
  
  if(noRes) noRes.classList.add("hidden");

  c.innerHTML = items.map(p => `
    <div class="portfolio-card group cursor-pointer reveal" onclick="openProject('${p.id}')">
      <div class="relative overflow-hidden h-[340px]">
        <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover" loading="lazy"/>
        <div class="absolute inset-0 portfolio-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-6">
          <span class="text-xs font-semibold tracking-wider text-gray-300 uppercase mb-2">${p.category}</span>
          <h3 class="font-bold text-white text-2xl mb-4">${p.title}</h3>
          <button class="btn-primary self-start text-xs py-2 px-4">View Project</button>
        </div>
      </div>
    </div>
  `).join("");
}

function initFilters() {
  document.querySelectorAll(".filter-btn").forEach(b => {
    b.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(x => x.classList.remove("active"));
      b.classList.add("active");
      currentFilter = b.dataset.filter;
      
      // Clear search when clicking a filter
      const searchInputs = document.querySelectorAll('.search-input');
      searchInputs.forEach(input => input.value = "");
      
      renderPortfolio(currentFilter);
    });
  });
}

function initNav() {
  const nav = document.getElementById("navbar");
  const tog = document.getElementById("menu-toggle");
  const dr = document.getElementById("menu-drawer");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) nav.classList.add("nav-fixed", "py-2");
    else { nav.classList.remove("nav-fixed", "py-2"); }
  });
  if (tog && dr) {
    tog.addEventListener("click", () => dr.classList.toggle("hidden"));
    dr.querySelectorAll("a").forEach(a => a.addEventListener("click", () => dr.classList.add("hidden")));
  }
}

function initSearch() {
  const searchInputs = document.querySelectorAll(".search-input");
  searchInputs.forEach(input => {
    input.addEventListener("input", (e) => {
      const term = e.target.value.trim();
      
      // Sync inputs
      searchInputs.forEach(inp => { if(inp !== e.target) inp.value = term; });
      
      // Reset filter visually
      if (term.length > 0) {
        document.querySelectorAll(".filter-btn").forEach(x => x.classList.remove("active"));
        document.querySelector('.filter-btn[data-filter="all"]').classList.add("active");
        currentFilter = "all";
      }
      
      // If user types, we automatically scroll them to portfolio smoothly if not already there
      const portSection = document.getElementById("projects");
      if (term.length > 1 && portSection && window.scrollY < (portSection.offsetTop - 200)) {
        window.scrollTo({ top: portSection.offsetTop - 100, behavior: 'smooth' });
      }
      
      renderPortfolio("all", term);
    });
  });
}

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

window.openProject = function(id) {
  const p = PORTFOLIO_DATA.portfolio.find(x => x.id === id);
  if (!p) return;
  alert("Viewing Project:\n\nTitle: " + p.title + "\nCategory: " + p.category + "\n\n(Modal implementation ready!)");
};