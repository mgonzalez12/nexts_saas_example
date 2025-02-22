'use client'

import { SignedOut, SignInButton } from "@clerk/clerk-react";

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
