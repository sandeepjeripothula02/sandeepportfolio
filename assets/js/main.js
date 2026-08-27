document.addEventListener("DOMContentLoaded", () => {
  renderStats();
  renderAboutStats();
  renderSkills();
  renderSoftware();
  renderServices();
  renderPortfolio();
  renderProcess();
  renderWhyMe();
  renderReviews();
  initFilters();
  initNav();
  initSearch();
  initScrollAnimations();
  initParticles();
});

function initParticles() {
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      particles: {
        number: { value: 60, density: { enable: true, value_area: 800 } },
        color: { value: '#ffffff' },
        shape: { type: 'circle' },
        opacity: { value: 0.2, random: false },
        size: { value: 2, random: true },
        line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.1, width: 1 },
        move: { enable: true, speed: 1.5, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
      },
      interactivity: {
        detect_on: 'window',
        events: {
          onhover: { enable: true, mode: 'grab' },
          onclick: { enable: true, mode: 'push' },
          resize: true
        },
        modes: {
          grab: { distance: 180, line_linked: { opacity: 0.3 } },
          push: { particles_nb: 3 }
        }
      },
      retina_detect: true
    });
  }
}

function renderStats() {
  const c = document.getElementById("hero-stats");
  if (!c) return;
  c.innerHTML = PORTFOLIO_DATA.profile.stats.map(s => `
    <div class="text-left py-2 pr-6 border-r border-white/10 last:border-0 last:pr-0">
      <div class="text-3xl font-extrabold text-white mb-1 tracking-tight">${s.value}</div>
      <div class="text-[10px] font-semibold tracking-widest text-gray-400 uppercase">${s.label}</div>
    </div>
  `).join("");
}

function renderAboutStats() {
  const c = document.getElementById("experience-stats");
  if (!c) return;
  c.innerHTML = PORTFOLIO_DATA.profile.experienceStats.map(s => {
    // Extract numbers for animation
    const numMatch = s.value.match(/(\d+)/);
    const num = numMatch ? parseInt(numMatch[1]) : 0;
    const suffix = s.value.replace(/[0-9]/g, '');
    
    if (num > 0) {
      return `
      <div class="glass-card p-8 text-center reveal">
        <div class="text-5xl font-extrabold text-white mb-3 tracking-tight"><span class="counter-val" data-target="${num}">0</span>${suffix}</div>
        <div class="text-xs font-semibold tracking-widest text-gray-400 uppercase">${s.label}</div>
      </div>
      `;
    } else {
      return `
      <div class="glass-card p-8 text-center reveal">
        <div class="text-3xl font-extrabold text-white mb-4 mt-2 tracking-tight">${s.value}</div>
        <div class="text-xs font-semibold tracking-widest text-gray-400 uppercase">${s.label}</div>
      </div>
      `;
    }
  }).join("");
}

function renderSkills() {
  const c = document.getElementById("skills-grid");
  if (!c) return;
  c.innerHTML = PORTFOLIO_DATA.skills.map(s => `
    <div class="glass-card p-8 flex flex-col group reveal">
      <div class="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl text-white mb-6 group-hover:bg-white group-hover:text-[#001524] transition-all duration-400 shadow-lg">
        <i class="fa-solid ${s.icon}"></i>
      </div>
      <h3 class="font-bold text-white mb-3 text-lg">${s.name}</h3>
      <p class="text-sm text-gray-400 leading-relaxed">${s.desc}</p>
    </div>
  `).join("");
}

function renderSoftware() {
  const c = document.getElementById("software-grid");
  if (!c) return;
  c.innerHTML = PORTFOLIO_DATA.software.map(s => `
    <div class="glass-card p-6 flex flex-col group cursor-default reveal">
      <div class="flex items-center gap-5 mb-4">
        <div class="w-14 h-14 shrink-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500 shadow-lg p-2.5">
          <img src="${s.icon}" alt="${s.name}" class="w-full h-full object-contain filter drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]" />
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
      <div class="w-12 h-12 shrink-0 rounded-lg border border-white/10 flex items-center justify-center text-white bg-white/5 group-hover:bg-white/20 transition-all">
        <i class="fa-solid ${s.icon}"></i>
      </div>
      <div>
        <h3 class="font-bold text-white mb-2 text-base">${s.title}</h3>
        <p class="text-sm text-gray-400 leading-relaxed">${s.desc}</p>
      </div>
    </div>
  `).join("");
}

function renderProcess() {
  const c = document.getElementById("process-grid");
  if (!c) return;
  c.innerHTML = PORTFOLIO_DATA.process.map(p => `
    <div class="glass-card p-8 group hover:-translate-y-2 transition-all duration-300 reveal">
      <div class="flex items-center justify-between mb-6">
        <h3 class="font-bold text-white text-2xl tracking-tight group-hover:text-blue-300 transition-colors">${p.title}</h3>
        <div class="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-white shadow-[0_0_15px_rgba(255,255,255,0.05)] group-hover:scale-110 group-hover:bg-white/10 group-hover:border-white/30 transition-all duration-500">
          ${p.step}
        </div>
      </div>
      <p class="text-gray-400 text-sm leading-relaxed">${p.desc}</p>
    </div>
  `).join("");
}

