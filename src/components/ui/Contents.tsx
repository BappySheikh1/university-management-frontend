"use client";

import { Layout } from "antd";
import HeaderPage from "./Header";

const { Content } = Layout;
const Contents = ({ children }: { children: React.ReactNode }) => {
 
  return (
    <Content
      style={{
        minHeight: "100vh",
        color: "black",
      }}
    >
      <HeaderPage />
      
    
      {children}
    </Content>
  );
};

export default Contents;
