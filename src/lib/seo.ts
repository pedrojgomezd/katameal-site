export const siteConfig = {
  name: 'Katameal',
  description: 'Nutritious meals delivered directly to construction and industrial job sites',
  url: 'https://katameal.com',
  ogImage: 'https://katameal.com/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/katameal',
    facebook: 'https://facebook.com/katameal',
    instagram: 'https://instagram.com/katameal',
  },
};

export const defaultSEO = {
  title: 'Katameal - Nutritious Meals Delivered to Your Job Site',
  description: 'Ready-to-eat, delicious meals delivered directly to construction and industrial job sites. Weekly and monthly meal subscription plans.',
  canonical: siteConfig.url,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: 'Katameal - Nutritious Meals Delivered to Your Job Site',
    description: 'Ready-to-eat, delicious meals delivered directly to your workplace.',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Katameal - Meal Delivery Service',
      },
    ],
  },
  twitter: {
    handle: '@katameal',
    site: '@katameal',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'meal delivery, construction meals, job site catering, worker meals, meal subscription, nutritious meals, ready-to-eat meals',
    },
    {
      name: 'author',
      content: 'Katameal',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
  ],
};

