export enum Spicy {
  NONE = "NONE",
  MILD = "MILD",
  MEDIUM = "MEDIUM",
  HOT = "HOT",
  EXTRA_HOT = "EXTRA_HOT",
}
export interface Meal {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPrice: number | null;
  imageUrl: string | null;
  isAvailable: boolean;
  isVeg: boolean;
  spiciness: Spicy;
  isBestseller: boolean;
  prepTime: number | null;
  calories: number | null;
  categoryId: string;
  providerId: string;
  createdAt: string | Date;
  updatedAt: string | Date;
}
export interface CreateMealRequest {
  name: string;
  description: string;
  price: number;
  discountPrice?: number | null;
  isAvailable?: boolean;
  isVeg?: boolean;
  spiciness?: Spicy;
  categoryId: string;
  providerId: string;
  prepTime?: number | null;
  calories?: number | null;
}

export interface MealFormData {
  name: string;
  description: string;
  price: number;
  discountPrice: number | null;
  imageUrl: string;
  isAvailable: boolean;
  isVeg: boolean;
  spiciness: Spicy;
  isBestseller: boolean;
  prepTime: number | null;
  calories: number | null;
  categoryId: string;
  providerId: string;
}

export type SpicinessLevel = "MILD" | "MEDIUM" | "SPICY" | "EXTRA_SPICY";

export interface Provider {
  id: string;
  businessName: string;
  rating: number;
  estimatedDeliveryTime: string;
}

export interface MealsProvider {
  id: string;
  name: string;
  description: string;
  price: string | number;
  discountPrice?: string | number;
  imageUrl: string;
  isAvailable: boolean;
  isVeg: boolean;
  spiciness: SpicinessLevel;
  isBestseller: boolean;
  prepTime: number;
  calories: number;
  categoryId: string;
  providerId: string;
  createdAt: string;
  updatedAt: string;
  provider: Provider; // Nested provider object
}

// Service Response er jonno common type
// export interface ServiceResponse<T> {
//   success: boolean;
//   data?: T;
//   message: string;
//   errors?: any;
// }
