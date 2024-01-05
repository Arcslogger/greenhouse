import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#040117",
        shimmer: "#FDEACF",
        text: "#FFFCF0",
        dimmer: "#B0A38F",
        whimper: "#454442",
        iris: "#9A8FB0",
      },
      typography: (theme: any) => ({
        invert: {
          css: {
            h1: {
              fontSize: theme("fontSize.xl"),
              fontWeight: theme("fontWeight.medium"),
            },
            h2: {
              fontSize: theme("fontSize.lg"),
              fontWeight: theme("fontWeight.medium"),
            },
            h3: {
              fontSize: theme("fontSize.base"),
              fontWeight: theme("fontWeight.medium"),
            },
            h4: {
              fontSize: theme("fontSize.base"),
              fontWeight: theme("fontWeight.base"),
            },
            blockquote: {
              fontWeight: theme("fontWeight.light"),
            },
            p: {
              lineHeight: 1.5,
            },
            li: {
              lineHeight: 1.5,
              margin: "0.25rem 0",
            },
            "--tw-prose-body": theme("colors.text"),
            "--tw-prose-headings": theme("colors.shimmer"),
            "--tw-prose-lead": theme("colors.shimmer"),
            "--tw-prose-links": theme("colors.iris"),
            "--tw-prose-bold": theme("colors.shimmer"),
            "--tw-prose-counters": theme("colors.shimmer"),
            "--tw-prose-bullets": theme("colors.shimmer"),
            "--tw-prose-hr": theme("colors.whimper / 50%"),
            "--tw-prose-quotes": theme("colors.gray[300]"),
            "--tw-prose-quote-borders": theme("colors.iris / 30%"),
            "--tw-prose-captions": theme("colors.shimmer"),
            "--tw-prose-code": theme("colors.iris"),
            "--tw-prose-pre-code": theme("colors.gray[300]"),
            "--tw-prose-pre-bg": theme("colors.whimper / 30%"),
            "--tw-prose-th-borders": theme("colors.shimmer"),
            "--tw-prose-td-borders": theme("colors.shimmer"),
            "--tw-prose-invert-body": theme("colors.shimmer"),
            "--tw-prose-invert-headings": theme("colors.white"),
            "--tw-prose-invert-lead": theme("colors.shimmer"),
            "--tw-prose-invert-links": theme("colors.white"),
            "--tw-prose-invert-bold": theme("colors.white"),
            "--tw-prose-invert-counters": theme("colors.shimmer"),
            "--tw-prose-invert-bullets": theme("colors.shimmer"),
            "--tw-prose-invert-hr": theme("colors.shimmer"),
            "--tw-prose-invert-quotes": theme("colors.shimmer"),
            "--tw-prose-invert-quote-borders": theme("colors.shimmer"),
            "--tw-prose-invert-captions": theme("colors.shimmer"),
            "--tw-prose-invert-code": theme("colors.gray[300]"),
            "--tw-prose-invert-pre-code": theme("colors.gray[300]"),
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-prose-invert-th-borders": theme("colors.shimmer"),
            "--tw-prose-invert-td-borders": theme("colors.shimmer"),
          },
        },
        lg: {
          css: {
            h1: {
              fontSize: theme("fontSize.xl"),
              fontWeight: theme("fontWeight.medium"),
            },
            h2: {
              fontSize: theme("fontSize.lg"),
              fontWeight: theme("fontWeight.medium"),
            },
            h3: {
              fontSize: theme("fontSize.base"),
              fontWeight: theme("fontWeight.medium"),
            },
            h4: {
              fontSize: theme("fontSize.base"),
              fontWeight: theme("fontWeight.normal"),
            },
            blockquote: {
              fontWeight: theme("fontWeight.light"),
            },
            p: {
              lineHeight: 1.6,
            },
            li: {
              lineHeight: 1.6,
              margin: "0.25rem 0",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
