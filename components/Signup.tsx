import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Signup = () => {
  return (
    <div>
      <h1 className="text-center text-2xl font-medium">Welcome to Snapchat.</h1>
      <Button className="w-full my-4 gap-2">
        {" "}
        <FaGithub size={24} />
        Login with Github
      </Button>
      <p>
        Alredy have an account ?<Link href={"login"}>&nbsp;Login</Link>
      </p>
    </div>
  );
};

export default Signup;
