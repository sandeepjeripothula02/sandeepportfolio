const PORTFOLIO_DATA = {
  profile: {
    name: "SANDEEP",
    title: "Graphic Designer & Video Editor",
    tagline: "I turn ideas into powerful visuals, brands into experiences, and videos into stories.",
    intro: "Creative Graphic Designer and Video Editor specializing in branding, social media creatives, thumbnails, posters, digital designs, short-form videos, and full-length video editing.",
    email: "sandeepjeripothula8@gmail.com",
    phone: "+91 9545382894",
    phoneRaw: "919545382894",
    whatsapp: "https://wa.me/919545382894?text=Hi%20Sandeep,%20I%20saw%20your%20portfolio%20and%20want%20to%20discuss%20a%20creative%20project!",
    stats: [
      { value: "30+", label: "Clients Served" },
      { value: "500+", label: "Projects Done" },
      { value: "5+", label: "Years Experience" },
      { value: "99%", label: "On-Time Delivery" }
    ]
  },

  skills: [
    { name: "Adobe Photoshop", short: "Ps", color: "#31A8FF", level: 98 },
    { name: "Adobe Illustrator", short: "Ai", color: "#FF9A00", level: 95 },
    { name: "Adobe Premiere Pro", short: "Pr", color: "#EA77FF", level: 96 },
    { name: "Adobe After Effects", short: "Ae", color: "#9999FF", level: 92 },
    { name: "Canva Pro", short: "Cv", color: "#00C4CC", level: 95 },
    { name: "DaVinci Resolve", short: "Dv", color: "#FF5E62", level: 88 }
  ],

  services: [
    { id: "graphic-design", title: "Graphic Design", icon: "fa-palette", desc: "Professional digital creatives, advertisements and visual content for brands." },
    { id: "social-media", title: "Social Media Designs", icon: "fa-share-nodes", desc: "Engaging Instagram, Facebook, and social media creatives." },
    { id: "posters", title: "Poster Design", icon: "fa-image", desc: "Creative posters for events, products, and promotions." },
    { id: "thumbnails", title: "YouTube Thumbnails", icon: "fa-bolt", desc: "High-CTR, visually engaging YouTube thumbnails." },
    { id: "branding", title: "Branding & Identity", icon: "fa-crown", desc: "Complete brand identity systems with logos and guidelines." },
    { id: "advertisements", title: "Advertisements", icon: "fa-bullhorn", desc: "Digital ad creatives for marketing campaigns." },
    { id: "video-editing", title: "Video Editing", icon: "fa-film", desc: "Professional editing for YouTube, reels, and promotional videos." },
    { id: "short-videos", title: "Short Videos / Reels", icon: "fa-mobile-screen", desc: "Fast-paced reels, shorts, and vertical video content." },
    { id: "full-length", title: "Full-Length Videos", icon: "fa-video", desc: "Long-form YouTube videos, documentaries, and commercials." },
    { id: "motion-graphics", title: "Motion Graphics", icon: "fa-wand-magic-sparkles", desc: "Smooth animations, intros, transitions, and VFX." }
  ],

  portfolio: [
    { id: "p1", title: "Luxury Brand Identity", category: "Branding", image: "assets/images/branding_mockup.jpg", client: "Aurelia Luxe Paris", year: "2024" },
    { id: "p2", title: "Viral Tech YouTube Thumbnail", category: "Thumbnails", image: "assets/images/thumbnail_mockup.jpg", client: "TechVision Channel", year: "2024" },
    { id: "p3", title: "Swiss Exhibition Poster", category: "Posters", image: "assets/images/poster_mockup.jpg", client: "Zurich Art Showcase", year: "2024" },
    { id: "p4", title: "4K Commercial Edit & Color Grade", category: "Video Editing", image: "assets/images/video_editing_mockup.jpg", client: "Apex Velocity Auto", year: "2024" },
    { id: "p5", title: "Streetwear Social Campaign", category: "Social Media", image: "assets/images/social_mockup.jpg", client: "Veer Streetwear", year: "2024" },
    { id: "p6", title: "3D Motion Graphics Intro", category: "Motion Graphics", image: "assets/images/motion_mockup.jpg", client: "Visions Media", year: "2024" },
    { id: "p7", title: "Fitness Brand Reels Package", category: "Short Videos", image: "assets/images/video_editing_mockup.jpg", client: "Apex Athletics", year: "2024" },
    { id: "p8", title: "Architecture Brand Guidelines", category: "Branding", image: "assets/images/branding_mockup.jpg", client: "Zenith Studio", year: "2024" },
    { id: "p9", title: "AI Series Thumbnail Pack", category: "Thumbnails", image: "assets/images/thumbnail_mockup.jpg", client: "Futurism Pulse", year: "2024" },
    { id: "p10", title: "Cyberpunk Film Festival Poster", category: "Posters", image: "assets/images/poster_mockup.jpg", client: "Indie Cinema Guild", year: "2023" },
    { id: "p11", title: "Beverage Ad Campaign", category: "Advertisements", image: "assets/images/social_mockup.jpg", client: "Horizon Drinks", year: "2024" },
    { id: "p12", title: "Documentary Long-Form Edit", category: "Full-Length Videos", image: "assets/images/video_editing_mockup.jpg", client: "Crypto Titans", year: "2024" }
  ],

  reviews: [
    { name: "Arjun Mehta", role: "Startup Founder", rating: 5, text: "Sandeep delivered exceptional branding work for our startup. The logo, brand guidelines, and social media templates were all world-class. Highly recommended!", avatar: "AM" },
    { name: "Priya Sharma", role: "YouTube Creator (1.2M)", rating: 5, text: "My thumbnails went from 4% to 14% CTR after working with Sandeep. He understands what makes people click. Absolute game-changer for my channel!", avatar: "PS" },
    { name: "Rahul Verma", role: "Marketing Director", rating: 5, text: "We needed 50+ social media creatives in 2 weeks. Sandeep delivered on time, on brand, and beyond our expectations. Our engagement increased by 340%.", avatar: "RV" },
    { name: "Sneha Reddy", role: "E-Commerce Owner", rating: 4, text: "The product videos and reels Sandeep created drove our online sales up significantly. Professional editing, great communication, fast turnaround.", avatar: "SR" },
    { name: "Vikram Singh", role: "Film Producer", rating: 5, text: "Sandeep's color grading and editing skills are on another level. He turned raw footage into a cinematic masterpiece. Will definitely work together again!", avatar: "VS" },
    { name: "Ananya Iyer", role: "Brand Consultant", rating: 5, text: "From concept to delivery, Sandeep was professional, creative, and reliable. The poster designs he created received multiple awards at industry events.", avatar: "AI" }
  ],

  overallScore: { score: "4.9", total: "5", label: "Client Satisfaction Score", reviewCount: "30+" },

  process: [
    { step: "01", title: "Understand", desc: "Deep dive into your brand, goals, and creative vision.", icon: "fa-compass" },
    { step: "02", title: "Create", desc: "Develop concepts, drafts, and initial creative direction.", icon: "fa-paintbrush" },
    { step: "03", title: "Refine", desc: "Polish every detail — colors, typography, pacing, effects.", icon: "fa-sliders" },
    { step: "04", title: "Deliver", desc: "Export high-resolution files ready for all platforms.", icon: "fa-circle-check" }
  ]
};