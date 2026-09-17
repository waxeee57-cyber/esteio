import { company } from "@/lib/content";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: company.name,
    legalName: company.legalName,
    url: company.url,
    description: company.description,
    foundingDate: String(company.founded),
    vatID: company.vat,
    email: company.email,
    telephone: company.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      addressLocality: company.address.locality,
      addressRegion: company.address.region,
      postalCode: company.address.postalCode,
      addressCountry: company.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: company.address.lat,
      longitude: company.address.lng,
    },
    openingHours: "Mo-Fr 08:00-18:00",
    areaServed: ["PT", "ES"],
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Scaffolding systems" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Temporary structures" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Modular site buildings" } },
    ],
  };
}
