import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href={"/"} className="w-36">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={40}
          />
        </Link>

        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs" >
            <NavItems/>
          </nav>
        </SignedIn>

        <div className="flex justify-end gap-3 w-32">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <MobileNav/>
          <SignedOut>
            <Button asChild className="rounded-full" size={"lg"}>
              <Link href={"/sign-in"}>Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
