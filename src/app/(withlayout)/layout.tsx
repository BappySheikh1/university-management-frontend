import { Layout } from "antd";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout hasSider>
      <Sidebar />
      {children}
    </Layout>
  );
};

export default DashboardLayout;
