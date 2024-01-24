import { UserRole } from "@prisma/client";
import NextAuth, { type DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  role: UserRole;
  isTwoFactorEnabled: boolean;
  isOAuth: boolean;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
    terminate?: TerminationReason;
  }
}

export type TerminationReason = {
  status: "TERMINATED" | "NOT_TERMINATED";
  reason: "USER_NOT_FOUND" | "SESSION_EXPIRED";
};
