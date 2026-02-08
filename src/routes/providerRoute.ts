import { Route } from "@/types";
import { House, History, Soup, ListOrdered, LeafyGreen } from "lucide-react";

export const userRoutes: Route[] = [
  {
    title: "Provider Dashboard",
    items: [
      {
        icon: House,
        title: "Home",
        url: "/dashboard",
      },
      {
        icon: History,
        title: "History",
        url: "/dashboard/history",
      },
      {
        icon: Soup,
        title: "Add Meal",
        url: "/dashboard/provider/meals/create",
      },
      {
        icon: LeafyGreen,
        title: "My Meals",
        url: "/dashboard/provider/meals",
      },
      {
        icon: ListOrdered,
        title: "Customer Meals Orders",
        url: "/dashboard/provider/meals/orders",
      },
    ],
  },
];
