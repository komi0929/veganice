import type { Metadata } from "next";
import Image from "next/image";

const PAGE_TITLE = "Flavor Lineup — Plant-Based Craft Ice Cream (All 11 Flavors)";
const PAGE_DESC =
  "Explore all 11 flavors of SoyStories plant-based craft ice cream from Fukuoka, Japan. Dairy-free, egg-free, gluten-free (wheat-free), and made without refined white sugar using slow-cooked Japanese rice flour and fermented ingredients.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.soystories.cafe/flavors" },
  openGraph: {
    title: `${PAGE_TITLE} | SoyStories`,
    description: PAGE_DESC,
    type: "website",
    locale: "en_US",
    url: "https://www.soystories.cafe/flavors",
    siteName: "SoyStories",
    images: [
      {
        url: "/images/hero_craft_gelato.jpg",
        width: 1200,
        height: 630,
        alt: "SoyStories Plant-Based Craft Ice Cream — All 11 Flavors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PAGE_TITLE} | SoyStories`,
    description: PAGE_DESC,
    images: ["/images/hero_craft_gelato.jpg"],
  },
};

interface EnglishFlavorItem {
  id: string;
  name: string;
  badge?: string;
  baseSummary: string;
  image: string;
  description: string;
  ingredients: string;
  allergens: string;
  containsNuts?: boolean;
  nutrition: {
    calories: string;
    protein: string;
    fat: string;
    carbs: string;
    salt: string;
  };
}

interface EnglishFlavorGroup {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: EnglishFlavorItem[];
}

const FLAVOR_GROUPS: EnglishFlavorGroup[] = [
  {
    id: "milk-cacao-tea",
    eyebrow: "Collection 01 · 6 Flavors",
    title: "Milk, Cacao & Tea Collection",
    description:
      "Built on smooth domestic non-GMO soy milk or almond milk and layered with traditional Japanese fermented ingredients—sweet fermented rice (amazake) and mellow white miso—for deep, lingering richness and a clean aftertaste with zero dairy fat.",
    items: [
      {
        id: "umami-vanilla",
        name: "UMAMI Vanilla",
        badge: "No. 1 Best Seller",
        baseSummary: "Soy Milk · Amazake · White Miso · Real Vanilla Beans",
        image: "/images/flavors/umami_vanilla.png",
        description:
          "Our signature and most popular flavor. Instead of relying on heavy dairy cream, we layer domestic non-GMO soy milk with two traditional Japanese fermented ingredients—sweet fermented rice (amazake) and mellow white miso—alongside a touch of apple purée and real vanilla beans. Slow-cooked with brown rice flour for a dense, velvety texture free of ice crystals, it delivers a deep, custard-like richness with subtle savory umami, finishing remarkably clean and light on the palate.",
        ingredients:
          "Soy milk (made in Japan, non-GMO), amazake (fermented rice), rice bran oil, unrefined cane sugar, beet sugar, brown rice flour, white miso, apple purée, vanilla beans, salt, vanilla extract.",
        allergens: "Soy, Apple",
        nutrition: {
          calories: "194 kcal",
          protein: "2.1 g",
          fat: "6.9 g",
          carbs: "31.0 g",
          salt: "0.1 g",
        },
      },
      {
        id: "matcha",
        name: "Matcha",
        baseSummary: "Soy Milk · Uji Matcha · Amazake · White Miso",
        image: "/images/flavors/matcha.png",
        description:
          "Crafted with authentic Uji matcha green tea, this flavor highlights the vibrant aroma, natural umami, and pleasant bittersweet depth of finely ground Japanese tea leaves. Gentle sweetness from fermented rice (amazake), unrefined cane sugar, and a hint of white miso rounds out the brisk tea notes without overpowering them. Our slow-cooked rice-flour preparation creates a smooth, spoon-coating richness that lets the lingering fragrance of shaded green tea shine through to the very last bite.",
        ingredients:
          "Soy milk (Japanese, non-GMO), amazake (fermented rice), unrefined cane sugar, rice bran oil, soy milk whip, matcha green tea, white miso, rice flour, vanilla oil, chlorella.",
        allergens: "Soy",
        nutrition: {
          calories: "223 kcal",
          protein: "2.4 g",
          fat: "12.8 g",
          carbs: "24.9 g",
          salt: "0.2 g",
        },
      },
      {
        id: "vanilla-coconut",
        name: "Vanilla Coconut",
        baseSummary: "Soy Milk · Coconut Milk · White Miso",
        image: "/images/flavors/vanilla_coconut.png",
        description:
          "A bright, gently tropical take on classic vanilla that blends smooth domestic soy milk with fragrant coconut milk and a subtle touch of white miso for rounded body. Compared to our richer UMAMI Vanilla, Vanilla Coconut offers a lighter, airier sweetness and a delicate coconut aroma that never feels heavy. Slow-cooked with Japanese rice flour for a silky mouthfeel, it is wonderfully refreshing on its own and pairs effortlessly with warm waffles, baked pastries, or fresh fruit.",
        ingredients:
          "Soy milk (Japanese, non-GMO), beet sugar, soy milk whip, rice flour, coconut milk powder, white miso, vanilla oil.",
        allergens: "Soy",
        nutrition: {
          calories: "179.3 kcal",
          protein: "3.1 g",
          fat: "8.9 g",
          carbs: "19.8 g",
          salt: "0.2 g",
        },
      },
      {
        id: "hojicha",
        name: "Hojicha (Roasted Green Tea)",
        baseSummary: "Soy Milk · Roasted Japanese Green Tea · Amazake · White Miso",
        image: "/images/flavors/houjicha.png",
        description:
          "Made from fragrant roasted Japanese green tea leaves, Hojicha greets you with a warm, toasty aroma the moment it touches the spoon. Paired with domestic soy milk, sweet fermented rice (amazake), unrefined cane sugar, and a whisper of white miso, the smoky, nutty character of the roasted tea unfolds into a comforting, mellow sweetness. Rich and velvety yet completely free of dairy heaviness, it leaves a soothing, aromatic finish reminiscent of freshly brewed roasted tea.",
        ingredients:
          "Soy milk (Japanese, non-GMO), amazake (fermented rice), unrefined cane sugar, rice bran oil, soy milk whip, hojicha (roasted green tea), white miso, rice flour, vanilla oil.",
        allergens: "Soy",
        nutrition: {
          calories: "227.1 kcal",
          protein: "2.3 g",
          fat: "12.9 g",
          carbs: "25.5 g",
          salt: "0.2 g",
        },
      },
      {
        id: "earl-grey",
        name: "Earl Grey",
        baseSummary: "Soy Milk · Black Tea · Bergamot · White Miso",
        image: "/images/flavors/earl_gray.png",
        description:
          "Steeped with aromatic black tea and bright citrus notes of bergamot, our Earl Grey captures the elegance of afternoon milk tea in a smooth, plant-based scoop. Domestic soy milk and a subtle touch of white miso lend gentle depth to the floral tea infusion, while our rice-flour craft ensures a creamy, melt-on-the-tongue texture without dairy cream. Fragrant, refined, and delicately sweetened with beet sugar, it pairs beautifully with scones, cakes, and baked sweets, or shines as a light after-dinner dessert.",
        ingredients:
          "Soy milk (Japanese, non-GMO), beet sugar, black tea, rice bran oil, rice flour, white miso, bergamot flavoring, vanilla oil.",
        allergens: "Soy",
        nutrition: {
          calories: "168.8 kcal",
          protein: "2.3 g",
          fat: "7.6 g",
          carbs: "23.2 g",
          salt: "0.2 g",
        },
      },
      {
        id: "chocolate",
        name: "Chocolate",
        baseSummary: "Almond Milk · Couverture Chocolate · Coconut Cream · White Miso",
        image: "/images/flavors/chocolate.png",
        description:
          "Rich couverture chocolate and deep cocoa powder are blended into a smooth almond milk and coconut cream base, accented with a hint of white miso to draw out the full intensity of the cacao. Rather than feeling icy like a typical dairy-free sorbet, our rice-flour method gives this flavor a dense, truffle-like texture reminiscent of chilled ganache (nama-chocolat). Decadent and deeply chocolatey on the palate, it still finishes clean and unburdened thanks to zero dairy fat.",
        ingredients:
          "Almond milk (USA), beet sugar, coconut cream, couverture chocolate, cocoa powder, rice flour, white miso, vanilla oil.",
        allergens: "Soy, Almond (Contains Tree Nuts)",
        containsNuts: true,
        nutrition: {
          calories: "162.7 kcal",
          protein: "2.1 g",
          fat: "6.3 g",
          carbs: "23.69 g",
          salt: "0.23 g",
        },
      },
    ],
  },
  {
    id: "fruit-collection",
    eyebrow: "Collection 02 · 5 Flavors (Made Without Soy Milk)",
    title: "Fruit Collection",
    description:
      "Crafted from vibrant fruit purées, coconut cream, and slow-cooked Japanese rice flour—made entirely without soy milk. Unlike icy water-based sorbets, each fruit flavor combines bright natural acidity with a soft, velvety mouthfeel.",
    items: [
      {
        id: "mango",
        name: "Mango",
        baseSummary: "Ecuadorian Apple Mango · Coconut Cream · Soy-Free Base",
        image: "/images/flavors/mango.png",
        description:
          "Crafted generously with sun-ripened Ecuadorian apple mango purée, this fruit-forward flavor bursts with lush, tropical sweetness and vibrant natural color. A touch of coconut cream and cooked Japanese rice flour give the mango a remarkably smooth, velvety body—closer to a creamy gelato than an icy sorbet—while a squeeze of lemon juice keeps the finish crisp and bright. Made without soy milk, it is a refreshing favorite for both fruit lovers and guests avoiding soy.",
        ingredients:
          "Apple mango purée (Ecuador), beet sugar, coconut cream, lemon juice, rice flour, vanilla oil.",
        allergens: "None listed on label",
        nutrition: {
          calories: "134.8 kcal",
          protein: "0.9 g",
          fat: "2.5 g",
          carbs: "28.6 g",
          salt: "0.0 g",
        },
      },
      {
        id: "mixed-berry",
        name: "Mixed Berry",
        baseSummary: "Strawberry & Raspberry Purées · Coconut Cream · Soy-Free Base",
        image: "/images/flavors/berry_mix.png",
        description:
          "Blending sweet strawberry purée with tangy red raspberry purée, Mixed Berry showcases the natural ruby-pink hue and lively acidity of real berries without artificial coloring. Coconut cream and our slow-cooked rice flour base round out the bright berry tartness into a smooth, creamy scoop that melts evenly on the tongue. Balanced with unrefined beet sugar and a hint of lemon juice, its vibrant sweet-tart profile refreshes the palate after a meal and pairs wonderfully alongside chocolate desserts.",
        ingredients:
          "Beet sugar, strawberry purée, raspberry purée, coconut cream, lemon juice, rice bran oil, rice flour, vanilla oil.",
        allergens: "None listed on label",
        nutrition: {
          calories: "169.9 kcal",
          protein: "0.5 g",
          fat: "7.8 g",
          carbs: "25.0 g",
          salt: "0.0 g",
        },
      },
      {
        id: "peach",
        name: "Peach",
        baseSummary: "Japanese White Peach · Coconut Cream · Soy-Free Base",
        image: "/images/flavors/peach.png",
        description:
          "Made with fragrant Japanese white peaches, this delicate flavor captures the lush juiciness and gentle floral aroma of biting into a ripe peach in season. Instead of freezing into coarse ice crystals, the fruit is gently bound with Japanese rice flour and a light touch of coconut cream, preserving the soft, nectar-like texture of the peach itself. Mildly sweetened with beet sugar and brightened with lemon juice, it offers an airy, graceful sweetness with a clean finish.",
        ingredients:
          "White peach (Japanese), beet sugar, coconut cream, lemon juice, rice flour, vanilla oil.",
        allergens: "Peach",
        nutrition: {
          calories: "131.4 kcal",
          protein: "0.7 g",
          fat: "1.8 g",
          carbs: "28.6 g",
          salt: "0.0 g",
        },
      },
      {
        id: "apple",
        name: "Apple",
        baseSummary: "Japanese Apple · Coconut Cream · Soy-Free Base",
        image: "/images/flavors/apple.png",
        description:
          "Showcasing crisp, domestically grown Japanese apples, this light and refreshing flavor highlights the clear, natural sweetness and gentle tartness of orchard-fresh fruit. Subtle coconut cream and Japanese rice flour lend a soft, smooth mouthfeel while keeping the profile bright and effortless—at 120.7 kcal per 100 ml cup, it is the lightest flavor in our lineup. Clean, fruity, and easy to enjoy for both children and adults, it makes an ideal palate cleanser or light afternoon treat.",
        ingredients:
          "Apple (Japanese), beet sugar, coconut cream, lemon juice, rice flour, vanilla oil.",
        allergens: "Apple",
        nutrition: {
          calories: "120.7 kcal",
          protein: "0.6 g",
          fat: "1.89 g",
          carbs: "26.9 g",
          salt: "0.0 g",
        },
      },
      {
        id: "dragon-fruit",
        name: "Dragon Fruit",
        baseSummary: "Dragon Fruit (Pitaya) & Pineapple · Coconut · Soy-Free Base",
        image: "/images/flavors/dragon_fruit.png",
        description:
          "Striking in its natural magenta-pink color—derived purely from real pitaya fruit with zero artificial dyes—Dragon Fruit pairs mild, refreshing dragon fruit with sunny pineapple and creamy coconut. Layering pitaya with tangy pineapple, lemon juice, and coconut milk creates a well-rounded tropical flavor with our signature silky rice-flour texture. Visually captivating in any bowl or glass, it delivers an exotic yet clean sweetness that delights both the eyes and the palate.",
        ingredients:
          "Dragon fruit, beet sugar, pineapple, rice bran oil, coconut cream, lemon juice, rice flour, coconut milk powder, vanilla oil.",
        allergens: "None listed on label",
        nutrition: {
          calories: "212.2 kcal",
          protein: "1.2 g",
          fat: "13.5 g",
          carbs: "22.2 g",
          salt: "0.2 g",
        },
      },
    ],
  },
];

const KEY_FACTS = [
  "100% Plant-Based (Vegan)",
  "Dedicated Dairy-, Egg- & Wheat-Free Kitchen",
  "No Refined White Sugar",
  "No Emulsifiers, Stabilizers or Artificial Colors",
] as const;

export default function EnglishFlavorsPage() {
  return (
    <div
      lang="en"
      className="min-h-screen bg-[#fafaf8] text-[#2d3a3a]"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      }}
    >
      {/* Minimal Header */}
      <header className="sticky top-0 z-30 border-b border-stone-200/80 bg-white/95 backdrop-blur-xs">
        <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-5 sm:h-16 sm:px-8">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo_horizontal.png"
              alt="SoyStories"
              width={132}
              height={32}
              className="h-7 w-auto object-contain sm:h-8"
              priority
            />
            <span className="hidden text-xs font-medium tracking-wide text-stone-400 sm:inline">
              | Flavor Guide
            </span>
          </div>
          <nav
            aria-label="Flavor categories"
            className="flex items-center gap-4 text-xs font-medium"
          >
            <a
              href="#milk-cacao-tea"
              className="text-stone-600 transition-colors hover:text-[#3e6044]"
            >
              Milk &amp; Tea (6)
            </a>
            <a
              href="#fruit-collection"
              className="text-stone-600 transition-colors hover:text-[#3e6044]"
            >
              Fruit (5)
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-5 py-10 sm:px-8 sm:py-14">
        {/* Intro */}
        <section className="border-b border-stone-200/80 pb-9 sm:pb-11">
          <p className="text-xs font-semibold tracking-[0.16em] text-[#3e6044] uppercase">
            SoyStories · Yakuin, Fukuoka, Japan
          </p>
          <h1
            className="mt-2 text-2xl leading-tight font-bold tracking-tight text-[#2d3a3a] sm:text-4xl"
            style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
          >
            Plant-Based Craft Ice Cream — All 11 Flavors
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#5a6868] sm:text-base sm:leading-relaxed">
            Handcrafted in our dedicated dairy-, egg-, and wheat-free kitchen in Fukuoka, every
            flavor is 100% plant-based and made without dairy, eggs, wheat, refined white sugar,
            emulsifiers, stabilizers, thickeners, or artificial colors. By slow-cooking Japanese
            rice flour with plant milks or fruit purées—and layering traditional Japanese fermented
            ingredients such as <em>amazake</em> (sweet fermented rice) and <em>shiro-miso</em>{" "}
            (white miso)—we create a dense, velvety texture free of ice crystals with a clean,
            refreshing finish.
          </p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {KEY_FACTS.map((fact) => (
              <li
                key={fact}
                className="rounded-full border border-[#3e6044]/20 bg-white px-3 py-1 text-xs font-medium text-[#3e6044]"
              >
                {fact}
              </li>
            ))}
          </ul>
        </section>

        {/* Flavor Collections */}
        <div className="mt-10 space-y-14 sm:mt-12 sm:space-y-16">
          {FLAVOR_GROUPS.map((group) => (
            <section key={group.id} id={group.id} className="scroll-mt-20">
              <div className="mb-6 sm:mb-8">
                <p className="text-xs font-semibold tracking-[0.14em] text-[#3e6044] uppercase">
                  {group.eyebrow}
                </p>
                <h2
                  className="mt-1 text-xl font-bold text-[#2d3a3a] sm:text-2xl"
                  style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
                >
                  {group.title}
                </h2>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#5a6868]">
                  {group.description}
                </p>
              </div>

              <div className="space-y-5 sm:space-y-6">
                {group.items.map((flavor) => (
                  <article
                    key={flavor.id}
                    id={flavor.id}
                    className="rounded-2xl border border-stone-200/80 bg-white p-5 shadow-2xs sm:p-7"
                  >
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-7">
                      {/* Flavor Photo */}
                      <div className="relative mx-auto aspect-square w-28 shrink-0 overflow-hidden rounded-2xl bg-[#f4f0e8] p-2.5 sm:mx-0 sm:w-36">
                        <Image
                          src={flavor.image}
                          alt={flavor.name}
                          fill
                          sizes="(max-width: 640px) 112px, 144px"
                          className="object-contain p-2"
                        />
                      </div>

                      {/* Flavor Copy & Specs */}
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3
                            className="text-lg font-bold text-[#2d3a3a] sm:text-xl"
                            style={{
                              fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif',
                            }}
                          >
                            {flavor.name}
                          </h3>
                          {flavor.badge && (
                            <span className="rounded-full bg-[#3e6044] px-2.5 py-0.5 text-[11px] font-semibold text-white">
                              {flavor.badge}
                            </span>
                          )}
                          {flavor.containsNuts && (
                            <span className="rounded-full border border-amber-300 bg-amber-50 px-2.5 py-0.5 text-[11px] font-semibold text-amber-900">
                              Contains Almond
                            </span>
                          )}
                        </div>

                        <p className="mt-1 text-xs font-medium text-[#3e6044]">
                          {flavor.baseSummary}
                        </p>

                        <p className="mt-3 text-sm leading-relaxed text-[#2d3a3a] sm:text-[15px] sm:leading-7">
                          {flavor.description}
                        </p>

                        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#5a6868]">
                          <span>
                            <strong className="font-semibold text-[#2d3a3a]">
                              Declared Allergens:
                            </strong>{" "}
                            {flavor.allergens}
                          </span>
                        </div>

                        {/* Collapsible Ingredients & Nutrition */}
                        <details className="group mt-3 border-t border-stone-100 pt-3">
                          <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 text-xs font-semibold text-[#3e6044] select-none [&::-webkit-details-marker]:hidden">
                            <span>Ingredients &amp; Nutrition Facts (per 100 ml)</span>
                            <span
                              className="transition-transform duration-200 group-open:rotate-180"
                              aria-hidden="true"
                            >
                              ▾
                            </span>
                          </summary>

                          <div className="mt-3 space-y-3 rounded-xl bg-[#fafaf8] p-3.5 text-xs leading-relaxed text-[#5a6868]">
                            <div>
                              <span className="font-semibold text-[#2d3a3a]">Ingredients: </span>
                              {flavor.ingredients}
                            </div>
                            <div className="grid grid-cols-5 gap-2 border-t border-stone-200/70 pt-2.5 text-center">
                              <div>
                                <span className="block text-[10px] text-stone-500">Calories</span>
                                <span className="font-semibold text-[#2d3a3a]">
                                  {flavor.nutrition.calories}
                                </span>
                              </div>
                              <div>
                                <span className="block text-[10px] text-stone-500">Protein</span>
                                <span className="font-semibold text-[#2d3a3a]">
                                  {flavor.nutrition.protein}
                                </span>
                              </div>
                              <div>
                                <span className="block text-[10px] text-stone-500">Fat</span>
                                <span className="font-semibold text-[#2d3a3a]">
                                  {flavor.nutrition.fat}
                                </span>
                              </div>
                              <div>
                                <span className="block text-[10px] text-stone-500">Carbs</span>
                                <span className="font-semibold text-[#2d3a3a]">
                                  {flavor.nutrition.carbs}
                                </span>
                              </div>
                              <div>
                                <span className="block text-[10px] text-stone-500">Salt eq.</span>
                                <span className="font-semibold text-[#2d3a3a]">
                                  {flavor.nutrition.salt}
                                </span>
                              </div>
                            </div>
                          </div>
                        </details>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Kitchen & Allergen Note */}
        <section className="mt-14 rounded-2xl border border-stone-200/80 bg-white p-5 text-xs leading-relaxed text-[#5a6868] sm:mt-16 sm:p-6">
          <h2 className="text-sm font-bold text-[#2d3a3a]">
            Kitchen, Sweeteners &amp; Serving Notes
          </h2>
          <ul className="mt-2.5 list-disc space-y-1.5 pl-4">
            <li>
              <strong className="font-semibold text-[#2d3a3a]">Dedicated Kitchen:</strong> All 11
              flavors are produced in our dedicated dairy-, egg-, and wheat-free kitchen in Yakuin,
              Fukuoka. Among major allergens, tree nuts and peanuts (such as almonds, walnuts,
              cashews, and peanuts) are handled in our facility; flavors containing nuts are clearly
              labeled (<em>Chocolate</em> contains almonds).
            </li>
            <li>
              <strong className="font-semibold text-[#2d3a3a]">Unrefined Sweeteners:</strong>{" "}
              Sweetened with unrefined Hokkaido beet sugar and Amami cane sugar that retain their
              natural molasses—never refined white sugar.
            </li>
            <li>
              <strong className="font-semibold text-[#2d3a3a]">Allergen Labeling:</strong>{" "}
              &ldquo;None listed on label&rdquo; reflects the product label declaration for
              Japan&rsquo;s designated allergen labeling items. Please review the full ingredient
              list for individual dietary needs.
            </li>
            <li>
              <strong className="font-semibold text-[#2d3a3a]">Serving Tip:</strong> Store frozen at
              −18°C (0°F) or below. When taking a cup straight from a deep freezer, letting it rest
              at room temperature for 3–5 minutes brings out its full aroma and signature velvety
              spoonfeel.
            </li>
          </ul>
        </section>
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-stone-200/80 bg-white py-8 text-center text-xs text-stone-500">
        <div className="mx-auto max-w-4xl px-5">
          <p className="font-semibold text-[#2d3a3a]">SoyStories Yakuin · Fukuoka, Japan</p>
          <p className="mt-1">
            2-2-24 Yakuin, Chuo-ku, Fukuoka 810-0022, Japan · Operated by Hitokoto Inc.
          </p>
        </div>
      </footer>
    </div>
  );
}
