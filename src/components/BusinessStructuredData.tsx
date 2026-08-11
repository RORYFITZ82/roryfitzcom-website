import { CONTACT, SERVICES } from "@/lib/content";

// Server component: describes Rory as a Dublin-based freelance creative
// professional — Person + ProfessionalService (not LocalBusiness/Organization,
// which would misrepresent a one-person freelance practice as a larger
// agency) — plus WebSite. Bundled as a single @graph so entities can
// reference each other by @id.

const SITE_URL = "https://www.roryfitz.com";
const PERSON_ID = `${SITE_URL}/#person`;
const BUSINESS_ID = `${SITE_URL}/#business`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export function BusinessStructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: "Rory Fitzgerald",
        jobTitle: "Creative Director & Motion Graphics Designer",
        url: SITE_URL,
        image: `${SITE_URL}/images/rf-logo-mark.png`,
        email: `mailto:${CONTACT.email}`,
        telephone: CONTACT.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: "93 Ranelagh Road",
          addressLocality: "Dublin",
          postalCode: "D06 N6C3",
          addressCountry: "IE",
        },
        sameAs: [CONTACT.linkedin, CONTACT.vimeo, CONTACT.instagram],
        knowsAbout: [
          "Motion Graphics",
          "Animation",
          "Video Production",
          "Creative Direction",
          "Broadcast Graphics",
          "Explainer Videos",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": BUSINESS_ID,
        name: "Rory Fitzgerald — Motion Graphics & Video Production",
        description:
          "Freelance Creative Director, Motion Graphics Designer and Video Producer based in Dublin, Ireland, working with brands, agencies and broadcasters across Ireland and internationally.",
        url: SITE_URL,
        image: `${SITE_URL}/images/rf-logo-mark.png`,
        telephone: CONTACT.phone,
        email: CONTACT.email,
        founder: { "@id": PERSON_ID },
        address: {
          "@type": "PostalAddress",
          streetAddress: "93 Ranelagh Road",
          addressLocality: "Dublin",
          postalCode: "D06 N6C3",
          addressCountry: "IE",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: CONTACT.geo.lat,
          longitude: CONTACT.geo.lng,
        },
        hasMap: CONTACT.googleMaps,
        areaServed: [
          { "@type": "City", name: "Dublin" },
          { "@type": "Country", name: "Ireland" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services",
          itemListElement: SERVICES.map((svc) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: svc.title,
              description: svc.desc,
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        name: "Rory Fitzgerald",
        url: SITE_URL,
        publisher: { "@id": PERSON_ID },
        inLanguage: "en-IE",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
    />
  );
}
