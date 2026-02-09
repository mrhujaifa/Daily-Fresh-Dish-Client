import { orderAPI } from "@/lib/api";

const url = `${orderAPI}`;
export const orderServices = {
  placeOrder: async (orderData: {
    deliveryAddress: string;
    phoneNumber: string;
    orderNotes?: string;
    riderTip: number;
    serviceFee: number;
    deliveryFee: number;
    paymentMethod: string;
  }) => {
    try {
      const response = await fetch(`${url}/place-order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(orderData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Order processing failed");
      }

      return data;
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "An unexpected error occurred",
      );
    }
  },

  getMyOrders: async () => {
    const response = await fetch(`${url}/my-orders`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Orders fetch korte somoshya hoyeche");
    }

    return await response.json();
  },

  getOrderById: async (orderId: string) => {
    const response = await fetch(`${url}/${orderId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      cache: "no-store",
    });

    const data = await response.json();

    // if (!response.ok) {
    //   throw new Error(data.message || "Order details fetch failed");
    // }
    return data;
  },

  updateOrderStatus: async (orderId: string, status: string) => {
    const response = await fetch(`${url}/${orderId}/status`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ status }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to update order status");
    }

    return data;
  },
};
