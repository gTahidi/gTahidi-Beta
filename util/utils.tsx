import { User } from "@/types";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

export const handleStart = (user: User, router: AppRouterInstance) => {
  if (!user) {
    router.push("/auth");
  } else {
    router.push("/app");
  }
};
