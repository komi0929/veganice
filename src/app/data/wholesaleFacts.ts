/**
 * 業務用卸LP（/ryokan・/cafe）共通の事実データ
 * 数値・取引条件・アレルゲン表記は確定した事実のみを一字一句そのまま保持する
 */

export const WHOLESALE_FACTS = {
  price: "1L 2,000円・2L 4,000円（税別）、全11種同じ価格",
  minLot: "最小4L、味の組み合わせは自由",
  scoopsPerLiter: "1Lあたり、#12ディッシャー（80ml）で約12杯、#18（50ml）で約20杯",
  costPerScoop: "50mlで約100円、80mlで約167円（税別。2,000円÷20杯、÷12杯）",
  sampleTerms:
    "全11種から6個（おまかせ可）、商品代無料、クール便送料は着払い、通常2営業日以内に発送",
  leadTime: "通常5営業日前後、ヤマトのクール冷凍便で全国",
  payment: "納品月の月末締め・翌月末払いのご請求書（銀行振込）",
  allergen:
    "卵・乳・小麦を持ち込まない専用の工房で製造。工房への持ち込みがあるのはナッツ類（アーモンド・くるみ・カシューナッツ・落花生等）のみ。味によって大豆・アーモンド（ナッツ使用）・もも・りんごを含む",
  allergenAssurance: "乳・卵・小麦アレルギーの方にも安心して出せる",
  freeFromAdditivesAndWhiteSugar: "乳・卵・小麦・白砂糖は使っていない",
  storage: "冷凍（−18℃以下）で保存",
  googleRating: "★4.7",
  googleReviewCount: "270件以上",
  happyCowRating: "5.0",
  ctaLabel: "無料で試食サンプルを取り寄せる",
  ctaCaption: "商品代は無料・クール便の送料のみ着払い",
  lineUrl: "https://lin.ee/OnsWAWw2",
  googleMapsReviewsUrl:
    "https://www.google.com/maps/place/%E3%82%B0%E3%83%AB%E3%83%86%E3%83%B3%E3%83%95%E3%83%AA%E3%83%BC%EF%BC%86100%EF%BC%85%E6%A4%8D%E7%89%A9%E6%80%A7%E3%82%B9%E3%82%A4%E3%83%BC%E3%83%84+Soy+Stories%EF%BC%88vegan%EF%BC%86gluten+free%EF%BC%89/@33.5818211,130.3966611,17z/data=!4m8!3m7!1s0x354191585d44c62f:0xa127c6cfc075e381!8m2!3d33.5818211!4d130.3966611!9m1!1b1!16s%2Fg%2F11r783v2pc?hl=ja",
  store: {
    name: "SoyStories 薬院店",
    postalCode: "〒810-0022",
    address: "福岡市中央区薬院2丁目2-24 チサンマンション第3博多 1F",
    phone: "092-231-0677",
    phoneHref: "tel:092-231-0677",
    url: "https://www.soystories.jp/",
  },
} as const;

export interface WholesaleReviewItem {
  quote: string[];
  who: string;
  tag: string;
  image: string;
  width: number;
  height: number;
}

/**
 * 薬院の実店舗に寄せられたGoogleマップ実物クチコミ9件
 * （宿の料理長・女将にもそのまま伝わるよう「ヴィーガンではないお客様」で表記統一）
 */
export const WHOLESALE_REVIEWS: WholesaleReviewItem[] = [
  {
    quote: ["食事制限はないけれど、今まで食べた", "アイスの中で一番バランスが良くて美味しかった。"],
    who: "Cristina Paulo さん",
    tag: "ヴィーガンではないお客様・夕食後に来店",
    image: "/images/reviews/google_review_cristina_paulo.png",
    width: 402,
    height: 434,
  },
  {
    quote: ["今まで食べた中で最高。", "世界中で食べたどんな乳製品よりも美味しい。"],
    who: "Shannon Barkley-Nakajima さん",
    tag: "海外からのお客様・アイスを絶賛",
    image: "/images/reviews/google_review_shannon_barkley.png",
    width: 402,
    height: 497,
  },
  {
    quote: ["今まで食べた中で一番美味しい", "ストロベリーアイスクリーム！"],
    who: "Lauren Baker さん",
    tag: "ニューヨークから来店",
    image: "/images/reviews/google_review_lauren_baker.png",
    width: 402,
    height: 455,
  },
  {
    quote: ["イタリアで食べた本場のジェラートと", "同じくらい美味しかった。"],
    who: "Gamze Erdogan さん",
    tag: "ヴィーガン歴のあるお客様",
    image: "/images/reviews/google_review_gamze_erdogan.png",
    width: 402,
    height: 476,
  },
  {
    quote: ["13年間ヴィーガンだけど、今まで食べた", "ヴィーガンアイスの中で一番好きかも！"],
    who: "Audrey Price さん",
    tag: "アメリカから来店（ヴィーガン歴13年）",
    image: "/images/reviews/google_review_audrey_price.png",
    width: 402,
    height: 369,
  },
  {
    quote: ["豆乳で作られているなんて全く気づかない。", "絶品すぎて2回も食べてしまいました。"],
    who: "Poonam Parekh さん",
    tag: "グルテンを控えているお客様・再来店",
    image: "/images/reviews/google_review_poonam_parekh.png",
    width: 402,
    height: 539,
  },
  {
    quote: ["ヴィーガンじゃない人にも", "ぜひすすめたい。"],
    who: "Merrick Clay さん",
    tag: "ヴィーガンではないお客様",
    image: "/images/reviews/google_review_merrick_clay.png",
    width: 408,
    height: 547,
  },
  {
    quote: ["乳製品なしとは思えない", "クリーミーさ。"],
    who: "Jodi Clay さん",
    tag: "ご家族で来店",
    image: "/images/reviews/google_review_jodi_clay.png",
    width: 402,
    height: 570,
  },
  {
    quote: ["今まで食べた抹茶で、", "いちばんおいしい！"],
    who: "amanda weidman さん",
    tag: "日本旅行中に来店",
    image: "/images/reviews/google_review_amanda_weidman.png",
    width: 402,
    height: 518,
  },
];
