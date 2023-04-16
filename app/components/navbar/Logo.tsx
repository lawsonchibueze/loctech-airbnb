"use client";

import React from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      alt="Logo"
      height="120"
      width="120"
      src="/image/logo10.jpg"
      className="hidden md:block cursor-pointer"
    />
  );
};

export default Logo;
