"use client";
import { Layout } from "antd";
import Sidebar from "../../components/ui/Sidebar";
import Contents from "@/components/ui/Contents";
import { isLoggedIn } from "@/services/authService";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const userLoggedIn = isLoggedIn();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!userLoggedIn) {
      router.push("/login");
    } else {
      setIsLoading(true);
    }
  }, [userLoggedIn, router]);

  if(!isLoading){
    return <p>loading......</p>
  }
  return (
    <Layout hasSider>
      <Sidebar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;
