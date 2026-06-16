import { SITE, absoluteUrl } from "./seo.config";
import type { Project } from "../data/projects";

// The Person schema — the strongest signal that "this site = Mohammed Alsheikh".
// Google uses this to connect your name, role, and profiles into one identity.
export const personSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE.url}/#person`,
  name: SITE.name,
  url: SITE.url,
  image: SITE.photo,
  jobTitle: SITE.jobTitle,
  email: `mailto:${SITE.email}`,
  description:
    "Software engineer building production-grade apps and AI products, including assistive computer-vision wearables and social platforms.",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: SITE.alumniOf,
  },
  homeLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.location.city,
      addressRegion: SITE.location.region,
      addressCountry: SITE.location.country,
    },
  },
  knowsAbout: SITE.knowsAbout,
  sameAs: SITE.sameAs,
});

// Tells Google the site itself is named after / about you.
export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.name,
  description: `Portfolio of ${SITE.name}, ${SITE.jobTitle}.`,
  publisher: { "@id": `${SITE.url}/#person` },
  inLanguage: "en-US",
});

// Breadcrumbs help Google render structured paths in results.
export const breadcrumbSchema = (
  items: { name: string; path: string }[]
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: absoluteUrl(it.path),
  })),
});

// Per-project schema for case-study pages.
export const projectSchema = (p: Project) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: p.title,
  headline: `${p.title} — ${p.tagline}`,
  description: p.description,
  url: absoluteUrl(`/projects/${p.slug}`),
  dateCreated: p.year,
  creator: { "@id": `${SITE.url}/#person` },
  keywords: p.stack.join(", "),
  ...(p.source ? { codeRepository: p.source } : {}),
});
