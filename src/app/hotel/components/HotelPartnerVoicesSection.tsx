export interface HotelPartnerVoiceItem {
  innName: string;
  areaAndStyle: string;
  comment: string;
  usedFlavors: string;
}

/**
 * ご試食・ご導入いただいた宿泊施設様の声（ご掲載許可をいただいた施設様から順次追加）
 */
export const HOTEL_PARTNER_VOICES: readonly HotelPartnerVoiceItem[] = [];

export default function HotelPartnerVoicesSection() {
  return (
    <section
      id="ryokan-voices"
      className="scroll-mt-14 border-t border-stone-200/70 bg-[#fafaf8] py-12 sm:py-16"
    >
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-brand mb-2 inline-flex items-center gap-2 font-sans text-xs font-bold tracking-wider">
          <span className="bg-brand inline-block h-px w-5" aria-hidden="true" />
          お宿・ホテル様からの声
        </p>
        <h2 className="text-ink font-serif text-2xl leading-snug font-bold sm:text-3xl">
          ご試食・ご導入いただいたお宿様の声
        </h2>

        {HOTEL_PARTNER_VOICES.length > 0 ? (
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {HOTEL_PARTNER_VOICES.map((voice) => (
              <article
                key={voice.innName}
                className="rounded-2xl border border-stone-200/80 bg-white p-5 shadow-2xs sm:p-6"
              >
                <p className="text-ink font-sans text-sm leading-relaxed">「{voice.comment}」</p>
                <div className="mt-3 border-t border-stone-100 pt-3 font-sans text-xs">
                  <p className="text-ink font-bold">{voice.innName}</p>
                  <p className="text-ink-muted mt-0.5">
                    {voice.areaAndStyle} ／ 採用・試食：{voice.usedFlavors}
                  </p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-5 rounded-3xl border border-dashed border-stone-300 bg-white p-6 sm:p-7">
            <p className="text-brand font-sans text-xs font-bold">
              現在、全国の旅館・ホテル様にてご試食を進めていただいております（順次掲載予定）
            </p>
            <p className="text-ink-light mt-2 font-sans text-xs leading-[1.85] sm:text-sm">
              サンプルをお申し込みいただいたお宿様からは、「海外からのヴィーガンのお客様が多く、夕食の水菓子が果物だけになりがちだった」「小さな宿なので定期発注なしで必要な時だけ頼める形を探していた」「海外のお客様が日本の味を感じられる抹茶・ほうじ茶や、屋号入りカップを試したい」といったお声をいただいております。実際のご試食後のご感想は、掲載許可をいただいたお宿様より順次こちらにご紹介いたします。
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
