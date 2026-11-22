/**
 * 電話番号・郵便番号・住所の正規化＆自動補完ヘルパー（スマホ自動入力の +81 や番地のみ入力を防止）
 */

const PREFECTURE_REGEX =
  /(北海道|青森県|岩手県|宮城県|秋田県|山形県|福島県|茨城県|栃木県|群馬県|埼玉県|千葉県|東京都|神奈川県|新潟県|富山県|石川県|福井県|山梨県|長野県|岐阜県|静岡県|愛知県|三重県|滋賀県|京都府|大阪府|兵庫県|奈良県|和歌山県|鳥取県|島根県|岡山県|広島県|山口県|徳島県|香川県|愛媛県|高知県|福岡県|佐賀県|長崎県|熊本県|大分県|宮崎県|鹿児島県|沖縄県)/;

export function toHalfWidthAscii(input: string): string {
  return input
    .replace(/[０-９]/g, (ch) => String.fromCharCode(ch.charCodeAt(0) - 0xfee0))
    .replace(/[ー−―‐ｰ]/g, "-")
    .replace(/＋/g, "+")
    .replace(/　/g, " ");
}

/**
 * スマホ自動入力の「+81 90-1234-5678」「+819012345678」等を国内表記「090-...」へ正規化する
 */
export function normalizeDomesticPhone(raw: string): string {
  const half = toHalfWidthAscii(raw).trim();
  if (!half) return "";

  let cleaned = half.replace(/[()\s]/g, "");
  if (cleaned.startsWith("+81")) {
    let rest = cleaned.slice(3).replace(/^-+/, "");
    if (rest && !rest.startsWith("0")) {
      rest = `0${rest}`;
    }
    cleaned = rest;
  }
  // 連続ハイフン整理
  cleaned = cleaned.replace(/-+/g, "-").replace(/^-|-$/g, "");
  return cleaned;
}

/**
 * 郵便番号から数字7桁を抽出し「NNN-NNNN」形式に整える
 */
export function normalizePostalCode(raw: string): { formatted: string; digits: string } {
  const half = toHalfWidthAscii(raw).replace(/〒/g, "").trim();
  const digits = half.replace(/[^\d]/g, "");
  if (digits.length === 7) {
    return {
      formatted: `${digits.slice(0, 3)}-${digits.slice(3)}`,
      digits,
    };
  }
  return { formatted: half, digits };
}

export function hasPrefecture(address: string): boolean {
  return PREFECTURE_REGEX.test(address);
}

/**
 * 既存入力値（空欄、またはスマホ自動入力による「1-2-3」等の番地のみ）に都道府県・市区町村・町域を安全に補完する
 */
export function mergeZipPrefixIntoAddress(
  currentAddress: string,
  prefecture: string,
  city: string,
  town: string
): string {
  const prefix = `${prefecture}${city}${town}`;
  const trimmed = currentAddress.trim();
  if (!trimmed) {
    return prefix;
  }
  if (hasPrefecture(trimmed)) {
    return trimmed;
  }
  if (city && trimmed.startsWith(city)) {
    return `${prefecture}${trimmed}`;
  }
  if (town && trimmed.startsWith(town)) {
    return `${prefecture}${city}${trimmed}`;
  }
  return `${prefix} ${trimmed}`;
}

export interface ZipLookupResult {
  prefecture: string;
  city: string;
  town: string;
}

export async function lookupAddressByZipDigits(
  digits: string,
  timeoutMs = 2500
): Promise<ZipLookupResult | null> {
  if (!/^\d{7}$/.test(digits)) return null;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${digits}`, {
      signal: controller.signal,
    });
    if (!res.ok) return null;
    const json = (await res.json()) as {
      results?: { address1: string; address2: string; address3: string }[] | null;
    };
    const hit = json.results?.[0];
    if (!hit) return null;
    return {
      prefecture: hit.address1 ?? "",
      city: hit.address2 ?? "",
      town: hit.address3 ?? "",
    };
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}
