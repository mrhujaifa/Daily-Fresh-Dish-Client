"use server";

import { userService } from "@/services/user.services";
import { redirect } from "next/navigation";

export const getSessionAction = async () => {
  const session = await userService.getSession();

  const data = session.data;
  const error = session.error;
  return { data, error };
};

export async function handleSignOutServer() {
  await fetch(`${process.env.AUTH_URL}/sign-out`, {
    method: "POST",
    credentials: "include",
  });

  redirect("/login");
}