function renderWhyMe() {
  const c = document.getElementById("why-me-grid");
  if (!c) return;
  c.innerHTML = PORTFOLIO_DATA.whyMe.map(w => `
    <div class="glass-card p-8 text-center group reveal">
      <div class="w-14 h-14 mx-auto rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 text-xl">
        <i class="fa-solid ${w.icon}"></i>
      </div>
      <h3 class="font-bold text-white mb-3 text-lg">${w.title}</h3>
      <p class="text-sm text-gray-400 leading-relaxed">${w.desc}</p>
    </div>
  `).join("");
}

function renderReviews() {
  const t = document.getElementById("reviews-track");
  if (!t) return;
  const items = PORTFOLIO_DATA.testimonials.map(r => `
    <div class="glass-card p-8 review-card group cursor-default">
      <div class="flex gap-1 text-yellow-400 text-sm mb-4">
        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
      </div>
      <p class="text-gray-300 text-sm leading-relaxed mb-6 italic">"${r.text}"</p>
      <div class="flex items-center gap-4 mt-auto">
        <div class="w-10 h-10 rounded-full bg-blue-500/20 text-blue-300 flex items-center justify-center font-bold">
          ${r.name.charAt(0)}
        </div>
        <div>
          <h4 class="text-white font-bold text-sm">${r.name}</h4>
          <p class="text-gray-500 text-xs uppercase tracking-wider">${r.role}</p>
        </div>
      </div>
    </div>
  `).join("");
  t.innerHTML = items + items; // Duplicate for endless loop
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
      <img src="${p.image}" alt="${p.title}" loading="lazy"/>
      <div class="absolute inset-0 portfolio-overlay flex flex-col justify-end p-6">
        <span class="text-[10px] font-bold tracking-widest text-gray-300 uppercase mb-2">${p.category}</span>
        <h3 class="font-bold text-white text-2xl mb-4 tracking-tight">${p.title}</h3>
        <button class="btn-primary self-start text-xs py-2 px-5 font-bold">View Project</button>
      </div>
    </div>
  `).join("");
  
  // Re-init reveal observer for new elements
  initScrollAnimations();
}

function initFilters() {
  document.querySelectorAll(".filter-btn").forEach(b => {
    b.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(x => x.classList.remove("active"));
      b.classList.add("active");
      currentFilter = b.dataset.filter;
      
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
    if (window.scrollY > 50) nav.classList.add("nav-fixed", "py-3");
    else nav.classList.remove("nav-fixed", "py-3");
  });
  if (tog && dr) {
    tog.addEventListener("click", () => dr.classList.toggle("hidden"));
    dr.querySelectorAll("a").forEach(a => a.addEventListener("click", () => dr.classList.add("hidden")));
  }
}

function initSearch() {
  const searchInputs = document.querySelectorAll(".search-input");
  searchInputs.forEach(input => {
    
    // Listen for ENTER to scroll to relevant sections
    input.addEventListener("keydown", (e) => {
      if(e.key === "Enter") {
        e.preventDefault();
        const term = e.target.value.toLowerCase().trim();
        
        const sections = {
          "skill": "#skills", "software": "#software", "photoshop": "#software", "illustrator": "#software", 
          "canva": "#software", "premiere": "#software", "after effects": "#software",
          "about": "#about", "experience": "#about", "service": "#services", "contact": "#contact", 
          "project": "#projects", "portfolio": "#projects", "process": "#process", "why": "#why-me"
        };
        
        let found = "#projects"; // fallback
        for(let key in sections) {
           if(term.includes(key)) { found = sections[key]; break; }
        }
        
        const targetEl = document.querySelector(found);
        if(targetEl) {
           window.scrollTo({ top: targetEl.offsetTop - 80, behavior: 'smooth' });
           // If mobile menu is open, close it
           const dr = document.getElementById("menu-drawer");
           if(dr && !dr.classList.contains("hidden")) dr.classList.add("hidden");
        }
      }
    });

    input.addEventListener("input", (e) => {
      const term = e.target.value.trim();
      searchInputs.forEach(inp => { if(inp !== e.target) inp.value = term; });
      
      if (term.length > 0) {
        document.querySelectorAll(".filter-btn").forEach(x => x.classList.remove("active"));
        const allBtn = document.querySelector('.filter-btn[data-filter="all"]');
        if(allBtn) allBtn.classList.add("active");
        currentFilter = "all";
      }
      
      renderPortfolio("all", term);
    });
  });
}

function animateCounters() {
  const counters = document.querySelectorAll('.counter-val');
  const speed = 100;
  counters.forEach(counter => {
    if(counter.dataset.animated) return;
    
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const inc = target / speed;
      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
        counter.dataset.animated = "true";
      }
    };
    updateCount();
  });
}

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        if(entry.target.querySelector('.counter-val') || entry.target.classList.contains('counter-val')) {
          animateCounters();
        }
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

  document.querySelectorAll(".reveal").forEach(el => {
    // Only observe elements that haven't been animated yet
    if(!el.classList.contains("active")) {
        observer.observe(el);
    }
  });
}

window.openProject = function(id) {
  const p = PORTFOLIO_DATA.portfolio.find(x => x.id === id);
  if (!p) return;
  alert("Viewing Project:\n\nTitle: " + p.title + "\nCategory: " + p.category);
};