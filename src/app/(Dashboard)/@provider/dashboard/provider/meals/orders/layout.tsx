"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { getProviderOwnOrdersAction } from "@/actions/provider.action";

export default function OrdersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [orders, setOrders] = useState<any[]>([]);
  const params = useParams();
  const currentOrderId = params?.orderId;

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await getProviderOwnOrdersAction();
      if (res.success) setOrders(res.data || []);
    };
    fetchOrders();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6 bg-[#FDFDFD] min-h-screen">
      {/* LEFT SIDE: ORDER LIST */}
      <div className="w-full lg:w-[400px] flex flex-col gap-4">
        <div className="flex bg-[#F1F2F4] rounded-lg p-1 font-bold">
          <button className="flex-1 py-2 text-sm rounded-md bg-[#FF7A1A] text-white">
            Order in
          </button>
          <button className="flex-1 py-2 text-sm rounded-md text-[#A0A3BD]">
            Prepared
          </button>
          <button className="flex-1 py-2 text-sm rounded-md text-[#A0A3BD]">
            Delivered
          </button>
        </div>

        <div className="flex flex-col gap-3 overflow-y-auto max-h-[80vh] pr-2">
          {orders.map((order, index) => (
            <Link
              key={order.id}
              href={`/dashboard/provider/meals/orders/${order.id}`}
              className={`p-5 rounded-xl border-2 block transition-all ${
                currentOrderId === order.id
                  ? "border-[#FF7A1A] bg-[#FFF9F5]"
                  : "border-[#F1F2F4] bg-white"
              }`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-extrabold text-[#2D3142] text-lg">
                    Order #{order.orderNumber}
                  </h3>
                  <p className="text-[12px] text-[#A0A3BD] font-medium mt-1">
                    June 1, 2020, 08:22 AM
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[#FF7A1A] font-black text-xl">
                    ${order.totalPrice}
                  </span>
                  <div
                    className={`p-1.5 rounded-lg ${currentOrderId === order.id ? "bg-[#FF7A1A] text-white" : "bg-[#F1F2F4] text-[#A0A3BD]"}`}
                  >
                    <ChevronRight size={18} strokeWidth={3} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE: DYNAMIC CONTENT */}
      <div className="flex-1">
        <h2 className="text-xl font-black text-[#2D3142] mb-4">
          Order Details
        </h2>
        <div className="bg-white border border-[#F1F2F4] rounded-[24px] shadow-sm overflow-hidden min-h-[70vh]">
          {children}
        </div>
      </div>
    </div>
  );
}
