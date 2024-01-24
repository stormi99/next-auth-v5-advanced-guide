import NextAuth from "next-auth";

import authConfig from "@/auth.config";
import { auth as authFunction } from "@/auth"; // Adjust the import path as needed
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "@/routes";
import { fetchUserById } from "@/data/user";

const { auth } = NextAuth(authConfig);

export default auth(async (req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isLogoutRoute = nextUrl.pathname === "/auth/logout";

  if (isApiAuthRoute) {
    return null;
  }

  console.log(" === Middleware === ");
  console.log("isLoggedIn", isLoggedIn);
  console.log("isAuthRoute", isAuthRoute);
  console.log("isPublicRoute", isPublicRoute);
  console.log("nextUrl", nextUrl.pathname);
  if (isLoggedIn && !isLogoutRoute && !isPublicRoute) {
    console.log(" ");

    const session = await authFunction();

    if (session) {
      const id = session.user.id;
      const isOAuth = session.user.isOAuth;

      console.log("session user is oAuth?", isOAuth);

      const existingUser = await fetchUserById(id);
      console.log("existingUser", existingUser);

      if (!existingUser?.status || existingUser?.status === "error") {
        console.log("Should terminate because user is not found");

        return Response.redirect(new URL("/auth/logout", nextUrl));
      }
    }
  }
  console.log(" === +++ === ");

  if (isAuthRoute) {
    if (isLoggedIn) {
      console.log("It was an auth route and user is logged in. Redirecting...");
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return null;
  }

  if (!isLoggedIn && !isPublicRoute) {
    let callbackUrl = nextUrl.pathname;
    console.log("callbackUrl", callbackUrl);
    if (nextUrl.search) {
      callbackUrl += nextUrl.search;
    }

    const encodedCallbackUrl = encodeURIComponent(callbackUrl);

    console.log(
      "It was not a public route and user is not logged in. Redirecting..."
    );

    const url: URL = new URL(
      `/auth/login${isLogoutRoute ? "" : `?callbackUrl=${encodedCallbackUrl}`}`,
      nextUrl
    );

    return Response.redirect(new URL(url, nextUrl));
  }

  console.log("No redirect");

  return null;
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
