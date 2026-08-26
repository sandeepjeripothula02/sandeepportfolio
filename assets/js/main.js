// Sandeep Portfolio Main Application Logic

document.addEventListener("DOMContentLoaded", () => {
  initProfile();
  initSoftwareSkills();
  initServices();
  initPortfolio();
  initProcess();
  initWhyChooseMe();
  initBeforeAfterSlider();
  initStatsCounters();
  initNavigation();
  initContactForm();
  initModals();
});

// Render Profile & Hero Details
function initProfile() {
  const p = PORTFOLIO_DATA.profile;
  
  document.querySelectorAll(".profile-name").forEach(el => el.textContent = p.name);
  document.querySelectorAll(".profile-title").forEach(el => el.textContent = p.title);
  document.querySelectorAll(".profile-tagline").forEach(el => el.textContent = `“${p.tagline}”`);
  document.querySelectorAll(".profile-intro").forEach(el => el.textContent = p.intro);
  document.querySelectorAll(".profile-email").forEach(el => {
    el.textContent = p.email;
    if (el.tagName === 'A') el.href = `mailto:${p.email}`;
  });

  const statsContainer = document.getElementById("hero-stats-container");
  if (statsContainer) {
    statsContainer.innerHTML = p.stats.map((stat) => `
      <div class="glass-panel p-4 sm:p-5 rounded-2xl border border-white/10 relative overflow-hidden group hover:border-white/20 transition-all duration-300">
        <div class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-heading counter-val" data-target="${stat.value}">${stat.value}</div>
        <div class="text-xs uppercase tracking-wider text-purple-400 font-semibold mt-1 font-mono-tag">${stat.label}</div>
        <div class="text-xs text-zinc-400 mt-0.5 hidden sm:block">${stat.subtext}</div>
        <div class="absolute -right-4 -bottom-4 w-16 h-16 bg-purple-500/10 rounded-full blur-xl group-hover:bg-purple-500/20 transition-all"></div>
      </div>
    `).join("");
  }
}

// Render Software & Skill Ecosystem
function initSoftwareSkills() {
  const { software, graphicDesignList, videoEditingList } = PORTFOLIO_DATA.skills;

  const softwareGrid = document.getElementById("software-cards-grid");
  if (softwareGrid) {
    softwareGrid.innerHTML = software.map(s => `
      <div class="glass-panel p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 group relative overflow-hidden software-card" style="--badge-glow: ${s.glow}">
        <div class="flex items-start justify-between mb-4">
          <div class="w-14 h-14 rounded-xl flex items-center justify-center font-bold text-xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110" style="background-color: ${s.color}; box-shadow: 0 10px 25px -5px ${s.glow};">
            ${s.short}
          </div>
          <span class="text-xs font-mono-tag uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300">
            ${s.level}
          </span>
        </div>
        <h3 class="text-lg font-bold text-white mb-1 font-heading group-hover:text-white transition-colors">${s.name}</h3>
        <p class="text-xs text-purple-400 font-semibold mb-2 font-mono-tag">${s.category}</p>
        <p class="text-sm text-zinc-400 leading-relaxed">${s.desc}</p>
        <div class="mt-4 pt-3 border-t border-white/5 flex items-center text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors">
          <i class="${s.icon} mr-2 text-zinc-400"></i> Master Production Tool
        </div>
      </div>
    `).join("");
  }

  const gdListEl = document.getElementById("gd-skills-list");
  if (gdListEl) {
    gdListEl.innerHTML = graphicDesignList.map(item => `
      <span class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
        item.highlight 
          ? 'bg-purple-500/15 text-purple-200 border border-purple-500/40 shadow-sm shadow-purple-500/20' 
          : 'bg-zinc-900/80 text-zinc-300 border border-white/10 hover:border-white/25 hover:bg-zinc-800'
      }">
        <span class="w-2 h-2 rounded-full ${item.highlight ? 'bg-purple-400 studio-pulse' : 'bg-cyan-400'}"></span>
        ${item.name}
      </span>
    `).join("");
  }

  const veListEl = document.getElementById("ve-skills-list");
  if (veListEl) {
    veListEl.innerHTML = videoEditingList.map(item => `
      <span class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
        item.highlight 
          ? 'bg-cyan-500/15 text-cyan-200 border border-cyan-500/40 shadow-sm shadow-cyan-500/20' 
          : 'bg-zinc-900/80 text-zinc-300 border border-white/10 hover:border-white/25 hover:bg-zinc-800'
      }">
        <span class="w-2 h-2 rounded-full ${item.highlight ? 'bg-cyan-400 studio-pulse' : 'bg-purple-400'}"></span>
        ${item.name}
      </span>
    `).join("");
  }
}

