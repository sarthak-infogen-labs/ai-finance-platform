import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { LayoutDashboard, PenBox } from "lucide-react";

const Header = () => {
  return (
    <div className="fixed top-0 w-full bg-white shadow-md flex items-center justify-between px-4 py-2 z-10">
      <nav className="container mx-auto pxp-4 py-4 flex items-center justify-between">
        <Link href={"/"}>
          <Image
            height={60}
            width={200}
            alt="logo"
            src={
              "https://png.pngtree.com/png-vector/20220525/ourmid/pngtree-spa-logo-png-image_4721219.png"
            }
            className="h-12 w-auto object-contain"
          />
        </Link>
        <div className="flex items-center space-x-4  ">
          <SignedIn>
            <Link
              href={"/dashboard"}
              className="text-gray-600 hover:text-blue-600 flex items-center gap-2"
            >
              <Button variant="outline">
                <LayoutDashboard size={18} />{" "}
                <span className="hidden md:inline">Dashboard</span>{" "}
              </Button>
            </Link>
            <Link
              href={"/dashboard"}
              className="text-gray-600 hover:text-blue-600 flex items-center gap-2"
            >
              <Button variant="outline">
                <PenBox size={18} />{" "}
                <span className="hidden md:inline">Add Transaction</span>{" "}
              </Button>
            </Link>
          </SignedIn>
          <SignedOut>
            <SignInButton forceRedirectUrl={"/dashboard"}>
              <Button variant="outline">Login</Button>
            </SignInButton>
            <SignUpButton forceRedirectUrl={"/dashboard"}>
              <Button variant="outline">SignUp</Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "h-10 w-10",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>{" "}
    </div>
  );
};

export default Header;
