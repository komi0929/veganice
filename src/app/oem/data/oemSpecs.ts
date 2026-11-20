/**
 * SoyStories 定番卸 ＆ OEM製造 共通仕様・試算ロジック
 * すべての金額・ロット・送料条件をこのファイルで一元管理する
 */

export type ShippingRegionKey =
  | "kyushu_chugoku"
  | "shikoku_kansai"
  | "chubu_hokuriku"
  | "kanto_shinetsu"
  | "tohoku"
  | "hokkaido_okinawa";

export interface ShippingRegionSpec {
  key: ShippingRegionKey;
  label: string;
  /** クール冷凍便 契約運賃（税込） */
  coolFareTaxIncl: {
    size60: number;
    size80: number;
    size100: number;
    size120: number;
  };
}

export const SHIPPING_REGIONS: ReadonlyArray<ShippingRegionSpec> = [
  {
    key: "kyushu_chugoku",
    label: "九州・中国",
    coolFareTaxIncl: { size60: 1210, size80: 1551, size100: 1969, size120: 2750 },
  },
  {
    key: "shikoku_kansai",
    label: "四国・関西",
    coolFareTaxIncl: { size60: 1350, size80: 1690, size100: 2110, size120: 2890 },
  },
  {
    key: "chubu_hokuriku",
    label: "中部・北陸",
    coolFareTaxIncl: { size60: 1490, size80: 1830, size100: 2250, size120: 3050 },
  },
  {
    key: "kanto_shinetsu",
    label: "関東・信越",
    coolFareTaxIncl: { size60: 1727, size80: 2068, size100: 2486, size120: 3322 },
  },
  {
    key: "tohoku",
    label: "東北",
    coolFareTaxIncl: { size60: 1980, size80: 2320, size100: 2740, size120: 3580 },
  },
  {
    key: "hokkaido_okinawa",
    label: "北海道・沖縄",
    coolFareTaxIncl: { size60: 2420, size80: 2860, size100: 3410, size120: 4350 },
  },
];

/** 価格・ロットの確定定数 */
export const PRICING_CONSTANTS = {
  /** 軽減税率（食品 8%） */
  foodTaxRate: 0.08,
  /** 標準税率（開発費・送料・資材 10%） */
  standardTaxRate: 0.1,
  /** 個食カップ（100ml）基準卸価格（税別） */
  cupBasePriceExTax: 300,
  /** 個食カップ（100ml）基準卸価格（税込 8%） */
  cupBasePriceTaxIncl: 324,
  /** 天面シールお客様ご支給時のお値引き額（税込） */
  cupStickerDiscountTaxIncl: 15,
  /** 天面シールお客様ご支給時の個食カップ卸価格（税込） */
  cupOemPriceTaxIncl: 309,
  /** 業務用2Lバルク 1本あたり卸価格（税別） */
  bulk2LPriceExTax: 4000,
  /** 業務用2Lバルク 1本あたり卸価格（税込 8%） */
  bulk2LPriceTaxIncl: 4320,
  /** 業務用1Lバルク 1本あたり卸価格（税別） */
  bulk1LPriceExTax: 2000,
  /** カップ最低ロット（1仕込み）・発注単位 */
  cupMinLot: 60,
  /** カップ推奨ロット（2仕込み・100サイズ1箱） */
  cupRecommendedLot: 120,
  /** オリジナルバルク最低ロット（6L ＝ 2L×3本） */
  bulkOemMinTubs: 3,
  /** オリジナルバルク推奨ロット（12L ＝ 2L×6本） */
  bulkOemRecommendedTubs: 6,
  /** 試作1回あたりの原材料実費（1.5L × 1円/ml・税別） */
  trialIngredientFeeExTax: 1500,
  /** 試作1回あたりの梱包資材費（税別） */
  trialMaterialFeeExTax: 200,
  /** 3回戦目以降の追加調整費（税別） */
  extraTrialFeeExTax: 5000,
} as const;