// Render Services
function initServices() {
  const servicesGrid = document.getElementById("services-grid");
  if (!servicesGrid) return;

  servicesGrid.innerHTML = PORTFOLIO_DATA.services.map(s => `
    <div class="glass-panel rounded-2xl border border-white/10 overflow-hidden flex flex-col group hover:border-white/25 transition-all duration-300 relative">
      <div class="h-44 sm:h-48 overflow-hidden relative">
        <img src="${s.image}" alt="${s.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
        <div class="absolute top-4 left-4 font-mono-tag text-xs font-bold px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/15 text-white">
          SERVICE ${s.number}
        </div>
        <div class="absolute bottom-3 left-4 right-4 flex items-center justify-between">
          <div class="w-10 h-10 rounded-xl bg-purple-600/90 backdrop-blur-md flex items-center justify-center text-white text-base shadow-lg">
            <i class="${s.icon}"></i>
          </div>
          <span class="text-xs text-zinc-300 bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">${s.tagline}</span>
        </div>
      </div>

      <div class="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 class="text-xl font-bold text-white mb-2 font-heading group-hover:text-purple-300 transition-colors">${s.title}</h3>
          <p class="text-sm text-zinc-400 leading-relaxed mb-5">${s.desc}</p>
          
          <div class="space-y-2 mb-6">
            <div class="text-xs uppercase tracking-wider text-zinc-500 font-mono-tag font-semibold">Key Deliverables</div>
            <ul class="space-y-1.5">
              ${s.deliverables.map(d => `
                <li class="text-xs text-zinc-300 flex items-center gap-2">
                  <i class="fa-solid fa-check text-cyan-400 text-[10px]"></i>
                  <span>${d}</span>
                </li>
              `).join("")}
            </ul>
          </div>
        </div>

        <button onclick="selectServiceForInquiry('${s.title}')" class="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-xs font-semibold text-white transition-all flex items-center justify-center gap-2 group-hover:border-purple-500/40">
          <span>Inquire This Service</span>
          <i class="fa-solid fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
        </button>
      </div>
    </div>
  `).join("");
}

// Render Portfolio Masonry & Category Filtering
let currentCategory = 'all';

function initPortfolio() {
  renderPortfolioGrid(currentCategory);

  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-filter");
      renderPortfolioGrid(currentCategory);
    });
  });
}

