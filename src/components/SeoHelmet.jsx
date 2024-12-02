import { Helmet } from "react-helmet-async";

export default function SEOHelmet({ title, description, name, type, keywords, canonicalLink }) {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Canonical link */}
      {canonicalLink && <link rel="canonical" href={canonicalLink} />}

      {/* Keywords */}
      {keywords && <meta name="keywords" content={Array.isArray(keywords) ? keywords.join(", ") : keywords} />}

      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {canonicalLink && <meta property="og:url" content={canonicalLink} />}

      {/* End Facebook tags */}

      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* End Twitter tags */}
    </Helmet>
  );
}
