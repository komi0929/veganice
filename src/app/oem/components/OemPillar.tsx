import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import SiteFooter from "../../components/Footer";
import StructuredData from "../../components/StructuredData";
import OemDetailLinks from "./OemDetailLinks";
import OemHeader from "./OemHeader";

const site = "https://www.soystories.cafe";
const updated = "2026-11-27";
const image = site + "/images/gelato_circle_lineup.jpg";

export const pillarCard = "scroll-mt-24 rounded-3xl bg-white p-5 shadow-2xs sm:p-8";
export const pillarHeading = "text-ink text-xl font-bold tracking-tight sm:text-2xl";

interface PillarInfo {
  path: string;
  label: string;
  title: string;
  description: string;
}

export function pillarMetadata({ path, title, description }: PillarInfo): Metadata {
  const canonical = site + path;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "SoyStories",
      type: "article",
      locale: "ja_JP",
      modifiedTime: updated,
      images: [{ url: image, alt: "SoyStoriesの植物性クラフトアイス" }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

interface PillarProps {
  info: PillarInfo;
  sections: readonly (readonly [string, string])[];
  faq: readonly { question: string; answer: string }[];
  secondary: { href: string; label: string };
  ctaText: string;
  children: ReactNode;
}

export default function OemPillar({
  info,
  sections,
  faq,
  secondary,
  ctaText,
  children,
}: PillarProps) {
  const { path, label, title, description } = info;
  const headline = title.replace(/ \| SoyStories$/, "");
  const canonical = site + path;
  const trail = [
    { name: "業務用卸トップ", path: "/" },
    { name: "小ロットOEM", path: "/oem" },
    { name: label, path },
  ];
  const organization = { "@id": site + "/#organization" };
  const graph = [
    {
      "@type": "Article",
      "@id": canonical + "#article",
      headline,
      description,
      mainEntityOfPage: canonical,
      inLanguage: "ja",
      author: organization,
      publisher: organization,
      dateModified: updated,
      image,
    },
    {
      "@type": "FAQPage",
      "@id": canonical + "#faq",
      mainEntity: faq.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: trail.map(({ name, path }, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name,
        item: site + path,
      })),
    },
  ];

  return (
    <>
      <StructuredData graph={graph} />
      <OemHeader isGuidePage />
      <main className="lp-friendly text-ink flex-1 bg-[#f7f3ec] pt-16">
        <article className="mx-auto max-w-5xl space-y-8 px-4 py-8 sm:px-6 sm:py-12">
          <nav aria-label="パンくずリスト" className="text-sm">
            <ol className="flex flex-wrap gap-2">
              {trail.slice(0, -1).map(({ name, path }) => (
                <li key={path} className="flex items-center gap-2">
                  <Link href={path} className="text-brand underline underline-offset-4">
                    {name}
                  </Link>
                  <span aria-hidden="true">›</span>
                </li>
              ))}
              <li aria-current="page">{label}</li>
            </ol>
          </nav>
          <header className={pillarCard}>
            <h1 className="text-2xl leading-tight font-bold tracking-tight sm:text-4xl">
              {headline}
            </h1>
            <p className="text-brand mt-4 text-sm font-bold">
              SoyStories（株式会社ヒトコト） · <time dateTime={updated}>2026年11月27日更新</time>
            </p>
            <p className="mt-5 leading-relaxed">{description}</p>
            <nav aria-label="ガイドの目次" className="mt-6">
              <ul className="flex flex-wrap gap-2">
                {[...sections, ["faq", "よくある質問"]].map(([id, label]) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="text-brand block rounded-full bg-[#f7f3ec] px-4 py-2 text-sm font-bold hover:underline"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </header>
          {children}
          <section id="faq" className={pillarCard}>
            <h2 className={pillarHeading}>よくある質問</h2>
            <dl className="mt-4 divide-y divide-gray-200">
              {faq.map(({ question, answer }) => (
                <div key={question} className="py-4">
                  <dt className="text-brand font-bold">{question}</dt>
                  <dd className="mt-2 leading-relaxed">{answer}</dd>
                </div>
              ))}
            </dl>
          </section>
          <section className={pillarCard}>
            <h2 className={pillarHeading}>小ロットOEMのご相談</h2>
            <p className="mt-3 leading-relaxed">{ctaText}</p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/oem#contact-form"
                className="bg-brand hover:bg-brand-dark rounded-full px-6 py-3 text-center text-sm font-bold text-white transition-colors"
              >
                小ロットOEMを相談する
              </Link>
              <Link
                href={secondary.href}
                className="text-brand border-brand rounded-full border px-6 py-3 text-center text-sm font-bold hover:bg-[#f7f3ec]"
              >
                {secondary.label}
              </Link>
            </div>
          </section>
          <OemDetailLinks currentPath={path} />
        </article>
      </main>
      <SiteFooter isOemGuide />
    </>
  );
}
