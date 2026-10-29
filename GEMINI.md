# Antigravity AI Coding Rules

This project uses Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4.
Please follow these guidelines for highest quality output:

## 1. Type Safety

- Use TypeScript for all files. Avoid `any`. Use `unknown` if necessary.
- Define explicit interfaces or types for all component props.
- Use strict typing for API routes and Server Actions.

## 2. React & Next.js Best Practices

- Prefer Server Components (RSC) by default. Only use `'use client'` when hooks (`useState`, `useEffect`) or browser APIs are needed.
- Keep components small, focused, and single-responsibility.
- Use Server Actions for data mutations instead of API routes where possible.
- Use Next.js built-in `Image` and `Link` components for performance.

## 3. Styling

- Use Tailwind CSS v4 utility classes.
- Avoid inline styles.
- Keep styling responsive and accessible (mobile-first approach).

## 4. Code Style

- Write clean, readable code with descriptive variable and function names.
- Keep functions pure where possible.
- Include comments for complex logic, but prefer self-documenting code.

## 5. Automatic GitHub Backup (Mandatory)

- Every time code changes or features are implemented and verified, commit the changes and push directly to `origin main` (`https://github.com/komi0929/veganice.git`).
- Ensure `.env*` or sensitive credentials are never committed.
- Keep the remote repository always synchronized with latest developments as a live backup.

## 6. Copywriting & Value Proposition Rules (Strictly Enforced)

- **【絶対禁止】「すくって盛るだけ」「ディッシャーですくうだけ」等を売り・メリット・キャッチコピーとしてアピールすること**
  - アイスクリームとして当然すぎる動作であり、他の業務用アイスと何の差別化にもならず、飲食店のプロに対して的外れで稚拙な印象を与えるため完全に禁止。
- **【絶対禁止】「−18℃からでもスッとディッシャーが通る」「カチカチに固まらず削る力や解凍待ちが不要」等の表現**
  - 誇張表現であり、そもそも「解凍が必要なアイス」など存在しないと多くの人が思っているため禁止。
- **アピールすべき真の強み・差別化ポイント**：
  1. **食後の味・後味**: 乳脂肪ゼロで油分が口に残らず、満足感ある食事の後でもさっぱり食べきれる。
  2. **米粉独自製法の真のメリット（テクスチャーと業務用での持続性）**: 植物性アイスにありがちなシャリシャリ感（シャーベット感）がなく、滑らかな舌触りを実現。さらに業務用で冷凍庫を出し入れしてもその滑らかさが続く。
  3. **発酵素材のコク**: 甘酒・みそといった日本の発酵素材による深いうまみとコク。
  4. **安全と実績**: 専用工房製造によるコンタミゼロ、薬院実店舗のGoogle ★4.7・海外客からの圧倒的な絶賛。
