import { Route } from "@/types";
import { RouteIcon } from "lucide-react";

export const adminRoutes: Route[] = [
  {
    title: "User Management",
    items: [
      {
        icon: RouteIcon,
        title: "Analytics",
        url: "/analytics",
      },
    ],
  },
  {
    title: "Provider Management",
    items: [
      {
        icon: RouteIcon,
        title: "Partner Ship Request",
        url: "/dashboard/admin/partner-ship",
      },
      // {
      //   icon: RouteIcon,
      //   title: "Provider add meals",
      //   url: "/dashboard/provider/meals/create",
      // },
    ],
  },
];
