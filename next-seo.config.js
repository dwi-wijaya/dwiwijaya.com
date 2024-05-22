const canonicalUrl = 'https://dwiwijaya.vercel.app';
const metaImage =
  'https://firebasestorage.googleapis.com/v0/b/portfolio-dwiwijaya.appspot.com/o/meta-image.jpg?alt=media&token=45e644b5-1655-40e7-83b6-dc73bf3ecfa6';
const metaDescription =
  'Seasoned Software Engineer especially in Frontend side, with a passion for creating pixel-perfect web experiences';

const defaultSEOConfig = {
  defaultTitle: 'Dwi Wijaya - Personal Website',
  description: metaDescription,
  canonical: canonicalUrl,

  openGraph: {
    canonical: canonicalUrl,
    title: 'Dwi Wijaya - Personal Website',
    description: metaDescription,
    type: 'website',
    images: [
      {
        url: metaImage,
        alt: 'dwiwijaya.vercel.app og-image',
        width: 800,
        height: 600,
      },
      {
        url: metaImage,
        alt: 'dwiwijaya.vercel.app og-image',
        width: 1200,
        height: 630,
      },
      {
        url: metaImage,
        alt: 'dwiwijaya.vercel.app og-image',
        width: 1600,
        height: 900,
      },
    ],
    site_name: 'dwiwijaya.vercel.app',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};

export default defaultSEOConfig;
