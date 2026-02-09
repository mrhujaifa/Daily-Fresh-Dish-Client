"use server";

import { orderAPI } from "@/lib/api";
import { orderServices } from "@/services/order.services";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

const url = orderAPI;

export const getOrderByIdAction = async (orderId: string) => {
  const cookieStore = await cookies();
  const response = await fetch(`${url}/${orderId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookieStore.toString(),
    },
    credentials: "include",
    cache: "no-store",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Order details fetch failed");
  }
  return data;
};

export async function updateOrderStatusAction(orderId: string, status: string) {
  try {
    const response = await fetch(`${url}/${orderId}/status`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Cookie: (await cookies()).toString(),
      },

      body: JSON.stringify({ status }),
    });

    // রেসপন্স JSON কি না তা চেক করা
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      const errorText = await response.text();
      console.error("Non-JSON response received:", errorText);
      throw new Error(
        "Server returned HTML instead of JSON. Check your API route and URL.",
      );
    }

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to update order status");
    }

    // ✅ UI আপডেট করার জন্য পাথ রিভ্যালিডেট করুন
    revalidatePath(`/provider/orders/${orderId}`);

    return { success: true, data };
  } catch (error: any) {
    console.error("Order Update Action Error:", error.message);
    return { success: false, error: error.message };
  }
}
