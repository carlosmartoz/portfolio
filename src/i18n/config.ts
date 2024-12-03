// Locale
export type Locale = (typeof locales)[number];

// Locales
export const locales = ["en", "es"] as const;

// Default locale
export const defaultLocale: Locale = "es";
