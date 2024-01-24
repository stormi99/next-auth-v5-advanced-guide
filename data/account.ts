import { db } from "@/lib/db";
import { FetchUserResult } from "./user";

export const getAccountByUserId = async (userId: string) => {
  try {
    const account = await db.account.findFirst({
      where: { userId },
    });

    return account;
  } catch {
    return null;
  }
};

// export const fetchAccountById = async (
//   id: string
// ): Promise<FetchUserResult> => {
//   try {
//     const existingUser = await fetch(
//       `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/checkAccount?id=` + id
//     ).then((res) => res.json());
//     return existingUser;
//   } catch (error) {
//     console.error("Error fetching account", error);
//     return null;
//   }
// };
