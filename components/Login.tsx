import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  return (
    <div>
      <h1 className="text-center text-2xl font-medium">Welcome back,</h1>
      <Button className="w-full my-4 gap-2">
        <FaGithub size={24} />
        Login with Github
      </Button>
      <p>
        Don't have an account ?<Link href={"signup"}>&nbsp;Signup</Link>
      </p>
    </div>
  );
};

export default Login;
