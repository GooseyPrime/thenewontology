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
        bg: "#0a0505",
        panel: "#1a0a0a",
        border: "rgba(139, 69, 19, 0.3)",
        text: "#e8d5c4",
        muted: "#cd853f",
        accent: "#ff4500",
        "accent-vol2": "#ff8c00",
        "accent-vol3": "#ffa500",
        warning: "#e8b050",
        danger: "#e07070",
        success: "#5cb87a",
      },
      fontFamily: {
        sans: ["var(--font-ui)", "Inter", "system-ui", "sans-serif"],
        serif: ["var(--font-body)", "Source Serif 4", "Georgia", "serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "ui-monospace", "monospace"],
      },
      maxWidth: { prose: "72ch" },
      boxShadow: {
        panel: "0 10px 30px rgba(0, 0, 0, 0.55)",
      },
      borderRadius: { xl: "14px" },
      typography: (theme: (s: string) => string) => ({
        DEFAULT: {
          css: {
            color: theme("colors.muted"),
            maxWidth: theme("maxWidth.prose"),
            a: {
              color: theme("colors.accent-vol2"),
              textDecoration: "none",
              borderBottom: `1px solid rgba(255, 140, 0, 0.35)`,
            },
            "a:hover": { color: theme("colors.accent-vol3") },
            h1: { color: theme("colors.text") },
            h2: {
              color: theme("colors.text"),
              borderBottom: `1px solid rgba(139, 69, 19, 0.35)`,
              paddingBottom: "0.35rem",
            },
            h3: { color: theme("colors.text") },
            h4: { color: theme("colors.text") },
            strong: { color: theme("colors.text") },
            blockquote: {
              color: theme("colors.text"),
              borderLeftColor: "rgba(255, 69, 0, 0.5)",
              backgroundColor: "rgba(26, 10, 10, 0.5)",
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
              border: `1px solid rgba(139, 69, 19, 0.3)`,
              borderRadius: "0.75rem",
            },
            hr: { borderColor: "rgba(139, 69, 19, 0.3)" },
            th: { color: theme("colors.muted") },
            td: { borderBottomColor: "rgba(139, 69, 19, 0.25)" },
          },
        },
      }),
    },
  },
  plugins: [typography],
} satisfies Config;
