"use client";
import {
  Avatar,
  Breadcrumb,
  Button,
  Dropdown,
  Layout,
  Menu,
  MenuProps,
  Row,
  Space,
  theme,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import { getUserInfo, removeUserInfo } from "@/services/authService";
import { authKey } from "@/constants/storageKey";
import { useRouter } from "next/navigation";
const { Header, Content, Footer } = Layout;

const HeaderPage = () => {
  const router = useRouter();
  const logOut = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };

  const items: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <Button onClick={logOut} type="text" danger>
          Logout
        </Button>
      ),
    },
  ];

  const { role } = getUserInfo() as any;

  return (
    <Header style={{ background: "#fff" }}>
      <Row justify={"end"} align={"middle"} style={{ height: "100%" }}>
      <p
          style={{
            margin: "0px 5px",
          }}
        >
          {role}
        </p>
        <Dropdown menu={{ items }}>
          <Space wrap size={16}>
            <Avatar size="large" icon={<UserOutlined />} />
          </Space>
        </Dropdown>
      </Row>
    </Header>
  );
};

export default HeaderPage;
