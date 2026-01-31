"use server";

import { userService } from "@/services/user.services";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const getSessionAction = async () => {
  const session = await userService.getSession();
  return session;
};

export async function handleSignOutServer() {
  // Better Auth ডিফল্টভাবে এই নামে কুকি সেট করে
  const cookieStore = await cookies();
  cookieStore.delete("better-auth.session_token");

  // লগআউট হওয়ার পর ইউজারকে রিডাইরেক্ট করুন
  redirect("/login");
}
