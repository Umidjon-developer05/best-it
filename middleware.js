import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { i18n } from "./i18n.config";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request) {
  const negotiatorHeaders = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore locales are readonly
  const locales = i18n.locales;
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  const locale = matchLocale(languages, locales, i18n.defaultLocale);

  return locale;
}

export default withAuth(
  function middleware(request) {
    const pathname = request.nextUrl.pathname;
    const locale = getLocale(request);
    const token = request.nextauth?.token;
    // if (pathname === "/api/auth/signin") {
    //   return NextResponse.redirect(new URL("/uz", request.url));
    // }

    // if (
    //   token &&
    //   token.email !== process.env.NEXT_PUBLIC_EMAIL &&
    //   token.email !== process.env.NEXT_PUBLIC_GITHUB &&
    //   pathname.includes(`/admin`)
    // ) {
    //   return NextResponse.redirect(new URL(`/`, request.url));
    // }

    const pathnameIsMissingLocale = i18n.locales.every(
      (locale) =>
        !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    if (pathnameIsMissingLocale) {
      const locale = getLocale(request);
      return NextResponse.redirect(
        new URL(
          `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
          request.url
        )
      );
    }
  },
  {
    callbacks: {
      authorized: (params) => {
        const { token } = params;
        return !!token ? !!token : "/ru";
      },
    },
  }
);

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