export type OemCourseId = "seal_only" | "base_arrange" | "custom_recipe";
export type OemFormatId = "cup" | "bulk";

export interface OemCourseSpec {
  id: OemCourseId;
  badge: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  devFeeExTax: number;
  availableFormats: ReadonlyArray<OemFormatId>;
  idealFor: string;
  detailPoints: ReadonlyArray<string>;
}

export const OEM_COURSES: ReadonlyArray<OemCourseSpec> = [
  {
    id: "seal_only",
    badge: "開発費 0円・手軽にお店の顔づくり",
    title: "プラン①：フタだけお店ロゴにする（定番11種）",
    shortTitle: "① フタだけお店ロゴ",
    subtitle: "SoyStoriesで人気の11フレーバーから選び、ふた（天面）をお店のオリジナルデザインに。",
    devFeeExTax: 0,
    availableFormats: ["cup"],
    idealFor: "カフェのレジ横販売・お土産・ギフトセットを、開発費なしで始めたいお店に",
    detailPoints: [
      "試作・開発費 0円（事前に味のサンプル試食も可能です）",
      "天面シールをご支給いただくことで、基準価格から税込15円引き（1個 税込309円／税別約286円）",
      "1つの味につき60個単位（120個で1箱ぴったりになり送料効率が最適です）",
    ],
  },
  {
    id: "base_arrange",
    badge: "試作費 10,000円（税別）＋実費",
    title: "プラン②：お店の「粉末・具材」を混ぜる",
    shortTitle: "② 粉末・具材を混ぜる",
    subtitle:
      "完成されたベース配合の比率は変えず、お店の茶葉粉末・スパイス・機能性パウダー・固形具材を混ぜ込みます。",
    devFeeExTax: 10000,
    availableFormats: ["cup", "bulk"],
    idealFor: "自家焙煎珈琲やオリジナル茶葉、健康素材などを活かして手頃にお店の味を作りたい方に",
    detailPoints: [
      "事前ヒアリング後、3つの方向性をご提案してから試作（初回2パターン×各3個をお届け）",
      "基本試作費内で2回戦目まで調整可能（都度の材料1,500円・資材200円・60サイズ送料のみ実費）",
      "量産価格は定番と同額据え置き（カップ税込309円 ／ 2Lバルク税別4,000円 ※主役素材は無償ご支給）",
    ],
  },
  {
    id: "custom_recipe",
    badge: "試作費 30,000円（税別）＋実費",
    title: "プラン③：果物・特産品から専用開発する",
    shortTitle: "③ 果物・特産品から開発",
    subtitle:
      "果物・果汁・ピューレ・ペースト・酒粕など、素材の水分や糖度・酸味に合わせて土台の配合から専用設計します。",
    devFeeExTax: 30000,
    availableFormats: ["cup", "bulk"],
    idealFor:
      "農園の果物や地域の特産品、看板食材の個性を最大限に引き出した特別な一品を作りたい方に",
    detailPoints: [
      "素材の糖度・水分・脂質バランスを科学的に計算し、冷凍庫の出し入れでもなめらかさが続く専用配合を設計",
      "初回はバランス違い2種×各3個をお届け。2回戦目（大幅な方向変更も含む）まで基本試作費内で対応",
      "1つのレシピから「物販用100mlカップ」と「店内提供用2Lバルク」の両方をご注文いただけます",
    ],
  },
];

export interface SimulationInput {
  courseId: OemCourseId;
  formatId: OemFormatId;
  /** お客様の想定販売価格（税込：カップ1個 または バルク80ml 1皿） */
  sellingPriceTaxIncl: number;
  regionKey: ShippingRegionKey;
  /** 既存取引先で通常納品と試作品を同梱できる場合 true */
  bundleTrialWithRegularOrder: boolean;
}

