// Server component
"use server";

// next
import { cookies } from "next/headers";

// I18n
import { Locale, defaultLocale } from "@/i18n/config";

// Cookie name
const COOKIE_NAME = "NEXT_LOCALE";

// Function
export async function getUserLocale() {
  // Return
  return (await cookies()).get(COOKIE_NAME)?.value || defaultLocale;
}

// function
export async function setUserLocale(locale: Locale) {
  // Cookies
  (await cookies()).set(COOKIE_NAME, locale);
}
