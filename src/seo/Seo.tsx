import { Helmet } from "react-helmet-async";
import { SITE, absoluteUrl } from "./seo.config";
import type { PageSeo } from "./seo.config";

type Props = {
  seo: PageSeo;
  /** Optional JSON-LD object(s) to inject for this page. */
  jsonLd?: object | object[];
};

export default function Seo({ seo, jsonLd }: Props) {
  const canonical = absoluteUrl(seo.path);
  const image = seo.image || SITE.ogImage;
  const type = seo.type || "website";
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet prioritizeSeoTags>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={SITE.locale} />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={image} />
      {SITE.twitter && <meta name="twitter:creator" content={SITE.twitter} />}

      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