export interface SimulationResult {
  /** 初回試作にかかるご負担合計（税込：開発費＋材料1500円＋資材200円＋送料） */
  initialTrialTotalTaxIncl: number;
  /** 初回最小ロット（カップ60個 or バルク6L＝3本）の仕入＋送料合計（税込） */
  firstLotTotalTaxIncl: number;
  /** 試作〜初回最小ロット納品までの初期ご負担総額（税込） */
  initialGrandTotalTaxIncl: number;
  /** 推奨ロット（120個 or 12L＝6本）での1食あたり実質仕入目安（送料込・税抜） */
  unitCostExTaxRecommended: number;
  /** 1食販売あたりのお店の手残り粗利（税抜目安） */
  unitGrossProfitExTax: number;
  /** お店の粗利率目安（%） */
  storeGrossMarginPercent: number;
  /** 推奨ロット（120個 or 12L＝約144食）完売時に残るお店の粗利合計（税抜目安） */
  recommendedLotProfitExTax: number;
  /** 最初にかかった試作のご負担が日々の売上でなじむ目安個数（または皿数） */
  familiarizeUnits: number;
  /** 1日3食ペースでの目安週間数 */
  familiarizeWeeksAt3PerDay: number;
  /** 単位呼称（個 または 皿） */
  servingUnitLabel: "個" | "皿";
  /** 推奨ロットの説明ラベル */
  recommendedLotLabel: string;
}

/**
 * お客様目線での穏やかな販売・ご負担目安試算（純粋関数）
 */
