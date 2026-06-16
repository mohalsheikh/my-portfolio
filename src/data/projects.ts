export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  year: string;
  role: string;
  category: string;
  source?: string;
  live?: string;
  featured?: boolean;
  accent: string; // emoji/glyph
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "visionassist",
    title: "VisionAssist AI",
    tagline: "Smart glasses that narrate the world for the blind",
    description:
      "AI-powered wearable combining custom-trained computer vision, real-time object detection, ASL recognition, OCR and voice-guided navigation — helping visually impaired users move through the world independently. My senior capstone.",
    stack: ["Python", "YOLOv8", "MediaPipe", "OpenCV", "PyTorch", "ESP32"],
    year: "2025",
    role: "Lead Engineer & Architect",
    category: "Capstone · Assistive AI",
    source: "https://github.com/mohalsheikh/visionassist",
    featured: true,
    accent: "🦾",
    highlights: [
      "600+ object classes at 25+ FPS on-device",
      "ASL interpreter: A–Z, 0–9, and 50+ signs",
      "Hybrid OCR pipeline with reading-order logic",
      "3D-printed frame + ESP32 sensor co-processor",
    ],
  },
  {
    slug: "halllink",
    title: "HallLink",
    tagline: "The student-housing super-app",
    description:
      "A campus housing platform connecting residents with RAs, events, interactive maps, safety tools and an AI chatbot. Presented at CBU's Innovation Challenge, where it earned recognition and a prize.",
    stack: ["Swift", "Firebase", "Python", "JavaScript"],
    year: "2025",
    role: "Designer & Developer",
    category: "Mobile · Innovation Challenge",
    source: "https://github.com/mohalsheikh/lancer-Arms-app",
    accent: "🏛️",
    highlights: [
      "Finalist + prize at CBU Innovation Challenge",
      "RA duty schedules & resident resources",
      "Interactive housing map + safety toolkit",
      "Built-in AI chatbot for student support",
    ],
  },
  {
    slug: "soundtrack",
    title: "OFFBEAT",
    tagline: "The daily music ritual that ignores the walled gardens",
    description:
      "A social music app built on one idea the incumbents structurally can't ship: share the song you're living to today with anyone — regardless of whether they're on Spotify or Apple Music. Spotify and Apple keep sharing inside their own walls by design; OFFBEAT is the neutral layer between them. Every shared track resolves across services with graceful fallback, so a Spotify listener and an Apple Music listener finally share the same song. A complete, shipped product — cross-platform feed, friend graph, real-time messaging, push, and home-screen widgets — built and tested end-to-end with co-founder Eliza Pepper.",
    stack: ["Flutter", "Firebase", "Spotify API", "Apple Music API", "FCM", "React"],
    year: "2024",
    role: "Co-Founder & Full-Stack Engineer (with Eliza Pepper)",
    category: "Mobile · Social",
    accent: "🎧",
    featured: true,
    highlights: [
      "Cross-platform song resolution — share Spotify ↔ Apple Music, with fallback for catalog gaps",
      "Daily one-song social feed with friend graph and mentions",
      "Real-time messaging: read receipts, typing indicators, FCM push",
      "iOS home-screen widgets + React admin dashboard",
      "Shipped MVP — full feature set, validated with real testers",
    ],
  },
  {
    slug: "room-finder",
    title: "CBU Empty Room Finder",
    tagline: "Find an open study room in real time",
    description:
      "A Flutter app that helps CBU students locate available study rooms in real time, powered by crowdsourced check-ins and a Firebase backend with cloud functions.",
    stack: ["Flutter", "Firebase", "Cloud Functions"],
    year: "2024",
    role: "Solo Developer",
    category: "Mobile · Utility",
    accent: "🗺️",
    highlights: [
      "Realtime room availability",
      "Crowdsourced check-in model",
      "Cloud Functions backend",
      "Built for everyday campus use",
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
