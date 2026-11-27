const SITE_URL = "https://www.soystories.cafe";

export const japan = { "@type": "Country", name: "Japan" };

export function service(path: string, name: string, description: string) {
  const url = SITE_URL + path;
  return {
    "@type": "Service",
    "@id": url + "#service",
    url,
    name,
    description,
    provider: { "@id": SITE_URL + "/#organization" },
    areaServed: japan,
  };
}

export function breadcrumbs(path: string, name: string, homeName = "業務用卸トップ") {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: homeName, item: SITE_URL + "/" },
      { "@type": "ListItem", position: 2, name, item: SITE_URL + path },
    ],
  };
}

export default function StructuredData({ graph }: { graph: object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(
          /</g,
          "\\u003c"
        ),
      }}
    />
  );
}
