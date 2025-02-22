'use client'

import { SignedOut, SignInButton } from "@clerk/clerk-react";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
   <div>
      <p> Home </p>
      <SignedOut>
            <SignInButton />
          </SignedOut>

   </div>
  );
}
