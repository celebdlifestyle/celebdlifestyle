import localFont from "next/font/local";

export const dedot = localFont({
  src: "./Didot.otf", // ✅ Must be relative path
  display: "swap",
});

export const dedot_bold = localFont({
  src: "./DidotBold.otf", // ✅ Must be relative path
  display: "swap",
});

export const dedot_italic = localFont({
  src: "./DidotItalic.otf", // ✅ Must be relative path
  display: "swap",
});

export const dedot_title = localFont({
  src: "./DidotTitle.otf", // ✅ Must be relative path
  display: "swap",
});
