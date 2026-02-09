"use client";

import { useState } from "react";
import { updateOrderStatusAction } from "@/actions/order.action";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { toast } from "sonner"; // Shadcn Sonner ইমপোর্ট করুন

interface StatusButtonProps {
  orderId: string;
  nextStatus: string;
  label: string;
  variant: "primary" | "danger";
}

export default function StatusButton({
  orderId,
  nextStatus,
  label,
  variant,
}: StatusButtonProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleUpdate = async () => {
    setLoading(true);

    // ১. লোডিং টোস্ট শুরু করা
    const toastId = toast.loading(`Updating order to ${label}...`);

    try {
      const result = await updateOrderStatusAction(orderId, nextStatus);

      if (result.success) {
        // ২. সাকসেস টোস্ট
        toast.success(`Order status updated to ${nextStatus}!`, {
          id: toastId, // আগের লোডিং টোস্টটিকে রিপ্লেস করবে
        });

        router.refresh(); // ডেটা রিফ্রেশ করবে
      } else {
        // ৩. এরর টোস্ট
        toast.error(result.error || "Something went wrong", {
          id: toastId,
        });
      }
    } catch (err) {
      console.error(err);
      toast.error("An unexpected error occurred", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleUpdate}
      disabled={loading}
      className={`px-8 py-3 rounded-xl font-black transition-all flex items-center gap-2 ${
        variant === "danger"
          ? "border-2 border-[#FFD9D9] text-[#FF4B4B] hover:bg-red-50"
          : "bg-[#FF7A1A] text-white shadow-lg shadow-[#FF7A1A33] hover:bg-[#e66e17]"
      } disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {loading && <Loader2 className="animate-spin" size={18} />}
      {label}
    </button>
  );
}
