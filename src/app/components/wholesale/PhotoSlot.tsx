import Image from "next/image";

export interface PhotoSlotProps {
  /** 実写写真のパス。未設定（null / undefined / 空文字）の場合は枠ごと描画しない */
  src?: string | null;
  alt: string;
  aspectClassName?: string;
  wrapperClassName?: string;
  priority?: boolean;
  sizes?: string;
  objectPositionClassName?: string;
}

export default function PhotoSlot({
  src = null,
  alt,
  aspectClassName = "aspect-[4/3]",
  wrapperClassName = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  objectPositionClassName = "object-cover object-center",
}: PhotoSlotProps) {
  if (!src) {
    return null;
  }

  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl bg-[#f4f0e8] ${aspectClassName} ${wrapperClassName}`}
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
