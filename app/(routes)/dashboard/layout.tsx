"use client";

import React, { useEffect, ReactNode } from "react";
import SideNav from "./_components/SideNav";
import DashboardHeader from "./_components/DashboardHeader";
import { db } from "@/utils/dbConfig";
import { Budgets } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { useRouter } from "next/navigation";

// Props type for the layout component
interface DashboardLayoutProps {
  children: ReactNode;
}

function DashboardLayout({ children }: DashboardLayoutProps) {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      checkUserBudgets();
    }
  }, [user]);

  const checkUserBudgets = async () => {
    try {
      const result = await db
        .select()
        .from(Budgets)
        .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress ?? ""));
      console.log(result);

      if (result?.length === 0) {
        router.replace("/dashboard/budgets");
      }
    } catch (error) {
      console.error("Error checking user budgets:", error);
    }
  };

  return (
    <div>
      <div className="fixed md:w-64 hidden md:block">
        <SideNav />
      </div>
      <div className="md:ml-64">
        <DashboardHeader />
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;
