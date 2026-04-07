import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx,md,mdx}",
    "./pages/**/*.{ts,tsx,md,mdx}",
    "./components/**/*.{ts,tsx,md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0f1115",
        panel: "#161a22",
        border: "#2a2f3a",
        text: "#e6e8ec",
        muted: "#a6adbb",
        accent: "#9bbcff",
        warning: "#e6b566",
        danger: "#d17a7a",
        success: "#7fb69c",
      },
      fontFamily: {
        sans: ["var(--font-ui)", "Inter", "system-ui", "sans-serif"],
        serif: ["var(--font-body)", "Source Serif 4", "Georgia", "serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "ui-monospace", "monospace"],
      },
      maxWidth: { prose: "72ch" },
      boxShadow: {
        panel: "0 10px 30px rgba(0,0,0,0.45)",
      },
      borderRadius: { xl: "14px" },
      typography: (theme: (s: string) => string) => ({
        DEFAULT: {
          css: {
            color: theme("colors.text"),
            maxWidth: theme("maxWidth.prose"),
            a: {
              color: theme("colors.accent"),
              textDecoration: "none",
              borderBottom: `1px solid ${theme("colors.accent")}33`,
            },
            "a:hover": { borderBottomColor: theme("colors.accent") },
            h1: { color: theme("colors.text") },
            h2: {
              color: theme("colors.text"),
              borderBottom: `1px solid ${theme("colors.border")}`,
              paddingBottom: "0.35rem",
            },
            h3: { color: theme("colors.text") },
            h4: { color: theme("colors.muted") },
            strong: { color: theme("colors.text") },
            blockquote: {
              color: theme("colors.muted"),
              borderLeftColor: theme("colors.accent"),
              backgroundColor: theme("colors.panel"),
              padding: "1rem 1.25rem",
              borderRadius: "0.75rem",
            },
            code: {
              color: theme("colors.text"),
              backgroundColor: theme("colors.panel"),
              padding: "0.15em 0.35em",
              borderRadius: "0.35rem",
              fontWeight: "500",
            },
            "code::before": { content: '""' },
            "code::after": { content: '""' },
            pre: {
              backgroundColor: theme("colors.panel"),
              border: `1px solid ${theme("colors.border")}`,
              borderRadius: "0.75rem",
            },
            hr: { borderColor: theme("colors.border") },
            th: { color: theme("colors.muted") },
            td: { borderBottomColor: theme("colors.border") },
          },
        },
      }),
    },
  },
  plugins: [typography],
} satisfies Config;
