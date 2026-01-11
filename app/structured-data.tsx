export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ThirdGen Tech",
    "alternateName": "ThirdGen",
    "url": "https://thirdgen.tech",
    "logo": "https://thirdgen.tech/logo.png",
    "description": "Next-generation Web3 security platform providing runtime enforcement for smart contracts and DeFi protocols.",
    "foundingDate": "2024",
    "sameAs": [
      "https://x.com/thirdgentech",
      "https://github.com/orgs/Third-Gen-Tech"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "email": "thirdgentech15@gmail.com"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ThirdGen",
    "url": "https://thirdgen.tech",
    "description": "Runtime enforcement for Web3 protocols. Prevent hacks before block finalization.",
    "publisher": {
      "@type": "Organization",
      "name": "ThirdGen Tech"
    }
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ThirdGen Security Platform",
    "applicationCategory": "SecurityApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Join waitlist for early access"
    },
    "description": "AI-powered Web3 security platform with runtime enforcement, mempool monitoring, and invariant firewalls.",
    "screenshot": "https://thirdgen.tech/og-image.png",
    "featureList": [
      "AI Code Review",
      "Mempool Monitoring",
      "Invariant Firewall",
      "Flash Loan Protection",
      "Runtime Enforcement"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />
    </>
  );
}
