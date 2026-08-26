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

  document.querySelectorAll(".profile-phone").forEach(el => {
    el.textContent = p.phone;
    if (el.tagName === 'A') el.href = `tel:${p.phoneRaw}`;
  });

  document.querySelectorAll(".profile-whatsapp-btn").forEach(el => {
    if (el.tagName === 'A') el.href = p.whatsappUrl;
  });

  const statsContainer = document.getElementById("hero-stats-container");
  if (statsContainer) {
    statsContainer.innerHTML = p.stats.map((stat) => `
      <div class="glass-panel p-4 sm:p-5 rounded-2xl border border-amber-900/15 relative overflow-hidden group hover:border-amber-900/30 transition-all duration-300">
        <div class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 font-heading counter-val" data-target="${stat.value}">${stat.value}</div>
        <div class="text-xs uppercase tracking-wider text-amber-700 font-semibold mt-1 font-mono-tag">${stat.label}</div>
        <div class="text-xs text-stone-600 mt-0.5 hidden sm:block">${stat.subtext}</div>
        <div class="absolute -right-4 -bottom-4 w-16 h-16 bg-amber-500/10 rounded-full blur-xl group-hover:bg-amber-500/20 transition-all"></div>
      </div>
    `).join("");
  }
}

function initSoftwareSkills() {
  const { software, graphicDesignList, videoEditingList } = PORTFOLIO_DATA.skills;

  const softwareGrid = document.getElementById("software-cards-grid");
  if (softwareGrid) {
    softwareGrid.innerHTML = software.map(s => `
      <div class="glass-panel p-6 rounded-2xl border border-amber-900/15 hover:border-amber-900/30 transition-all duration-300 group relative overflow-hidden software-card">
        <div class="flex items-start justify-between mb-4">
          <div class="w-14 h-14 rounded-xl flex items-center justify-center font-bold text-xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110" style="background-color: ${s.color}; box-shadow: 0 10px 25px -5px ${s.glow};">
            ${s.short}
          </div>
          <span class="text-xs font-mono-tag uppercase tracking-wider px-3 py-1 rounded-full bg-stone-900/5 border border-stone-900/10 text-stone-700 font-bold">
            ${s.level}
          </span>
        </div>
        <h3 class="text-lg font-bold text-stone-900 mb-1 font-heading">${s.name}</h3>
        <p class="text-xs text-amber-700 font-semibold mb-2 font-mono-tag">${s.category}</p>
        <p class="text-sm text-stone-600 leading-relaxed">${s.desc}</p>
        <div class="mt-4 pt-3 border-t border-stone-200 flex items-center text-xs text-stone-500 group-hover:text-stone-700 transition-colors">
          <i class="${s.icon} mr-2 text-stone-600"></i> Master Production Tool
        </div>
      </div>
    `).join("");
  }

  const gdListEl = document.getElementById("gd-skills-list");
  if (gdListEl) {
    gdListEl.innerHTML = graphicDesignList.map(item => `
      <span class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
        item.highlight 
          ? 'bg-amber-600/15 text-amber-900 border border-amber-600/30 shadow-sm font-semibold' 
          : 'bg-white/80 text-stone-700 border border-stone-300 hover:border-amber-500/40 hover:bg-white'
      }">
        <span class="w-2 h-2 rounded-full ${item.highlight ? 'bg-amber-500 studio-pulse' : 'bg-stone-400'}"></span>
        ${item.name}
      </span>
    `).join("");
  }

  const veListEl = document.getElementById("ve-skills-list");
  if (veListEl) {
    veListEl.innerHTML = videoEditingList.map(item => `
      <span class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
        item.highlight 
          ? 'bg-purple-600/15 text-purple-950 border border-purple-600/30 shadow-sm font-semibold' 
          : 'bg-white/80 text-stone-700 border border-stone-300 hover:border-purple-500/40 hover:bg-white'
      }">
        <span class="w-2 h-2 rounded-full ${item.highlight ? 'bg-purple-500 studio-pulse' : 'bg-stone-400'}"></span>
        ${item.name}
      </span>
    `).join("");
  }
}

