"use server";

import { cartServices } from "@/services/cart.service";
import { cookies } from "next/headers";

export const addToCartAction = async (mealId: string, quantity: number = 1) => {
  const cookieStore = await cookies();
  try {
    const addtocart = await cartServices.addToCart(
      mealId,
      quantity,
      cookieStore,
    );

    return addtocart;
  } catch (error) {
    console.log(error);
  }
};
