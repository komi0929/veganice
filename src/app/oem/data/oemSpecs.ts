/**
 * SoyStories OEM・PB製造 共通マスタ・料金試算ロジック（v3.0 シンプル2プラン確定版）
 *
 * 【事業設計の基本原則】
 * 1. 一番かんたんなOEM：プラン①「フタだけお店ロゴにする」（開発費 0円 ／ 100mlカップ 税込309円・60個〜）
 * 2. おすすめ本命：プラン②「お店の素材でオリジナルアイスをつくる」（試作開発費 税別30,000円＋試作実費 ／ 100mlカップ・2LバルクどちらでもOK）
 * 3. 量産価格は定番卸と同額据え置き（カップ税込309円［シールご支給15円引後］、2Lバルク税別4,000円 ※主役素材は無償ご支給）
 */

export interface ShippingRegion {
  key: ShippingRegionKey;
  label: string;
  prefecturesHint: string;
  /** クール冷凍便 税込送料（60サイズ：試作6個 ／ 100サイズ：カップ60〜120個・バルク6L ／ 120サイズ：バルク12L） */
  coolFareTaxIncl: {
    size60: number;
    size100: number;
    size120: number;
  };
}

export type ShippingRegionKey =
  | "kyushu_chugoku"
  | "shikoku_kansai"
  | "chubu_hokuriku"
  | "kanto_shinetsu"
  | "tohoku"
  | "hokkaido_okinawa";

export const SHIPPING_REGIONS: ReadonlyArray<ShippingRegion> = [
  {
    key: "kyushu_chugoku",
    label: "九州・中国",
    prefecturesHint: "福岡・佐賀・長崎・熊本・大分・宮崎・鹿児島・山口・広島・岡山・島根・鳥取",
    coolFareTaxIncl: { size60: 1215, size100: 1710, size120: 2040 },
  },
  {
    key: "shikoku_kansai",
    label: "四国・関西",
    prefecturesHint: "大阪・京都・兵庫・滋賀・奈良・和歌山・香川・徳島・愛媛・高知",
    coolFareTaxIncl: { size60: 1325, size100: 1820, size120: 2150 },
  },
  {
    key: "chubu_hokuriku",
    label: "中部・北陸",
    prefecturesHint: "愛知・静岡・岐阜・三重・石川・富山・福井",
    coolFareTaxIncl: { size60: 1435, size100: 1930, size120: 2260 },
  },
  {
    key: "kanto_shinetsu",
    label: "関東・信越",
    prefecturesHint: "東京・神奈川・千葉・埼玉・茨城・栃木・群馬・山梨・長野・新潟",
    coolFareTaxIncl: { size60: 1655, size100: 2150, size120: 2480 },
  },
  {
    key: "tohoku",
    label: "東北",
    prefecturesHint: "宮城・山形・福島・青森・岩手・秋田",
    coolFareTaxIncl: { size60: 1875, size100: 2370, size120: 2700 },
  },
  {
    key: "hokkaido_okinawa",
    label: "北海道・沖縄",
    prefecturesHint: "北海道・沖縄",
    coolFareTaxIncl: { size60: 2205, size100: 2810, size120: 3250 },
  },
];

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

export type OemCourseId = "seal_only" | "custom_recipe";
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
    badge: "一番かんたん｜開発費 0円",
    title: "プラン①：フタだけお店ロゴにする",
    shortTitle: "① フタだけお店ロゴ（¥0）",
    subtitle: "人気の定番11フレーバーから味を選び、フタの丸シールだけお店のデザインにします。",
    devFeeExTax: 0,
    availableFormats: ["cup"],
    idealFor: "テイクアウト・レジ横販売・周年ギフトなどを、初期開発費なしで手軽に始めたいお店に",
    detailPoints: [
      "試作・開発費 0円（事前に6個おためしサンプルで味をお確かめいただけます）",
      "フタの丸シールをご支給いただく分、基準価格から税込15円引き（1個 税込309円）",
      "1つの味につき60個単位（120個で1箱ぴったりになり送料効率が最適です）",
    ],
  },
  {
    id: "custom_recipe",
    badge: "おすすめ｜カップもバルクも両方OK",
    title: "プラン②：お店の素材でオリジナルアイスをつくる",
    shortTitle: "② オリジナル開発（¥3万）",
    subtitle:
      "地産地消の食材・果物・お茶・珈琲・発酵素材など、お店のこだわり素材から専用レシピを開発します。",
    devFeeExTax: 30000,
    availableFormats: ["cup", "bulk"],
    idealFor: "お店ならではの食材を活かして、食後の看板デザートやオリジナル商品を作りたいお店に",
    detailPoints: [
      "初回はバランス違い2種×各3個（計6個）をお届け。2回戦目まで基本試作費内で調整可能",
      "完成したレシピは「店内用2Lバルク（税別4,000円・6L〜）」でも「物販用100mlカップ（税込309円・60個〜）」でも注文可能",
      "量産単価は定番卸と同額据え置き（主役素材は無償ご支給にて承ります）",
    ],
  },
];

export interface SimulationInput {
  courseId: OemCourseId;
  formatId: OemFormatId;
  /** お客様の想定販売価格（税込：カップ1個 または バルク80ml 1皿） */
  sellingPriceTaxIncl: number;
  regionKey: ShippingRegionKey;
  /** 既存の定期納品と試作便を同梱できる場合（試作送料0円） */
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

  // 試作費用（プラン①は0円）
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

  const trialBurdenExTax = hasTrial
    ? course.devFeeExTax +
      PRICING_CONSTANTS.trialIngredientFeeExTax +
      PRICING_CONSTANTS.trialMaterialFeeExTax +
      Math.round(trialShippingTaxIncl / (1 + PRICING_CONSTANTS.standardTaxRate))
    : 0;

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
  const servingsPerTub = 24;
  const recTubs = PRICING_CONSTANTS.bulkOemRecommendedTubs;
  const recServings = servingsPerTub * recTubs;

  const sellingExTax = input.sellingPriceTaxIncl / (1 + PRICING_CONSTANTS.standardTaxRate);
  const firstLotProductTaxIncl =
    PRICING_CONSTANTS.bulkOemMinTubs * PRICING_CONSTANTS.bulk2LPriceTaxIncl;
  const firstLotShippingTaxIncl = region.coolFareTaxIncl.size100;
  const firstLotTotalTaxIncl = firstLotProductTaxIncl + firstLotShippingTaxIncl;

  // 推奨12L（6本）は120サイズ1箱
  const recTotalCostExTax =
    recTubs * PRICING_CONSTANTS.bulk2LPriceExTax +
    region.coolFareTaxIncl.size120 / (1 + PRICING_CONSTANTS.standardTaxRate);
  const unitCostExTaxRecommended = recTotalCostExTax / recServings;
  const unitGrossProfitExTax = Math.max(0, sellingExTax - unitCostExTaxRecommended);
  const storeGrossMarginPercent =
    sellingExTax > 0 ? Math.round((unitGrossProfitExTax / sellingExTax) * 100) : 0;
  const recommendedLotProfitExTax = Math.round(unitGrossProfitExTax * recServings);

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
