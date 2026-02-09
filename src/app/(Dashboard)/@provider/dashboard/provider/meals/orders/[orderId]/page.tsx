import { getOrderByIdAction } from "@/actions/order.action";
import StatusButton from "@/components/modules/Dashboard/provider/statusButton";
import { OrderItem } from "@/types/provider/order";
import { MapPin, Clock, CreditCard } from "lucide-react";

// Order status transition map
const statusTransitions: Record<
  string,
  { label: string; next: string; variant: "primary" | "danger" }[]
> = {
  PLACED: [
    { label: "Accept Order", next: "PREPARING", variant: "primary" },
    { label: "Reject Order", next: "REJECTED", variant: "danger" },
  ],
  PREPARING: [{ label: "Mark as Ready", next: "READY", variant: "primary" }],
  READY: [
    { label: "Send for Delivery", next: "ON_THE_WAY", variant: "primary" },
  ],
  ON_THE_WAY: [
    { label: "Mark as Delivered", next: "DELIVERED", variant: "primary" },
  ],
  REJECTED: [],
  DELIVERED: [],
  CANCELLED: [],
};

export default async function OrderDetailPage({
  params,
}: {
  params: Promise<{ orderId: string }>;
}) {
  const { orderId } = await params;
  const orderResponse = await getOrderByIdAction(orderId);

  const order = orderResponse?.data;

  if (!order) {
    return (
      <div className="p-8 text-center font-bold text-red-500">
        Order not found!
      </div>
    );
  }

  return (
    <div className="p-8 lg:p-12">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-black text-[#2D3142]">
            Order #{order.orderNumber.slice(-6)}
          </h1>
          <p className="text-sm text-[#A0A3BD] font-bold mt-1 uppercase">
            {new Date(order.createdAt).toLocaleString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}
          </p>
          <div className="mt-2">
            <span
              className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                order.status === "DELIVERED"
                  ? "bg-green-100 text-green-600"
                  : "bg-orange-100 text-orange-600"
              }`}
            >
              {order.status}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="font-black text-[#2D3142]">{order.customer.name}</p>
            <p className="text-xs text-[#A0A3BD] font-bold">
              {order.customer.email}
            </p>
          </div>
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm bg-gray-100 flex items-center justify-center">
            {order.customer.image ? (
              <img src={order.customer.image} alt="user" />
            ) : (
              <span className="font-black text-[#FF7A1A]">
                {order.customer.name[0]}
              </span>
            )}
          </div>
        </div>
      </div>

      <hr className="border-[#F1F2F4] mb-8" />

      {/* Delivery Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <div>
          <p className="text-[11px] text-[#A0A3BD] font-black uppercase mb-3">
            Delivery Address
          </p>
          <div className="flex items-start gap-2">
            <MapPin className="text-[#FF7A1A] mt-1 shrink-0" size={18} />
            <p className="font-black text-[#2D3142] text-sm leading-relaxed">
              {order.deliveryAddress} <br />
              <span className="text-xs text-[#A0A3BD]">
                {order.phoneNumber}
              </span>
            </p>
          </div>
        </div>
        <div>
          <p className="text-[11px] text-[#A0A3BD] font-black uppercase mb-1">
            Payment Status
          </p>
          <div className="flex items-center gap-2">
            <CreditCard className="text-[#FF7A1A]" size={16} />
            <p className="font-black text-[#2D3142]">
              {order.paymentMethod} - {order.paymentStatus}
            </p>
          </div>
        </div>
        <div>
          <p className="text-[11px] text-[#A0A3BD] font-black uppercase mb-1">
            Estimation Prep Time
          </p>
          <div className="flex items-center gap-2">
            <Clock className="text-[#FF7A1A]" size={16} />
            <p className="font-black text-[#2D3142]">
              {order.items[0]?.meal?.prepTime || "20"} Min
            </p>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="space-y-6 mb-8">
        <h3 className="text-lg font-black text-[#2D3142] mb-4">Order Menu</h3>

        {order.items.map((item: OrderItem) => (
          <div key={item.id} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl border-2 border-[#FFF2E9] overflow-hidden">
                <img
                  src={item.meal.imageUrl || "https://via.placeholder.com/64"}
                  alt={item.meal.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-black text-[#2D3142] text-lg">
                  {item.meal.name}
                </p>
                <p className="text-sm text-[#A0A3BD] font-bold">
                  x{item.quantity}
                </p>
              </div>
            </div>
            <span className="text-[#FF7A1A] font-black text-xl">
              ${(parseFloat(item.price) * item.quantity).toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      <hr className="border-[#F1F2F4] mb-6" />

      <div className="flex justify-between items-center mb-8 font-black">
        <span className="text-xl text-[#A0A3BD]">Total Amount</span>
        <span className="text-3xl text-[#FF7A1A]">${order.totalPrice}</span>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-4">
        {statusTransitions[order.status]?.map((action) => (
          <StatusButton
            key={action.next}
            orderId={order.id}
            nextStatus={action.next}
            label={action.label}
            variant={action.variant}
          />
        ))}
      </div>
    </div>
  );
}
