import { signIn } from "@/auth";
import Login from "@/components/Login";
import React from "react";

const LoginPage = () => {
  const signinHandler = async () => {
    "use server";
    await signIn("github");
  };
  return (
    <form action={signinHandler}>
      <Login />
    </form>
  );
};

export default LoginPage;
