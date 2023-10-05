import LoginPage from "@/components/Login/login";
import { Metadata } from "next";

export const metadata:Metadata ={
  title: "UMS | Login"
}
const Login = () => {
  return (
    <>
      <LoginPage />
    </>
  );
};

export default Login;