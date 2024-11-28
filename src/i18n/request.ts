// Services
import { getUserLocale } from "@/services/locale";

// Next intl
import { getRequestConfig } from "next-intl/server";

// Request
export default getRequestConfig(async () => {
  // Locale
  const locale = await getUserLocale();

  // Return
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