export function simulateCustomerEconomics(input: SimulationInput): SimulationResult {
  const region = SHIPPING_REGIONS.find((r) => r.key === input.regionKey) ?? SHIPPING_REGIONS[3];
  const course = OEM_COURSES.find((c) => c.id === input.courseId) ?? OEM_COURSES[1];

  // 試作費用（コース①は0円）
  const hasTrial = course.devFeeExTax > 0;
  const devFeeTaxIncl = Math.round(course.devFeeExTax * (1 + PRICING_CONSTANTS.standardTaxRate));
  const trialIngredientTaxIncl = hasTrial
    ? Math.round(PRICING_CONSTANTS.trialIngredientFeeExTax * (1 + PRICING_CONSTANTS.foodTaxRate))
    : 0;
  const trialMaterialTaxIncl = hasTrial
    ? Math.round(PRICING_CONSTANTS.trialMaterialFeeExTax * (1 + PRICING_CONSTANTS.standardTaxRate))
    : 0;
  const trialShippingTaxIncl =
    hasTrial && !input.bundleTrialWithRegularOrder ? region.coolFareTaxIncl.size60 : 0;

  const initialTrialTotalTaxIncl =
    devFeeTaxIncl + trialIngredientTaxIncl + trialMaterialTaxIncl + trialShippingTaxIncl;

  if (input.formatId === "cup") {
    // カップ物販（軽減税率8%想定）
    const sellingExTax = input.sellingPriceTaxIncl / (1 + PRICING_CONSTANTS.foodTaxRate);
    const cupExTax = PRICING_CONSTANTS.cupOemPriceTaxIncl / (1 + PRICING_CONSTANTS.foodTaxRate);

    // 初回最小60個（100サイズ1箱）
    const firstLotProductTaxIncl =
      PRICING_CONSTANTS.cupMinLot * PRICING_CONSTANTS.cupOemPriceTaxIncl;
    const firstLotShippingTaxIncl = region.coolFareTaxIncl.size100;
    const firstLotTotalTaxIncl = firstLotProductTaxIncl + firstLotShippingTaxIncl;

    // 推奨120個（100サイズ1箱で計算）
    const recShippingExTaxPerCup =
      region.coolFareTaxIncl.size100 /
      (1 + PRICING_CONSTANTS.standardTaxRate) /
      PRICING_CONSTANTS.cupRecommendedLot;
    const unitCostExTaxRecommended = cupExTax + recShippingExTaxPerCup;
    const unitGrossProfitExTax = Math.max(0, sellingExTax - unitCostExTaxRecommended);
    const storeGrossMarginPercent =
      sellingExTax > 0 ? Math.round((unitGrossProfitExTax / sellingExTax) * 100) : 0;
    const recommendedLotProfitExTax = Math.round(
      unitGrossProfitExTax * PRICING_CONSTANTS.cupRecommendedLot
    );

    const trialBurdenExTax = initialTrialTotalTaxIncl / (1 + PRICING_CONSTANTS.standardTaxRate);
    const familiarizeUnits =
      hasTrial && unitGrossProfitExTax > 0 ? Math.ceil(trialBurdenExTax / unitGrossProfitExTax) : 0;
    const familiarizeWeeksAt3PerDay =
      familiarizeUnits > 0 ? Math.max(1, Math.round(familiarizeUnits / 21)) : 0;

    return {
      initialTrialTotalTaxIncl,
      firstLotTotalTaxIncl,
      initialGrandTotalTaxIncl: initialTrialTotalTaxIncl + firstLotTotalTaxIncl,
      unitCostExTaxRecommended: Math.round(unitCostExTaxRecommended),
      unitGrossProfitExTax: Math.round(unitGrossProfitExTax),
      storeGrossMarginPercent,
      recommendedLotProfitExTax,
      familiarizeUnits,
      familiarizeWeeksAt3PerDay,
      servingUnitLabel: "個",
      recommendedLotLabel: "120個（1箱おススメ単位）",
    };
  }

  // 業務用2Lバルク（店内イートイン10%税率想定、#12ディッシャー約80ml＝2Lあたり24皿＝6Lで72皿、12Lで144皿目安）
  const servingsPerTub = 24; // ロス考慮の安全値（1Lあたり12皿）
  const recTubs = PRICING_CONSTANTS.bulkOemRecommendedTubs; // 6本＝12L＝144皿
  const recServings = servingsPerTub * recTubs;

  const sellingExTax = input.sellingPriceTaxIncl / (1 + PRICING_CONSTANTS.standardTaxRate);
  const firstLotProductTaxIncl =
    PRICING_CONSTANTS.bulkOemMinTubs * PRICING_CONSTANTS.bulk2LPriceTaxIncl;
  const firstLotShippingTaxIncl = region.coolFareTaxIncl.size100;
  const firstLotTotalTaxIncl = firstLotProductTaxIncl + firstLotShippingTaxIncl;

  // 推奨12L（6本）は120サイズ1箱（15kg以内）
  const recTotalCostExTax =
    recTubs * PRICING_CONSTANTS.bulk2LPriceExTax +
    region.coolFareTaxIncl.size120 / (1 + PRICING_CONSTANTS.standardTaxRate);
  const unitCostExTaxRecommended = recTotalCostExTax / recServings;
  const unitGrossProfitExTax = Math.max(0, sellingExTax - unitCostExTaxRecommended);
  const storeGrossMarginPercent =
    sellingExTax > 0 ? Math.round((unitGrossProfitExTax / sellingExTax) * 100) : 0;
  const recommendedLotProfitExTax = Math.round(unitGrossProfitExTax * recServings);

  const trialBurdenExTax = initialTrialTotalTaxIncl / (1 + PRICING_CONSTANTS.standardTaxRate);
  const familiarizeUnits =
    hasTrial && unitGrossProfitExTax > 0 ? Math.ceil(trialBurdenExTax / unitGrossProfitExTax) : 0;
  const familiarizeWeeksAt3PerDay =
    familiarizeUnits > 0 ? Math.max(1, Math.round(familiarizeUnits / 21)) : 0;

  return {
    initialTrialTotalTaxIncl,
    firstLotTotalTaxIncl,
    initialGrandTotalTaxIncl: initialTrialTotalTaxIncl + firstLotTotalTaxIncl,
    unitCostExTaxRecommended: Math.round(unitCostExTaxRecommended),
    unitGrossProfitExTax: Math.round(unitGrossProfitExTax),
    storeGrossMarginPercent,
    recommendedLotProfitExTax,
    familiarizeUnits,
    familiarizeWeeksAt3PerDay,
    servingUnitLabel: "皿",
    recommendedLotLabel: "12L（2L×6本・約144皿分）",
  };
}
