export function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Katameal',
    description: 'Nutritious meals delivered directly to construction and industrial job sites',
    url: 'https://katameal.com',
    telephone: '+1-555-123-4567',
    email: 'hello@katameal.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    priceRange: '$85-$300',
    servesCuisine: 'American',
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '0',
        longitude: '0',
      },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Meal Plans',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Weekly Plan',
            description: '5 meals per week delivered Monday-Friday',
          },
          price: '85',
          priceCurrency: 'USD',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '85',
            priceCurrency: 'USD',
            referenceQuantity: {
              '@type': 'QuantitativeValue',
              value: '1',
              unitCode: 'WEE',
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Monthly Plan',
            description: '20 meals per month with priority delivery',
          },
          price: '300',
          priceCurrency: 'USD',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '300',
            priceCurrency: 'USD',
            referenceQuantity: {
              '@type': 'QuantitativeValue',
              value: '1',
              unitCode: 'MON',
            },
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

