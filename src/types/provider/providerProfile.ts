export enum CuisineType {
  BENGALI = "BENGALI",
  INDIAN = "INDIAN",
  ITALIAN = "ITALIAN",
  CHINESE = "CHINESE",
  FAST_FOOD = "FAST_FOOD",
  THAI = "THAI",
  MEXICAN = "MEXICAN",
  ARABIC = "ARABIC",
  CONTINENTAL = "CONTINENTAL",
  DESSERT = "DESSERT",
  OTHERS = "OTHERS",
}

export interface IProviderProfile {
  id: string;
  userId: string;
  businessName: string;
  description?: string | null;
  address: string;
  logoUrl?: string | null;
  coverUrl?: string | null;
  isOpen: boolean;
  isVerified: boolean;
  rating?: number;
  totalReviews: number;
  cuisineType?: CuisineType;
  // Frontend-e Decimal ke number hisebe handle kora best practice
  deliveryFee: number;
  estimatedDeliveryTime?: string | null;
  createdAt: Date | string; // API theke string ashle string, naile Date
  updatedAt: Date | string;
}

// Form-er data capture korar jonno amra eibhabe Omit use korte pari
export type ICreateProviderProfile = Omit<
  IProviderProfile,
  | "id"
  | "isVerified"
  | "isOpen"
  | "rating"
  | "totalReviews"
  | "createdAt"
  | "updatedAt"
>;
