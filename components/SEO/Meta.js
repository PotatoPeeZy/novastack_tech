import Head from "next/head";

const Meta = ({ title, description, keywords, ogImage, pathName, schema }) => {
  const metaTitle = title || process.env.NEXT_PUBLIC_TITLE;
  const metaDescription = description || process.env.NEXT_PUBLIC_DESCRIPTION;
  const metaKeywords = keywords || process.env.NEXT_PUBLIC_kEYWORDS;
  const metaImage = ogImage || `${process.env.NEXT_PUBLIC_WEB_URL}/favicon.png`;
  const metaUrl = `${process.env.NEXT_PUBLIC_WEB_URL}${pathName || ""}`;

  return (
    <>
      {/* title */}
      <title>{metaTitle}</title>

      {/* Google / Search Engine Tags */}
      <meta name="name" content={process.env.NEXT_PUBLIC_WEB_URL} />
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="image" content={metaImage} />

      {/* Facebook Meta Tags */}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={process.env.NEXT_PUBLIC_WEB_URL} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:card" content="summary_large_image" />

      {/* Robots and Canonical */}
      <link rel="canonical" href={metaUrl} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="robots"
        content="index, follow,max-snippet:-1,max-video-preview:-1,max-image-preview:large"
      />

      {/* Only render schema when available */}
      {schema && (
        <script
          key="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
    </>
  );
};

export default Meta;
