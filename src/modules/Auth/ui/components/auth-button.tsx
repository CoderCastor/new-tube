"use client";
import { Button } from "@/components/ui/button";
import { UserCircleIcon } from "lucide-react";
import { UserButton, SignInButton, SignedOut, SignedIn } from "@clerk/nextjs";

export const AuthButton = () => {
  // TODO : Add different auth states

  return (
    <>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button
            variant={"outline"}
            className="px-4 py-2 text-small font-medium text-blue-600 hover:text-blue-500 border-blue-500/20 rounded-full"
          >
            <UserCircleIcon />
            Sign in
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  );
};
