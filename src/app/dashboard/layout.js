"use client";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Stack } from "@mui/material";
import { useSession } from "next-auth/react";

import { redirect } from "next/navigation";

export default function DashboardLayout({ children }) {
  const { data: session } = useSession();

  if (!session) {
    redirect("/");
  }

  return (
    <>
      <Navbar />
      <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
        <Sidebar />
        {children}
      </Stack>
    </>
  );
}
