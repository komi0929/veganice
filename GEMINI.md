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
