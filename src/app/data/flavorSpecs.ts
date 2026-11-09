export interface FlavorNutrition {
  /** 熱量 */
  calories: string;
  /** たんぱく質 */
  protein: string;
  /** 脂質 */
  fat: string;
  /** 炭水化物 */
  carbs: string;
  /** 食塩相当量 */
  salt: string;
}

export interface FlavorSpec {
  /** 味の名前（基準名） */
  name: string;
  /** 原材料名 */
  ingredients: string;
  /** アレルゲン（「—」の場合は画面上でアレルゲン行を非表示にする） */
  allergens: string;
  /** 栄養成分（1カップ（100ml）あたり） */
  nutrition: FlavorNutrition;
  /** 保存方法 */
  storageMethod: string;
}

export const FLAVOR_STORAGE_METHOD = "−18℃以下で保存（要冷凍）";

export const FLAVOR_SPECS: Record<string, FlavorSpec> = {
  ショコラ: {
    name: "ショコラ",
    ingredients:
      "アーモンドミルク（アメリカ産）、甜菜糖、ココナッツクリーム、ターベルチュールチョコレート、ココアパウダー、米粉、白みそ、バニラオイル（一部に大豆・アーモンドを含む）",
    allergens: "大豆・アーモンド",
    nutrition: {
      calories: "162.7kcal",
      protein: "2.1g",
      fat: "6.3g",
      carbs: "23.69g",
      salt: "0.23g",
    },
    storageMethod: FLAVOR_STORAGE_METHOD,
  },
  抹茶: {
    name: "抹茶",
    ingredients:
      "豆乳（国産・非遺伝子組換え）、甘酒、きび砂糖、米油、豆乳ホイップ、抹茶、白みそ、米粉、バニラオイル、クロレラ（一部に大豆を含む）",
    allergens: "大豆",
    nutrition: {
      calories: "223kcal",
      protein: "2.4g",
      fat: "2.4g",
      carbs: "24.9g",
      salt: "0.2g",
    },
    storageMethod: FLAVOR_STORAGE_METHOD,
  },
  ほうじ茶: {
    name: "ほうじ茶",
    ingredients:
      "豆乳（国産・非遺伝子組換え）、甘酒、きび砂糖、米油、豆乳ホイップ、ほうじ茶、白みそ、米粉、バニラオイル（一部に大豆を含む）",
    allergens: "大豆",
    nutrition: {
      calories: "227.1kcal",
      protein: "2.3g",
      fat: "12.9g",
      carbs: "25.5g",
      salt: "0.2g",
    },
    storageMethod: FLAVOR_STORAGE_METHOD,
  },
  バニラ: {
    name: "バニラ",
    ingredients:
      "豆乳（国産・遺伝子組換えではない）、甜菜糖、ココナッツミルクパウダー、米粉、白みそ、バニラオイル（一部に大豆を含む）",
    allergens: "大豆",
    nutrition: {
      calories: "179.3kcal",
      protein: "3.1g",
      fat: "8.9g",
      carbs: "19.8g",
      salt: "0.2g",
    },
    storageMethod: FLAVOR_STORAGE_METHOD,
  },
  UMAMIバニラ: {
    name: "UMAMIバニラ",
    ingredients:
      "豆乳（国内製造・非遺伝子組換え）、甘酒、米油、きび糖、甜菜糖、玄米粉、白みそ、りんごピューレ、バニラビーンズ、塩／バニラエキストラクト（原材料の一部に大豆、りんごを含む）",
    allergens: "大豆・りんご",
    nutrition: {
      calories: "194kcal",
      protein: "2.1g",
      fat: "6.9g",
      carbs: "31.0g",
      salt: "0.1g",
    },
    storageMethod: FLAVOR_STORAGE_METHOD,
  },
  アールグレイ: {
    name: "アールグレイ",
    ingredients:
      "豆乳（国産・遺伝子組換えではない）、甜菜糖、紅茶、米油、米粉、白みそ、香料（ベルガモット）、バニラオイル（一部に大豆を含む）",
    allergens: "大豆",
    nutrition: {
      calories: "168.8kcal",
      protein: "2.3g",
      fat: "7.6g",
      carbs: "23.2g",
      salt: "0.2g",
    },
    storageMethod: FLAVOR_STORAGE_METHOD,
  },
  もも: {
    name: "もも",
    ingredients:
      "もも（国産）、甜菜糖、ココナッツクリーム、レモン果汁、バニラオイル（一部にももを含む）",
    allergens: "もも",
    nutrition: {
      calories: "131.4kcal",
      protein: "0.7g",
      fat: "1.8g",
      carbs: "28.6g",
      salt: "0.0g",
    },
    storageMethod: FLAVOR_STORAGE_METHOD,
  },
  りんご: {
    name: "りんご",
    ingredients:
      "りんご（国産）、甜菜糖、ココナッツクリーム、レモン果汁、米粉、バニラオイル（一部にりんごを含む）",
    allergens: "りんご",
    nutrition: {
      calories: "120.7kcal",
      protein: "0.6g",
      fat: "1.89g",
      carbs: "26.9g",
      salt: "0.0g",
    },
    storageMethod: FLAVOR_STORAGE_METHOD,
  },
  ミックスベリー: {
    name: "ミックスベリー",
    ingredients:
      "甜菜糖、いちごピューレ、ラズベリーピューレ、ココナッツクリーム、レモン果汁、米油、米粉、バニラオイル",
    allergens: "—",
    nutrition: {
      calories: "169.9kcal",
      protein: "0.5g",
      fat: "7.8g",
      carbs: "25.0g",
      salt: "0.0g",
    },
    storageMethod: FLAVOR_STORAGE_METHOD,
  },
  ドラゴンフルーツ: {
    name: "ドラゴンフルーツ",
    ingredients:
      "ドラゴンフルーツ、甜菜糖、パインアップル、米油、ココナッツミルク、レモン果汁、米粉、バニラオイル（一部にりんごを含む）",
    allergens: "りんご",
    nutrition: {
      calories: "212.2kcal",
      protein: "1.2g",
      fat: "13.5g",
      carbs: "22.2g",
      salt: "0.2g",
    },
    storageMethod: FLAVOR_STORAGE_METHOD,
  },
  マンゴー: {
    name: "マンゴー",
    ingredients:
      "アップルマンゴーピューレ（エクアドル産）、甜菜糖、ココナッツクリーム、レモン果汁、米粉、バニラオイル",
    allergens: "—",
    nutrition: {
      calories: "134.8kcal",
      protein: "0.9g",
      fat: "2.5g",
      carbs: "28.6g",
      salt: "0.0g",
    },
    storageMethod: FLAVOR_STORAGE_METHOD,
  },
};

const FLAVOR_NAME_ALIASES: Record<string, string> = {
  ほうじ: "ほうじ茶",
  "バニラ（ココナッツ）": "バニラ",
  "バニラ(ココナッツ)": "バニラ",
};

/**
 * カード上の表示名（改行や表記ゆれを含む）から該当フレーバーの仕様を取得する
 */
export function getFlavorSpec(rawName: string): FlavorSpec | undefined {
  const normalized = rawName.replace(/\r?\n/g, "").trim();
  const canonicalName = FLAVOR_NAME_ALIASES[normalized] ?? normalized;
  return FLAVOR_SPECS[canonicalName];
}
