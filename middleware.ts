import NextAuth, { Session } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

const authconfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async authorized({
      auth,
      request,
    }: {
      auth: Session | null;
      request: NextRequest;
    }) {
      const user = auth?.user;
      const chatPath = request.nextUrl.pathname.startsWith("/chat");
      const authPage =
        request.nextUrl.pathname.startsWith("/login") ||
        request.nextUrl.pathname.startsWith("/login");
      if (!user && chatPath) {
        return false;
      }
      if (user && authPage) {
        return NextResponse.redirect(new URL("/chat", request.url));
      }
      return true;
    },
  },
};

export default NextAuth(authconfig).auth;
