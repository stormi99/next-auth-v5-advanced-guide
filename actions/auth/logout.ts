"use server";

import { signOut } from "@/auth";

const fetchDeleteSession = async () => {
  console.log("delete session fetch");
  try {
    await fetch("/api/auth/deleteSession", {
      method: "GET",
    });
  } catch (error) {
    console.error("Error deleting session", error);
  }
};

export const logout = async () => {
  await signOut();
  await fetchDeleteSession();
};
