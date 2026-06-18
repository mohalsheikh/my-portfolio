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
    tagline: "A daily, cross-platform music social network",
    description:
      "A production social app built on one structural insight: the incumbents can't ship cross-platform music sharing because their business depends on locking you in. OFFBEAT is the neutral layer between them — a daily \"share the one song you're on\" ritual where a Spotify listener and an Apple Music listener finally share the same track, resolved across providers with graceful fallback for catalog gaps. Built solo in Flutter on a Firebase backend: dual feeds (friends + campus), school-email-verified campus communities, real-time messaging with presence, a full FCM notification pipeline, multi-provider song resolution (Spotify / Apple Music / Deezer / iTunes), scheduled Cloud Functions for daily prompts and weekly recaps, and a complete moderation stack. Shipped end-to-end and tested with real users. Co-founded with Eliza Pepper.",
    stack: ["Flutter", "Dart", "Firebase", "Cloud Functions", "TypeScript", "Spotify API", "Apple Music API", "FCM"],
    year: "2024",
    role: "Co-Founder & Full-Stack Engineer (with Eliza Pepper)",
    category: "Mobile · Social Platform",
    accent: "🎧",
    featured: true,
    highlights: [
      "Cross-platform song resolution across Spotify, Apple Music, Deezer & iTunes, with fallback for catalog mismatches",
      "Dual-feed architecture: a personal friends feed and a school-email-verified campus feed",
      "Real-time messaging with presence, read receipts, typing indicators & FCM push",
      "Scheduled Cloud Functions (TypeScript) powering daily prompts, weekly campus recaps & stats",
      "Clean layered Flutter architecture — separated models, providers, services & feature modules",
      "Full safety system: reporting, blocking, content moderation & privacy controls",
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
