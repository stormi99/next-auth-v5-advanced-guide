"use server";

import { getUserById } from "@/data/user";
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";

export const deleteAccount = async () => {
  const user = await currentUser();

  if (!user) {
    return { error: "Unauthorized" };
  }

  const existingUser = await getUserById(user.id);

  if (!existingUser) {
    return { error: "Unauthorized" };
  }

  await db.user.delete({ where: { id: user.id } });

  return { success: "Account deleted" };
};
