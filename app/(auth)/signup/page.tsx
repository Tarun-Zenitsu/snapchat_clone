import { signIn } from "@/auth";
import Signup from "@/components/Signup";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const SignupPage = () => {
  const signupHandler = async () => {
    "use server";
    await signIn("github");
  };
  return (
    <form action={signupHandler}>
      <Signup />
    </form>
  );
};

export default SignupPage;
