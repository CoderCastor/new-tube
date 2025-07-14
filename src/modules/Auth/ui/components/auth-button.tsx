"use client";
import { Button } from "@/components/ui/button";
import { ClapperboardIcon, UserCircleIcon } from "lucide-react";
import { UserButton, SignInButton, SignedOut, SignedIn } from "@clerk/nextjs";
import Link from "next/link";

export const AuthButton = () => {
  // TODO : Add different auth states

  return (
    <>
      <SignedIn>
        {/* <Button asChild variant={"secondary"}>
          <Link href={"/studio"}>
            <ClapperboardIcon />
            Studio
          </Link>
        </Button> */}
        <UserButton>
          <UserButton.MenuItems>
            <UserButton.Link
              label="Studio"
              href="/studio"
              labelIcon={<ClapperboardIcon className="size-4" />}
            />
            <UserButton.Action label="manageAccount" />
          </UserButton.MenuItems>
        </UserButton>
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
