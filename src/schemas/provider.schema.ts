import { z } from "zod";

export const PartnerShipSchema = z.object({
  businessName: z.string().min(3, "Business name is too short"),
  description: z.string().min(10, "Description should be more detailed"),
  cuisineType: z.string().min(1, "Please select a cuisine type"),
  deliveryFee: z.number().min(0, "Fee cannot be negative"),
  estimatedDeliveryTime: z.string().min(1, "Delivery time is required"),
  address: z.string().min(5, "Address is too short"),
});