function renderPortfolioGrid(category) {
  const grid = document.getElementById("portfolio-masonry-grid");
  if (!grid) return;

  const items = category === 'all' 
    ? PORTFOLIO_DATA.portfolio 
    : PORTFOLIO_DATA.portfolio.filter(p => p.filterGroup === category);

  grid.innerHTML = items.map((p) => {
    const isVideo = p.category === 'Video Editing' || p.category === 'Motion Graphics';
    const isTall = p.aspect === 'tall';
    
    return `
      <div class="portfolio-card glass-panel rounded-2xl border border-white/10 overflow-hidden group cursor-pointer relative ${isTall ? 'md:row-span-2' : ''}" onclick="openProjectModal('${p.id}')">
        <div class="relative overflow-hidden ${isTall ? 'h-[440px] md:h-[540px]' : 'h-64 sm:h-72'}">
          <img src="${p.image}" alt="${p.title}" class="portfolio-img w-full h-full object-cover object-center" loading="lazy" />
          
          <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
          
          <div class="absolute top-4 left-4 z-10 flex items-center gap-2">
            <span class="px-3 py-1 rounded-full text-xs font-mono-tag font-semibold bg-black/70 backdrop-blur-md border border-white/15 text-white">
              ${p.categoryDisplay}
            </span>
            ${isVideo ? '<span class="w-7 h-7 rounded-full bg-purple-600/90 text-white flex items-center justify-center text-xs shadow-lg"><i class="fa-solid fa-play ml-0.5"></i></span>' : ''}
          </div>

          <div class="portfolio-overlay absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 flex flex-col items-center justify-center gap-3 transition-opacity duration-300 p-6 text-center">
            <div class="w-14 h-14 rounded-full bg-white text-zinc-950 flex items-center justify-center text-xl shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
              <i class="fa-solid ${isVideo ? 'fa-play ml-1' : 'fa-arrow-up-right-from-square'}"></i>
            </div>
            <div class="text-white font-bold text-base font-heading">View Project</div>
            <div class="text-xs text-zinc-300 max-w-xs">${p.client} • ${p.year}</div>
          </div>
        </div>

        <div class="p-5 relative z-10 bg-zinc-950/80 border-t border-white/5">
          <div class="flex items-center justify-between text-xs text-zinc-400 mb-1.5">
            <span class="font-mono-tag text-purple-400">${p.client}</span>
            <span>${p.year}</span>
          </div>
          <h3 class="text-base sm:text-lg font-bold text-white font-heading group-hover:text-purple-300 transition-colors line-clamp-1">${p.title}</h3>
          
          <div class="flex flex-wrap gap-1.5 mt-3">
            ${p.tags.slice(0, 3).map(tag => `
              <span class="text-[11px] px-2 py-0.5 rounded-md bg-white/5 text-zinc-300 border border-white/5">
                ${tag}
              </span>
            `).join("")}
            ${p.tags.length > 3 ? `<span class="text-[11px] px-1.5 py-0.5 rounded-md bg-white/5 text-zinc-500">+${p.tags.length - 3}</span>` : ''}
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// Creative 4-Step Process
function initProcess() {
  const processContainer = document.getElementById("process-grid");
  if (!processContainer) return;

  processContainer.innerHTML = PORTFOLIO_DATA.process.map((step) => `
    <div class="glass-panel p-6 sm:p-7 rounded-2xl border border-white/10 relative overflow-hidden group hover:border-white/20 transition-all duration-300 flex flex-col justify-between">
      <div class="absolute -right-4 -bottom-6 text-7xl sm:text-8xl font-black text-white/[0.03] group-hover:text-white/[0.07] transition-colors font-heading pointer-events-none select-none">
        ${step.step}
      </div>

      <div>
        <div class="flex items-center justify-between mb-6">
          <div class="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-purple-400 text-lg group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-500 transition-all duration-300">
            <i class="${step.icon}"></i>
          </div>
          <span class="font-mono-tag text-xs font-extrabold px-3 py-1 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30">
            PHASE ${step.step}
          </span>
        </div>

        <h3 class="text-xl font-bold text-white mb-2 font-heading group-hover:text-purple-300 transition-colors">${step.title}</h3>
        <p class="text-xs text-purple-400 font-medium mb-3">${step.summary}</p>
        <p class="text-sm text-zinc-400 leading-relaxed mb-6">${step.desc}</p>
      </div>

      <div class="pt-4 border-t border-white/10 space-y-1.5">
        ${step.highlights.map(h => `
          <div class="text-xs text-zinc-300 flex items-center gap-2">
            <i class="fa-solid fa-circle-dot text-[8px] text-cyan-400"></i>
            <span>${h}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");
}

// Why Choose Me
function initWhyChooseMe() {
  const container = document.getElementById("why-choose-grid");
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.whyChooseMe.map((item) => `
    <div class="glass-panel p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 group flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center text-lg group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all">
            <i class="${item.icon}"></i>
          </div>
          <span class="text-xs font-mono-tag text-zinc-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
            ${item.tag}
          </span>
        </div>
        <h3 class="text-lg font-bold text-white mb-2 font-heading group-hover:text-purple-300 transition-colors">${item.title}</h3>
        <p class="text-sm text-zinc-400 leading-relaxed">${item.desc}</p>
      </div>
      <div class="mt-4 pt-3 border-t border-white/5 flex items-center text-xs text-zinc-500 group-hover:text-purple-400 transition-colors">
        <i class="fa-solid fa-sparkles mr-2 text-[10px]"></i> Sandeep Guarantee
      </div>
    </div>
  `).join("");
}

// Interactive Before / After Comparison Slider
function initBeforeAfterSlider() {
  const container = document.getElementById("before-after-slider");
  if (!container) return;

  const handle = container.querySelector(".comparison-handle");
  const beforeLayer = container.querySelector(".comparison-before");
  let isDragging = false;

  function setSliderPosition(x) {
    const rect = container.getBoundingClientRect();
    let posX = x - rect.left;
    if (posX < 0) posX = 0;
    if (posX > rect.width) posX = rect.width;
    const percent = (posX / rect.width) * 100;
    
    handle.style.left = `${percent}%`;
    beforeLayer.style.width = `${percent}%`;
  }

  container.addEventListener("mousedown", (e) => {
    isDragging = true;
    setSliderPosition(e.clientX);
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    setSliderPosition(e.clientX);
  });

  window.addEventListener("mouseup", () => {
    isDragging = false;
  });

  container.addEventListener("touchstart", (e) => {
    isDragging = true;
    setSliderPosition(e.touches[0].clientX);
  });

  window.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    setSliderPosition(e.touches[0].clientX);
  });

  window.addEventListener("touchend", () => {
    isDragging = false;
  });

  setTimeout(() => {
    setSliderPosition(container.getBoundingClientRect().left + container.offsetWidth / 2);
  }, 400);
}

// Lightbox & Video Modals
let activeProject = null;

window.openProjectModal = function(id) {
  const project = PORTFOLIO_DATA.portfolio.find(p => p.id === id);
  if (!project) return;
  activeProject = project;

  const modal = document.getElementById("project-modal");
  const isVideo = project.category === 'Video Editing' || project.category === 'Motion Graphics';

  document.getElementById("modal-project-title").textContent = project.title;
  document.getElementById("modal-project-category").textContent = project.categoryDisplay;
  document.getElementById("modal-project-client").textContent = project.client;
  document.getElementById("modal-project-year").textContent = project.year;
  document.getElementById("modal-project-desc").textContent = project.description;
  document.getElementById("modal-project-metrics").textContent = project.metrics;
  
  const mediaContainer = document.getElementById("modal-media-container");
  if (isVideo) {
    mediaContainer.innerHTML = `
      <div class="relative w-full aspect-video rounded-xl overflow-hidden bg-black border border-white/10 group">
        <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
          <button onclick="playSimulatedVideo()" class="w-20 h-20 rounded-full bg-purple-600 hover:bg-purple-500 text-white flex items-center justify-center text-2xl shadow-2xl transition-all transform hover:scale-110 studio-pulse">
            <i class="fa-solid fa-play ml-1"></i>
          </button>
          <span class="text-xs text-white/90 font-mono-tag mt-3 bg-black/60 px-3 py-1 rounded-full border border-white/20">Click to Play 4K Preview</span>
        </div>
        <div class="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-zinc-300 bg-black/70 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-red-500 studio-pulse"></span>
            <span>4K 60FPS MASTER TIMELINE</span>
          </div>
          <span class="font-mono-tag">00:01:48 / 00:03:20</span>
        </div>
      </div>
    `;
  } else {
    mediaContainer.innerHTML = `
      <div class="w-full rounded-xl overflow-hidden bg-zinc-900 border border-white/10">
        <img src="${project.image}" alt="${project.title}" class="w-full max-h-[550px] object-contain mx-auto" />
      </div>
    `;
  }

  const tagsContainer = document.getElementById("modal-project-tags");
  tagsContainer.innerHTML = project.tags.map(t => `
    <span class="text-xs px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-zinc-300">${t}</span>
  `).join("");

  const toolsContainer = document.getElementById("modal-project-tools");
  toolsContainer.innerHTML = project.tools.map(t => `
    <span class="text-xs font-semibold px-3 py-1 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/30">${t}</span>
  `).join("");

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
};

window.closeProjectModal = function() {
  const modal = document.getElementById("project-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "auto";
};

window.playSimulatedVideo = function() {
  showToast("🎬 Launching 4K Master Video Player Showcase...", "info");
};

function initModals() {
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProjectModal();
      closeInquiryModal();
    }
  });

  const modal = document.getElementById("project-modal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeProjectModal();
    });
  }
}

// Interactive Project Inquiry / Estimator Modal
window.openInquiryModal = function(preselectedService = "") {
  const modal = document.getElementById("inquiry-modal");
  if (!modal) return;

  if (preselectedService) {
    const serviceInput = document.getElementById("inquiry-service-type");
    if (serviceInput) serviceInput.value = preselectedService;
  }

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
};

window.closeInquiryModal = function() {
  const modal = document.getElementById("inquiry-modal");
  if (!modal) return;
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "auto";
};

window.selectServiceForInquiry = function(serviceTitle) {
  openInquiryModal(serviceTitle);
};

// Navigation & Sticky Header
function initNavigation() {
  const navbar = document.getElementById("main-navbar");
  const mobileToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu-drawer");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("glass-nav", "shadow-2xl");
      navbar.classList.remove("bg-transparent");
    } else {
      navbar.classList.remove("glass-nav", "shadow-2xl");
      navbar.classList.add("bg-transparent");
    }
  });

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  }
}

// Contact Form & Mailto Builder
function initContactForm() {
  const form = document.getElementById("contact-project-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const name = document.getElementById("form-name").value.trim();
    const email = document.getElementById("form-email").value.trim();
    const service = document.getElementById("form-service").value;
    const timeline = document.getElementById("form-timeline").value;
    const budget = document.getElementById("form-budget").value;
    const message = document.getElementById("form-message").value.trim();

    if (!name || !email || !message) {
      showToast("Please fill in all required fields.", "error");
      return;
    }

    const subject = encodeURIComponent(`Project Inquiry: ${service} — ${name}`);
    const body = encodeURIComponent(
      `Hello Sandeep,\n\nI would like to discuss a project with you.\n\n` +
      `Client Name: ${name}\n` +
      `Email: ${email}\n` +
      `Service Requested: ${service}\n` +
      `Estimated Timeline: ${timeline}\n` +
      `Budget Range: ${budget}\n\n` +
      `Project Details:\n${message}\n\n` +
      `Looking forward to collaborating with you!`
    );

    window.location.href = `mailto:sandeepjeripothula8@gmail.com?subject=${subject}&body=${body}`;
    showToast("✨ Opening email client to send brief to Sandeep!", "success");
    form.reset();
  });
}

// Copy Email with Animated Toast
window.copyEmailToClipboard = function() {
  const email = PORTFOLIO_DATA.profile.email;
  navigator.clipboard.writeText(email).then(() => {
    showToast("📋 Copied email: " + email, "success");
  }).catch(() => {
    showToast("Email: " + email, "info");
  });
};

function showToast(message, type = "info") {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "fixed bottom-6 right-6 z-50 px-5 py-3.5 rounded-2xl glass-panel text-sm font-semibold shadow-2xl flex items-center gap-3 border transition-all duration-300 opacity-0 translate-y-4 pointer-events-none";
    document.body.appendChild(toast);
  }

  const icon = type === "success" 
    ? '<i class="fa-solid fa-circle-check text-emerald-400 text-base"></i>' 
    : type === "error" 
      ? '<i class="fa-solid fa-circle-exclamation text-rose-400 text-base"></i>' 
      : '<i class="fa-solid fa-circle-info text-cyan-400 text-base"></i>';

  toast.innerHTML = `${icon}<span>${message}</span>`;
  toast.classList.remove("opacity-0", "translate-y-4", "pointer-events-none");
  toast.classList.add("opacity-100", "translate-y-0");

  setTimeout(() => {
    toast.classList.add("opacity-0", "translate-y-4", "pointer-events-none");
    toast.classList.remove("opacity-100", "translate-y-0");
  }, 4000);
}

function initStatsCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counters = entry.target.querySelectorAll(".counter-val");
        counters.forEach(counter => {
          counter.classList.add("text-gradient-purple");
        });
      }
    });
  }, { threshold: 0.2 });

  const statsSection = document.getElementById("experience-stats");
  if (statsSection) observer.observe(statsSection);
}