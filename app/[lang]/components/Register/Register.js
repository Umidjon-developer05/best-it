"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
const Register = () => {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="cursor-pointer">
            <img src={session.user.image} className="w-10 h-10 rounded-full" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>{session.user.name}</DropdownMenuLabel>
            <DropdownMenuLabel>{session.user.email}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {session.user?.email === process.env.NEXT_PUBLIC_EMAIL ||
            session.user?.email === process?.env.NEXT_PUBLIC_GITHUB ? (
              <Link href={"/admin"} className="cursor-pointer">
                <DropdownMenuItem>admin</DropdownMenuItem>
              </Link>
            ) : (
              <DropdownMenuItem>Profile</DropdownMenuItem>
            )}
            {session.user?.email === process.env.NEXT_PUBLIC_EMAIL ||
            session.user?.email === process?.env.NEXT_PUBLIC_GITHUB ? (
              <Link href={"/instructors"} className="cursor-pointer">
                <DropdownMenuItem>instructors</DropdownMenuItem>
              </Link>
            ) : (
              ""
            )}
            <DropdownMenuItem onClick={() => signOut("/")}>
              Chiqish
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }
  return (
    <div>
      <Link href={"/sing-in"}>
        <Button variant="outline">Royxatdan otish</Button>
      </Link>
    </div>
  );
};

export default Register;
