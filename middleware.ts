import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isAuthenticated } from "@/helpers/lib/auth";

export const runtime = "nodejs";

const AUTH_ROUTES = [
  "/login",
  "/signup",
  "/verify-otp",
  "/forgot-password",
  "/reset-password",
];

export function middleware(request: NextRequest) {
  const token = request.cookies.get("userToken")?.value;
  const authenticated = isAuthenticated(token);
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/user") && !authenticated) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (AUTH_ROUTES.includes(pathname) && authenticated) {
    return NextResponse.redirect(new URL("/user/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/user/:path*",
    "/login",
    "/signup",
    "/verify-otp",
    "/forgot-password",
    "/reset-password",
  ],
};
