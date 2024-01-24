import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({ where: { email } });

    return user;
  } catch {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({ where: { id } });

    return user;
  } catch {
    return null;
  }
};

export type FetchUserResult = {
  status: "ok" | "error";
  role?: string;
} | null;

export const fetchUserById = async (id: string): Promise<FetchUserResult> => {
  try {
    const existingUser = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/checkUser?id=` + id
    ).then((res) => res.json());
    return existingUser;
  } catch (error) {
    console.error("Error fetching user", error);
    return null;
  }
};