function initServices() {
  const servicesGrid = document.getElementById("services-grid");
  if (!servicesGrid) return;

  servicesGrid.innerHTML = PORTFOLIO_DATA.services.map(s => `
    <div class="glass-panel rounded-2xl border border-amber-900/15 overflow-hidden flex flex-col group hover:border-amber-900/30 transition-all duration-300 relative">
      <div class="h-44 sm:h-48 overflow-hidden relative">
        <img src="${s.image}" alt="${s.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div class="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/40 to-transparent"></div>
        <div class="absolute top-4 left-4 font-mono-tag text-xs font-bold px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/15 text-white">
          SERVICE ${s.number}
        </div>
        <div class="absolute bottom-3 left-4 right-4 flex items-center justify-between">
          <div class="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center text-base shadow-lg">
            <i class="${s.icon}"></i>
          </div>
          <span class="text-xs text-white bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 font-medium">${s.tagline}</span>
        </div>
      </div>

      <div class="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 class="text-xl font-bold text-stone-900 mb-2 font-heading group-hover:text-amber-700 transition-colors">${s.title}</h3>
          <p class="text-sm text-stone-600 leading-relaxed mb-5">${s.desc}</p>
          
          <div class="space-y-2 mb-6">
            <div class="text-xs uppercase tracking-wider text-stone-500 font-mono-tag font-semibold">Key Deliverables</div>
            <ul class="space-y-1.5">
              ${s.deliverables.map(d => `
                <li class="text-xs text-stone-700 flex items-center gap-2">
                  <i class="fa-solid fa-circle-check text-amber-600 text-xs"></i>
                  <span>${d}</span>
                </li>
              `).join("")}
            </ul>
          </div>
        </div>

        <button onclick="selectServiceForInquiry('${s.title}')" class="w-full py-2.5 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-xs font-semibold text-white transition-all flex items-center justify-center gap-2 shadow-md">
          <span>Inquire This Service</span>
          <i class="fa-solid fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
        </button>
      </div>
    </div>
  `).join("");
}

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
      <div class="portfolio-card glass-panel rounded-2xl border border-amber-900/15 overflow-hidden group cursor-pointer relative ${isTall ? 'md:row-span-2' : ''}" onclick="openProjectModal('${p.id}')">
        <div class="relative overflow-hidden ${isTall ? 'h-[440px] md:h-[540px]' : 'h-64 sm:h-72'}">
          <img src="${p.image}" alt="${p.title}" class="portfolio-img w-full h-full object-cover object-center" loading="lazy" />
          
          <div class="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
          
          <div class="absolute top-4 left-4 z-10 flex items-center gap-2">
            <span class="px-3 py-1 rounded-full text-xs font-mono-tag font-semibold bg-black/70 backdrop-blur-md border border-white/15 text-white">
              ${p.categoryDisplay}
            </span>
            ${isVideo ? '<span class="w-7 h-7 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs shadow-lg"><i class="fa-solid fa-play ml-0.5"></i></span>' : ''}
          </div>

          <div class="portfolio-overlay absolute inset-0 bg-stone-950/60 backdrop-blur-sm opacity-0 flex flex-col items-center justify-center gap-3 transition-opacity duration-300 p-6 text-center">
            <div class="w-14 h-14 rounded-full bg-white text-stone-950 flex items-center justify-center text-xl shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
              <i class="fa-solid ${isVideo ? 'fa-play ml-1' : 'fa-arrow-up-right-from-square'}"></i>
            </div>
            <div class="text-white font-bold text-base font-heading">View Project</div>
            <div class="text-xs text-stone-300 max-w-xs">${p.client} • ${p.year}</div>
          </div>
        </div>

        <div class="p-5 relative z-10 bg-white/90 border-t border-amber-900/10">
          <div class="flex items-center justify-between text-xs text-stone-500 mb-1.5">
            <span class="font-mono-tag text-amber-700 font-bold">${p.client}</span>
            <span>${p.year}</span>
          </div>
          <h3 class="text-base sm:text-lg font-bold text-stone-900 font-heading group-hover:text-amber-700 transition-colors line-clamp-1">${p.title}</h3>
          
          <div class="flex flex-wrap gap-1.5 mt-3">
            ${p.tags.slice(0, 3).map(tag => `
              <span class="text-[11px] px-2 py-0.5 rounded-md bg-stone-100 text-stone-700 border border-stone-200">
                ${tag}
              </span>
            `).join("")}
            ${p.tags.length > 3 ? `<span class="text-[11px] px-1.5 py-0.5 rounded-md bg-stone-100 text-stone-500 font-medium">+${p.tags.length - 3}</span>` : ''}
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function initProcess() {
  const processContainer = document.getElementById("process-grid");
  if (!processContainer) return;

  processContainer.innerHTML = PORTFOLIO_DATA.process.map((step) => `
    <div class="glass-panel p-6 sm:p-7 rounded-2xl border border-amber-900/15 relative overflow-hidden group hover:border-amber-900/30 transition-all duration-300 flex flex-col justify-between">
      <div class="absolute -right-4 -bottom-6 text-7xl sm:text-8xl font-black text-stone-900/[0.04] group-hover:text-stone-900/[0.08] transition-colors font-heading pointer-events-none select-none">
        ${step.step}
      </div>

      <div>
        <div class="flex items-center justify-between mb-6">
          <div class="w-12 h-12 rounded-xl bg-amber-600/10 border border-amber-600/20 flex items-center justify-center text-amber-700 text-lg group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600 transition-all duration-300">
            <i class="${step.icon}"></i>
          </div>
          <span class="font-mono-tag text-xs font-extrabold px-3 py-1 rounded-full bg-amber-600/10 text-amber-900 border border-amber-600/20">
            PHASE ${step.step}
          </span>
        </div>

        <h3 class="text-xl font-bold text-stone-900 mb-2 font-heading group-hover:text-amber-700 transition-colors">${step.title}</h3>
        <p class="text-xs text-amber-700 font-semibold mb-3">${step.summary}</p>
        <p class="text-sm text-stone-600 leading-relaxed mb-6">${step.desc}</p>
      </div>

      <div class="pt-4 border-t border-stone-200 space-y-1.5">
        ${step.highlights.map(h => `
          <div class="text-xs text-stone-700 flex items-center gap-2">
            <i class="fa-solid fa-circle-dot text-[8px] text-amber-600"></i>
            <span>${h}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");
}

function initWhyChooseMe() {
  const container = document.getElementById("why-choose-grid");
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.whyChooseMe.map((item) => `
    <div class="glass-panel p-6 rounded-2xl border border-amber-900/15 hover:border-amber-900/30 transition-all duration-300 group flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 rounded-xl bg-amber-600/10 border border-amber-600/20 text-amber-700 flex items-center justify-center text-lg group-hover:scale-110 group-hover:bg-amber-600 group-hover:text-white transition-all">
            <i class="${item.icon}"></i>
          </div>
          <span class="text-xs font-mono-tag text-stone-600 bg-stone-100 px-2.5 py-1 rounded-md border border-stone-200 font-semibold">
            ${item.tag}
          </span>
        </div>
        <h3 class="text-lg font-bold text-stone-900 mb-2 font-heading group-hover:text-amber-700 transition-colors">${item.title}</h3>
        <p class="text-sm text-stone-600 leading-relaxed">${item.desc}</p>
      </div>
      <div class="mt-4 pt-3 border-t border-stone-200 flex items-center text-xs text-stone-500 group-hover:text-amber-700 transition-colors">
        <i class="fa-solid fa-sparkles mr-2 text-[10px] text-amber-600"></i> Sandeep Guarantee
      </div>
    </div>
  `).join("");
}

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
      <div class="relative w-full aspect-video rounded-xl overflow-hidden bg-black border border-stone-800 group">
        <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
          <button onclick="playSimulatedVideo()" class="w-20 h-20 rounded-full bg-amber-600 hover:bg-amber-500 text-white flex items-center justify-center text-2xl shadow-2xl transition-all transform hover:scale-110 studio-pulse">
            <i class="fa-solid fa-play ml-1"></i>
          </button>
          <span class="text-xs text-white/90 font-mono-tag mt-3 bg-black/60 px-3 py-1 rounded-full border border-white/20">Click to Play 4K Preview</span>
        </div>
        <div class="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-stone-300 bg-black/70 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
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
      <div class="w-full rounded-xl overflow-hidden bg-stone-900 border border-stone-800">
        <img src="${project.image}" alt="${project.title}" class="w-full max-h-[550px] object-contain mx-auto" />
      </div>
    `;
  }

  const tagsContainer = document.getElementById("modal-project-tags");
  tagsContainer.innerHTML = project.tags.map(t => `
    <span class="text-xs px-3 py-1 rounded-lg bg-stone-100 border border-stone-200 text-stone-800 font-medium">${t}</span>
  `).join("");

  const toolsContainer = document.getElementById("modal-project-tools");
  toolsContainer.innerHTML = project.tools.map(t => `
    <span class="text-xs font-bold px-3 py-1 rounded-lg bg-amber-600/15 text-amber-900 border border-amber-600/30">${t}</span>
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

function initNavigation() {
  const navbar = document.getElementById("main-navbar");
  const mobileToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu-drawer");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("glass-nav", "shadow-md");
      navbar.classList.remove("bg-transparent");
    } else {
      navbar.classList.remove("glass-nav", "shadow-md");
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

function initContactForm() {
  const form = document.getElementById("contact-project-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendViaEmail();
  });
}

// Send Form via Email
window.sendViaEmail = function() {
  const name = document.getElementById("form-name").value.trim();
  const email = document.getElementById("form-email").value.trim();
  const service = document.getElementById("form-service").value;
  const timeline = document.getElementById("form-timeline").value;
  const budget = document.getElementById("form-budget").value;
  const message = document.getElementById("form-message").value.trim();

  if (!name || !message) {
    showToast("Please enter your name and project details.", "error");
    return;
  }

  const subject = encodeURIComponent(`Project Inquiry: ${service} — ${name}`);
  const body = encodeURIComponent(
    `Hello Sandeep,\n\nI would like to discuss a project with you.\n\n` +
    `Client Name: ${name}\n` +
    `Email: ${email || 'Not provided'}\n` +
    `Service Requested: ${service}\n` +
    `Timeline: ${timeline}\n` +
    `Budget: ${budget}\n\n` +
    `Project Requirements:\n${message}\n\n` +
    `Looking forward to collaborating with you!`
  );

  window.location.href = `mailto:sandeepjeripothula8@gmail.com?subject=${subject}&body=${body}`;
  showToast("📧 Opening your email client to send brief to Sandeep!", "success");
};

// Send Form via WhatsApp
window.sendViaWhatsApp = function() {
  const name = document.getElementById("form-name").value.trim() || "Prospective Client";
  const email = document.getElementById("form-email").value.trim();
  const service = document.getElementById("form-service").value;
  const timeline = document.getElementById("form-timeline").value;
  const budget = document.getElementById("form-budget").value;
  const message = document.getElementById("form-message").value.trim();

  const waText = encodeURIComponent(
    `*New Project Inquiry — Sandeep Studio*\n\n` +
    `👤 *Name:* ${name}\n` +
    `📧 *Email:* ${email || 'Direct WhatsApp'}\n` +
    `🎨 *Service:* ${service}\n` +
    `⏱️ *Timeline:* ${timeline}\n` +
    `💰 *Budget:* ${budget}\n\n` +
    `📝 *Brief:* ${message || 'I would like to discuss a project with you!'}`
  );

  window.open(`https://wa.me/919545382894?text=${waText}`, '_blank');
  showToast("💬 Opening WhatsApp chat with Sandeep (+91 9545382894)!", "success");
};

window.copyEmailToClipboard = function() {
  const email = PORTFOLIO_DATA.profile.email;
  navigator.clipboard.writeText(email).then(() => {
    showToast("📋 Copied email: " + email, "success");
  }).catch(() => {
    showToast("Email: " + email, "info");
  });
};

window.copyPhoneToClipboard = function() {
  const phone = "9545382894";
  navigator.clipboard.writeText(phone).then(() => {
    showToast("📞 Copied phone number: " + phone, "success");
  }).catch(() => {
    showToast("Phone: " + phone, "info");
  });
};

function showToast(message, type = "info") {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "fixed bottom-20 sm:bottom-6 right-6 z-50 px-5 py-3.5 rounded-2xl glass-panel text-sm font-semibold shadow-2xl flex items-center gap-3 border border-amber-900/20 text-stone-900 transition-all duration-300 opacity-0 translate-y-4 pointer-events-none";
    document.body.appendChild(toast);
  }

  const icon = type === "success" 
    ? '<i class="fa-solid fa-circle-check text-emerald-600 text-base"></i>' 
    : type === "error" 
      ? '<i class="fa-solid fa-circle-exclamation text-rose-600 text-base"></i>' 
      : '<i class="fa-solid fa-circle-info text-amber-600 text-base"></i>';

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
          counter.classList.add("text-amber-800");
        });
      }
    });
  }, { threshold: 0.2 });

  const statsSection = document.getElementById("experience-stats");
  if (statsSection) observer.observe(statsSection);
}