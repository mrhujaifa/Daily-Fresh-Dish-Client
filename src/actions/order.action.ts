"use server"

import { orderAPI } from "@/lib/api";
import { cookies } from "next/headers";

const url = orderAPI

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
    })

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Order details fetch failed");
    }
    return data;
    }