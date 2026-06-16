// ───────────────────────────────────────────────────────────
//  Central SEO config. Edit your identity in ONE place.
// ───────────────────────────────────────────────────────────

export const SITE = {
  url: "https://moalsheikh.com",
  name: "Mohammed Alsheikh",
  shortName: "Mohammed Alsheikh",
  // Default social-share image (1200x630). Put the file in /public.
  ogImage: "https://moalsheikh.com/og-image.png",
  // A real photo of you (square works best for the Person schema).
  photo: "https://moalsheikh.com/mohammed.jpg",
  locale: "en_US",
  twitter: "", // add "@handle" if you make one; leave "" otherwise
  jobTitle: "Software Engineer",
  email: "moalsheikh2004@gmail.com",
  location: { city: "Riverside", region: "California", country: "US" },
  // Every profile that should point back to you. Strongest signal for name search.
  sameAs: [
    "https://github.com/mohalsheikh",
    "https://www.linkedin.com/in/moalsheikh/",
    "https://www.instagram.com/mo.alshe5/",
  ],
  alumniOf: "California Baptist University",
  knowsAbout: [
    "Software Engineering",
    "Artificial Intelligence",
    "Machine Learning",
    "Full-Stack Development",
    "React",
    "Flutter",
    "Firebase",
    "Computer Vision",
  ],
};

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article" | "profile";
};

// Per-route metadata. Keep titles < ~60 chars, descriptions < ~160.
export const PAGE_SEO: Record<string, PageSeo> = {
  home: {
    title: "Mohammed Alsheikh — Software Engineer & AI Builder",
    description:
      "Mohammed Alsheikh is a software engineer building production-grade apps and AI products — from assistive computer-vision wearables to social platforms. Riverside, CA.",
    path: "/",
    type: "profile",
  },
  about: {
    title: "About Mohammed Alsheikh — Engineer, Builder, Ex-Pro Athlete",
    description:
      "The story behind Mohammed Alsheikh: Software Engineering at CBU, former professional soccer player for Al-Wehdat SC, and a builder who's lived across three continents.",
    path: "/aboutme",
    type: "profile",
  },
  projects: {
    title: "Work & Projects — Mohammed Alsheikh",
    description:
      "Projects by Mohammed Alsheikh — VisionAssist AI smart glasses, HallLink campus super-app, OFFBEAT social music app, and more. AI, mobile, and full-stack engineering.",
    path: "/projects",
  },
  contact: {
    title: "Contact Mohammed Alsheikh",
    description:
      "Get in touch with Mohammed Alsheikh for roles, collaborations, and projects. Software engineer based in Riverside, California.",
    path: "/contact",
  },
};

export const absoluteUrl = (path: string) =>
  `${SITE.url}${path === "/" ? "" : path}`;
