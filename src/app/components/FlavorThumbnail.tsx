import Image from "next/image";

export interface FlavorThumbnailProps {
  name: string;
  image?: string;
  color?: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
}

/**
 * フレーバー写真またはプレースホルダー表示用コンポーネント。
 * 写真がある場合は Image を表示し、未登録の場合は指定色サークル＋「NEW」を表示。
 * 写真が届いたらデータに image を設定するだけで自動切り替え可能。
 */
export function FlavorThumbnail({
  name,
  image,
  color,
  className = "",
  imgClassName = "object-contain",
  sizes = "(max-width: 640px) 120px, 160px",
}: FlavorThumbnailProps) {
  if (image) {
    return (
      <div className={`relative h-full w-full ${className}`}>
        <Image
          src={image}
          alt={name.replace("\n", "")}
          fill
          className={imgClassName}
          sizes={sizes}
        />
      </div>
    );
  }

  return (
    <div className={`flex h-full w-full items-center justify-center ${className}`}>
      <div
        className="flex aspect-square w-[76%] max-w-[96px] items-center justify-center rounded-full shadow-inner transition-transform group-hover:scale-105"
        style={{ backgroundColor: color || "#e9a23b" }}
      >
        <span className="font-sans text-xs font-bold tracking-widest text-white sm:text-sm">
          NEW
        </span>
      </div>
    </div>
  );
}
