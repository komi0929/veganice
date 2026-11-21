import Image from "next/image";
import { Camera } from "lucide-react";

export interface PhotoSlotProps {
  /** 実写写真が用意できたらパスを指定するだけで自動で Image 表示に切り替わる */
  src?: string | null;
  alt: string;
  /** 空き枠時に表示する撮影イメージの説明 */
  placeholderLabel: string;
  placeholderSub?: string;
  aspectClassName?: string;
  priority?: boolean;
  sizes?: string;
  objectPositionClassName?: string;
}

export default function PhotoSlot({
  src = null,
  alt,
  placeholderLabel,
  placeholderSub,
  aspectClassName = "aspect-[4/3]",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  objectPositionClassName = "object-cover object-center",
}: PhotoSlotProps) {
  if (src) {
    return (
      <div
        className={`relative w-full overflow-hidden rounded-2xl bg-[#f4f0e8] ${aspectClassName}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={objectPositionClassName}
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`flex w-full flex-col items-center justify-center rounded-2xl border border-dashed border-[#cbc3b4] bg-[#f5f1e9] px-4 py-5 text-center ${aspectClassName}`}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-[#6e675b] shadow-2xs">
        <Camera className="h-4 w-4" aria-hidden="true" />
      </span>
      <p className="text-ink mt-2 font-sans text-xs leading-snug font-bold sm:text-sm">
        {placeholderLabel}
      </p>
      {placeholderSub && (
        <p className="text-ink-muted mt-1 font-sans text-[11px] leading-relaxed">
          {placeholderSub}
        </p>
      )}
    </div>
  );
}
