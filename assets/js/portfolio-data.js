// Sandeep - Senior Graphic Designer & Video Editor Portfolio Data

const PORTFOLIO_DATA = {
  profile: {
    name: "SANDEEP",
    title: "Graphic Designer & Video Editor",
    tagline: "I turn ideas into powerful visuals, brands into experiences, and videos into stories.",
    intro: "Creative Graphic Designer and Video Editor specializing in branding, social media creatives, thumbnails, posters, digital designs, short-form videos, and full-length video editing.",
    email: "sandeepjeripothula8@gmail.com",
    location: "India • Available Worldwide",
    experienceYears: "5+ Years",
    stats: [
      { label: "Clients", value: "30+", subtext: "Served across diverse industries" },
      { label: "Projects Completed", value: "500+", subtext: "Creative designs & video edits" },
      { label: "Disciplines", value: "Design + Video", subtext: "Complete visual storytelling" },
      { label: "Pillars", value: "Creative • Pro", subtext: "Reliable & client-focused" }
    ],
    badges: ["Creative", "Professional", "Reliable", "Fast Turnaround", "High-End Quality"]
  },

  skills: {
    software: [
      {
        name: "Adobe Photoshop",
        short: "Ps",
        color: "#31A8FF",
        glow: "rgba(49, 168, 255, 0.4)",
        category: "Graphic Design",
        level: "Master / 98%",
        icon: "fa-solid fa-image",
        desc: "Advanced photo manipulation, high-CTR YouTube thumbnails, digital art, poster design, and lighting composition."
      },
      {
        name: "Adobe Illustrator",
        short: "Ai",
        color: "#FF9A00",
        glow: "rgba(255, 154, 0, 0.4)",
        category: "Graphic Design",
        level: "Advanced / 95%",
        icon: "fa-solid fa-bezier-curve",
        desc: "Vector branding, logo marks, iconography, scalable typography, packaging, and commercial vector assets."
      },
      {
        name: "Adobe Premiere Pro",
        short: "Pr",
        color: "#EA77FF",
        glow: "rgba(234, 119, 255, 0.4)",
        category: "Video Editing",
        level: "Master / 96%",
        icon: "fa-solid fa-video",
        desc: "Multitrack cinematic video editing, pacing & narrative storytelling, sound design, and color grading."
      },
      {
        name: "Adobe After Effects",
        short: "Ae",
        color: "#9999FF",
        glow: "rgba(153, 153, 255, 0.4)",
        category: "Video Editing",
        level: "Advanced / 92%",
        icon: "fa-solid fa-wand-magic-sparkles",
        desc: "Kinetic typography, 2D/3D motion graphics, visual effects, logo animations, and smooth transitions."
      },
      {
        name: "Canva",
        short: "Cv",
        color: "#00C4CC",
        glow: "rgba(0, 196, 204, 0.4)",
        category: "Graphic Design",
        level: "Expert / 95%",
        icon: "fa-solid fa-cubes",
        desc: "Rapid social media templates, marketing collateral, presentation decks, and brand kit systems."
      },
      {
        name: "DaVinci Resolve",
        short: "Dv",
        color: "#FF5E62",
        glow: "rgba(255, 94, 98, 0.4)",
        category: "Video Editing",
        level: "Proficient / 88%",
        icon: "fa-solid fa-sliders",
        desc: "Cinematic color grading, LUT creation, dynamic range balancing, and waveform monitoring."
      }
    ],
    graphicDesignList: [
      { name: "Adobe Photoshop", highlight: true },
      { name: "Adobe Illustrator", highlight: true },
      { name: "Canva", highlight: true },
      { name: "Branding", highlight: false },
      { name: "Social Media Designs", highlight: false },
      { name: "Posters", highlight: false },
      { name: "Thumbnails", highlight: false },
      { name: "Advertisements", highlight: false },
      { name: "Digital Creatives", highlight: false }
    ],
    videoEditingList: [
      { name: "Adobe Premiere Pro", highlight: true },
      { name: "Adobe After Effects", highlight: true },
      { name: "Short Videos", highlight: false },
      { name: "Reels", highlight: false },
      { name: "YouTube Videos", highlight: false },
      { name: "Promotional Videos", highlight: false },
      { name: "Full-Length Videos", highlight: false },
      { name: "Motion Graphics", highlight: false },
      { name: "Video Advertisements", highlight: false }
    ]
  },

  services: [
    {
      id: "graphic-design",
      number: "01",
      title: "Graphic Design",
      tagline: "High-impact visual content",
      desc: "Professional digital creatives, advertisements and visual content.",
      deliverables: ["Digital ad creatives", "Banner graphics", "Marketing materials", "Web & print assets"],
      icon: "fa-solid fa-palette",
      gradient: "from-blue-600/20 to-indigo-600/10",
      accentColor: "#3b82f6",
      image: "assets/images/branding_mockup.jpg"
    },
    {
      id: "youtube-thumbnails",
      number: "02",
      title: "YouTube Thumbnails",
      tagline: "High-click & engaging",
      desc: "High-click, visually engaging and professional thumbnails.",
      deliverables: ["High-contrast 1080p renders", "3D typography elements", "Expression & lighting polish", "Click-rate optimization"],
      icon: "fa-solid fa-bolt",
      gradient: "from-amber-600/20 to-orange-600/10",
      accentColor: "#f59e0b",
      image: "assets/images/thumbnail_mockup.jpg"
    },
    {
      id: "poster-design",
      number: "03",
      title: "Poster Design",
      tagline: "Creative & artistic",
      desc: "Creative posters for brands, products, events and promotions.",
      deliverables: ["Event & concert posters", "Product launch graphics", "Print-ready CMYK files", "Social teaser versions"],
      icon: "fa-solid fa-panorama",
      gradient: "from-rose-600/20 to-pink-600/10",
      accentColor: "#f43f5e",
      image: "assets/images/poster_mockup.jpg"
    },
    {
      id: "social-media",
      number: "04",
      title: "Social Media Design",
      tagline: "Engaging social creatives",
      desc: "Professional Instagram, Facebook and other social media creatives.",
      deliverables: ["Instagram carousels", "Story & post packs", "Meta & TikTok ad creatives", "Grid aesthetic curation"],
      icon: "fa-solid fa-share-nodes",
      gradient: "from-purple-600/20 to-fuchsia-600/10",
      accentColor: "#a855f7",
      image: "assets/images/social_mockup.jpg"
    },
    {
      id: "branding",
      number: "05",
      title: "Branding & Visual Identity",
      tagline: "Modern brand visuals",
      desc: "Modern brand visuals designed to create a strong identity.",
      deliverables: ["Primary & secondary logos", "Brand guideline book", "Stationery & business cards", "Vector source files"],
      icon: "fa-solid fa-crown",
      gradient: "from-emerald-600/20 to-teal-600/10",
      accentColor: "#10b981",
      image: "assets/images/branding_mockup.jpg"
    },
    {
      id: "video-editing",
      number: "06",
      title: "Video Editing",
      tagline: "Reels, shorts & full-length",
      desc: "Professional editing for reels, shorts, promotional videos and full-length content.",
      deliverables: ["YouTube long-form cuts", "Viral Shorts & Reels (9:16)", "Podcast multi-cam edits", "Seamless sound design"],
      icon: "fa-solid fa-scissors",
      gradient: "from-cyan-600/20 to-blue-600/10",
      accentColor: "#06b6d4",
      image: "assets/images/video_editing_mockup.jpg"
    },
    {
      id: "motion-graphics",
      number: "07",
      title: "Motion Graphics",
      tagline: "Smooth animations & VFX",
      desc: "Smooth animations, visual effects, transitions and engaging motion graphics.",
      deliverables: ["Logo animations & stingers", "Kinetic typography", "Lower thirds & stream overlays", "Infographic animations"],
      icon: "fa-solid fa-wave-square",
      gradient: "from-violet-600/20 to-purple-600/10",
      accentColor: "#8b5cf6",
      image: "assets/images/motion_mockup.jpg"
    },
    {
      id: "video-ads",
      number: "08",
      title: "Advertisement Videos",
      tagline: "Creative promo videos",
      desc: "Creative promotional videos designed for businesses and digital marketing.",
      deliverables: ["Direct-response video ads", "E-commerce product showcases", "App promo trailers", "Multi-format exports"],
      icon: "fa-solid fa-bullhorn",
      gradient: "from-indigo-600/20 to-sky-600/10",
      accentColor: "#6366f1",
      image: "assets/images/video_editing_mockup.jpg"
    }
  ],

  portfolio: [
    {
      id: "p1",
      title: "Aurélia Luxe — Haute Parfumerie Brand Identity",
      category: "Branding",
      categoryDisplay: "Branding & Visual Identity",
      filterGroup: "branding",
      image: "assets/images/branding_mockup.jpg",
      tags: ["Branding", "Packaging", "Stationery", "Adobe Illustrator", "Photoshop"],
      aspect: "wide",
      client: "Aurélia Luxe Paris",
      year: "2024",
      description: "Complete visual identity and luxury packaging design for high-end fragrance and cosmetic label based in Paris. Created custom gold-foil embossed typography, minimal matte black packaging, stationery, and premium product presentation guidelines.",
      metrics: "340% increase in brand perception survey • Featured on Behance Curation",
      tools: ["Adobe Illustrator", "Photoshop", "Dimension 3D"],
      featured: true
    },
    {
      id: "p2",
      title: "Secret Unlocked — Viral Tech YouTube Thumbnail",
      category: "Thumbnails",
      categoryDisplay: "YouTube Thumbnail",
      filterGroup: "thumbnails",
      image: "assets/images/thumbnail_mockup.jpg",
      tags: ["Thumbnails", "High CTR", "3D Typography", "Adobe Photoshop"],
      aspect: "wide",
      client: "TechVision Channel (1.8M Subs)",
      year: "2024",
      description: "Engineered a high-CTR YouTube thumbnail for a breakthrough tech mystery documentary. Designed glowing 3D bevel typography, cyberpunk UI overlays, and dramatic rim-lit creator portrait.",
      metrics: "14.8% Initial CTR • 2.4M+ Total Organic Views",
      tools: ["Adobe Photoshop", "Lightroom"],
      featured: true
    },
    {
      id: "p3",
      title: "Avant-Garde Swiss Creative Exhibition Poster",
      category: "Posters",
      categoryDisplay: "Poster Design",
      filterGroup: "posters",
      image: "assets/images/poster_mockup.jpg",
      tags: ["Posters", "Swiss Typography", "Graphic Design", "Exhibition"],
      aspect: "tall",
      client: "Zürich Art & Design Showcase",
      year: "2024",
      description: "Commissioned exhibition poster blending Swiss International Typographic style with vibrant neon parametric fluid dynamics and abstract 3D geometry.",
      metrics: "Printed & displayed across 40+ exhibition gallery spaces",
      tools: ["Adobe Illustrator", "Photoshop"],
      featured: true
    },
    {
      id: "p4",
      title: "Tokyo Night Supercar — 4K Commercial Color Grade & Edit",
      category: "Video Editing",
      categoryDisplay: "Video Editing & Color Grading",
      filterGroup: "video-editing",
      image: "assets/images/video_editing_mockup.jpg",
      tags: ["Video Editing", "Premiere Pro", "Color Grading", "Commercial"],
      aspect: "wide",
      client: "Apex Velocity Automotive",
      year: "2024",
      description: "Full-length cinematic promotional video edit featuring an anamorphic supercar racing through Tokyo's rain-soaked Shibuya crossing. Handled multi-cam cutdowns, custom LUT color grading, motion blur, and spatial audio mastering.",
      metrics: "4.5M+ Reach across YouTube & Instagram • 98% Positive viewer sentiment",
      tools: ["Adobe Premiere Pro", "DaVinci Resolve", "After Effects"],
      featured: true
    },
    {
      id: "p5",
      title: "Elevate Your Rhythm — Streetwear & Audio Social Campaign",
      category: "Social Media",
      categoryDisplay: "Social Media Design",
      filterGroup: "social-media",
      image: "assets/images/social_mockup.jpg",
      tags: ["Social Media", "E-Commerce", "Product Ad", "Digital Creatives"],
      aspect: "square",
      client: "Veer Streetwear & Sync Audio",
      year: "2024",
      description: "High-converting multi-platform social media ad creative designed for an exclusive sneaker and wireless headphone launch. Dynamic diagonal layout with floating neon particles and glassmorphic badge accents.",
      metrics: "4.8x Return on Ad Spend (ROAS) on Meta Ads",
      tools: ["Photoshop", "Illustrator"],
      featured: true
    },
    {
      id: "p6",
      title: "Motion Visions — 3D Holographic Particle Explosion",
      category: "Motion Graphics",
      categoryDisplay: "Motion Graphics & VFX",
      filterGroup: "motion-graphics",
      image: "assets/images/motion_mockup.jpg",
      tags: ["Motion Graphics", "After Effects", "3D Animation", "Particles"],
      aspect: "wide",
      client: "Visions Media Network",
      year: "2024",
      description: "Engaging 3D kinetic motion graphics intro sequence with exploding neon geometric geodes, particle simulation, and glowing typography reveal.",
      metrics: "Used as official broadcast title sequence for 50+ episodes",
      tools: ["Adobe After Effects", "Cinema 4D", "Trapcode Particular"],
      featured: true
    },
    {
      id: "p7",
      title: "Apex Fitness — High Energy Reels & Short-Form Edits",
      category: "Video Editing",
      categoryDisplay: "Reels & Short-Form Video",
      filterGroup: "video-editing",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
      tags: ["Short Videos", "Reels", "Sound Design", "Premiere Pro"],
      aspect: "tall",
      client: "Apex Pro Athletics",
      year: "2024",
      description: "Fast-paced workout reels edited with dynamic speed ramping, beat-synced sound effects, custom kinetic captions, and punchy transitions.",
      metrics: "Generated over 8.2M views across 12 short reels",
      tools: ["Adobe Premiere Pro", "After Effects"],
      featured: false
    },
    {
      id: "p8",
      title: "Zenith Architecture — Minimalist Brand Identity & Guidelines",
      category: "Branding",
      categoryDisplay: "Branding & Visual Identity",
      filterGroup: "branding",
      image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80",
      tags: ["Branding", "Logo Design", "Guidelines", "Vector"],
      aspect: "wide",
      client: "Zenith Architecture Studio",
      year: "2024",
      description: "Sophisticated brand identity system featuring a geometric monogram, bespoke architectural typography, and comprehensive brand guideline book.",
      metrics: "Complete brand rollout across 3 international offices",
      tools: ["Adobe Illustrator", "Photoshop", "InDesign"],
      featured: false
    },
    {
      id: "p9",
      title: "AI Revolution — Creator YouTube Thumbnail Package",
      category: "Thumbnails",
      categoryDisplay: "YouTube Thumbnail",
      filterGroup: "thumbnails",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      tags: ["Thumbnails", "Digital Art", "Color Theory", "Photoshop"],
      aspect: "wide",
      client: "Futurism Pulse (650K Subs)",
      year: "2024",
      description: "Package of 8 high-retention thumbnails designed for a deep-dive AI technology series. High contrast color psychology and 3D object composition.",
      metrics: "Average 12.4% CTR across the entire series",
      tools: ["Adobe Photoshop", "Lightroom"],
      featured: false
    },
    {
      id: "p10",
      title: "Neon Cyberpunk Film Festival — Screenplay Poster",
      category: "Posters",
      categoryDisplay: "Poster Design",
      filterGroup: "posters",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80",
      tags: ["Posters", "Graphic Design", "Digital Art", "Cyberpunk"],
      aspect: "tall",
      client: "Indie Cinema Guild",
      year: "2023",
      description: "Key art poster design for independent sci-fi thriller festival. Multi-layered optical flares, retro-futuristic grid typography, and custom textures.",
      metrics: "Winner of Best Key Art Poster at Indie Film Awards",
      tools: ["Adobe Photoshop", "Illustrator"],
      featured: false
    },
    {
      id: "p11",
      title: "Horizon Beverages — Product Ad Campaign Graphics",
      category: "Graphic Design",
      categoryDisplay: "Digital Creatives & Advertisements",
      filterGroup: "graphic-design",
      image: "https://images.unsplash.com/photo-1556742049-0a67e55722c6?auto=format&fit=crop&w=1200&q=80",
      tags: ["Graphic Design", "Advertisements", "Digital Creatives", "Photoshop"],
      aspect: "square",
      client: "Horizon Natural Drinks",
      year: "2024",
      description: "Set of vibrant digital ad creatives and social graphics showcasing organic fruit beverages with splash effects and crisp product lighting.",
      metrics: "62% increase in online store click-throughs",
      tools: ["Adobe Photoshop", "Illustrator"],
      featured: false
    },
    {
      id: "p12",
      title: "Crypto Titans — YouTube Show Long-Form Video Edit",
      category: "Video Editing",
      categoryDisplay: "YouTube Long-Form Edit",
      filterGroup: "video-editing",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80",
      tags: ["Full-Length Videos", "Motion Graphics", "Premiere Pro", "Pacing"],
      aspect: "wide",
      client: "Crypto Titans Media",
      year: "2024",
      description: "35-minute documentary-style video edit with immersive stock footage curation, lower-third data graphics, dynamic sound effects, and podcast switching.",
      metrics: "Over 850,000 views with an average watch time of 68%",
      tools: ["Adobe Premiere Pro", "After Effects", "Audition"],
      featured: false
    }
  ],

  process: [
    {
      step: "01",
      title: "Understand",
      summary: "Understand the brand, idea and requirements.",
      desc: "Understand the brand, idea and requirements. We begin with an in-depth creative briefing. I analyze your target audience, brand aesthetic, content goals, and reference benchmarks to establish a crystal-clear creative direction.",
      icon: "fa-solid fa-compass",
      highlights: ["Client vision & goals", "Audience research", "Visual moodboard", "Project timeline"]
    },
    {
      step: "02",
      title: "Create",
      summary: "Develop creative concepts and visual direction.",
      desc: "Develop creative concepts and visual direction. Turning concepts into compelling visual reality. Developing initial drafts, rough cuts, storyboards, color palettes, and typographic compositions aligned with the brief.",
      icon: "fa-solid fa-paintbrush",
      highlights: ["Rough edits & assembly", "Design drafts & mockups", "Typography & color schemes", "Initial client review"]
    },
    {
      step: "03",
      title: "Refine",
      summary: "Improve details, composition, colors and overall presentation.",
      desc: "Improve details, composition, colors and overall presentation. Polishing every detail to perfection. Fine-tuning color grading, frame-by-frame pacing, audio mixing, visual effects, lighting balance, and visual hierarchy.",
      icon: "fa-solid fa-sliders",
      highlights: ["Color grading & LUTs", "Sound design & mix", "Micro-typography polish", "Seamless revisions"]
    },
    {
      step: "04",
      title: "Deliver",
      summary: "Deliver polished, professional and ready-to-use creative content.",
      desc: "Deliver polished, professional and ready-to-use creative content. Delivering high-resolution master files formatted perfectly for your platforms (4K video exports, vector SVGs, print-ready CMYK, and organized source packages).",
      icon: "fa-solid fa-circle-check",
      highlights: ["4K & Full HD master exports", "Vector & print-ready files", "Optimized social formats", "Organized project assets"]
    }
  ],

  whyChooseMe: [
    {
      title: "Creative Thinking",
      desc: "Unique visual concepts tailored to every project. I don't use generic cookie-cutter templates — every design and edit is engineered with distinct personality and impact.",
      icon: "fa-solid fa-lightbulb",
      tag: "Original Concepts"
    },
    {
      title: "Professional Quality",
      desc: "Attention to detail from concept to final delivery. Obsessive care for color calibration, typography kerning, audio balance, and frame-accurate pacing.",
      icon: "fa-solid fa-gem",
      tag: "Pixel Perfection"
    },
    {
      title: "Multi-Skilled",
      desc: "Graphic design, video editing, motion graphics and digital content seamlessly connected. A unified visual language across static and motion media.",
      icon: "fa-solid fa-layer-group",
      tag: "Full-Stack Visuals"
    },
    {
      title: "Reliable Delivery",
      desc: "Organized workflow and professional communication. Fast responses, clear milestones, and strict adherence to project deadlines without compromise.",
      icon: "fa-solid fa-stopwatch",
      tag: "100% On-Time"
    },
    {
      title: "Client-Focused",
      desc: "Designs created according to the client's goals and brand identity. Focused on viewer retention, click-through rates, and long-term brand equity.",
      icon: "fa-solid fa-crosshairs",
      tag: "Goal Oriented"
    }
  ],

  testimonials: [
    {
      name: "Marcus Vance",
      role: "Founder, Apex Velocity Automotive",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      content: "Sandeep's video editing and color grading transformed our car commercials into Hollywood-grade films. Our engagement spiked by over 300% on YouTube and Instagram!",
      rating: 5
    },
    {
      name: "Elena Rostova",
      role: "Creative Director, Aurélia Luxe Paris",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
      content: "Working with Sandeep on our brand identity was an absolute dream. He delivered packaging and stationery designs that look genuinely luxurious and sophisticated.",
      rating: 5
    },
    {
      name: "Aman Sharma",
      role: "Lead Creator, TechVision (1.8M Subscribers)",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      content: "Finding someone who excels at BOTH high-CTR YouTube thumbnails and fast-paced video editing is rare. Sandeep is now our go-to creative partner for all channel uploads.",
      rating: 5
    }
  ]
};