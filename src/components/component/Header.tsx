"use client"
import Image from "next/image";
import React from "react";
import { useState } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu";
export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex h-14 lg:h-[60px] items-center gap-4 ">
     <div className="fixed bg-gradient-to-br from-yellow-300 to-pink-500 w-full h-[80px] bg-transparent flex justify-between items-center ">
      <div className="flex flex-row gap-3 items-center">
        <div className="relative">
          <a href="/">
          <Image
            src="/horseLogo.jpg"
            alt="logo"
            width={40}
            height={40}
            className="w-full h-full object-contain rounded-full"
          />
          </a>
        </div>
        <a href="/">
        <h1 className="text-white text-[25px] font-semibold">
        PRIME MARK{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            {" "}
            BOOGIE{" "}
          </span>
        </h1>
        </a>
        
      </div>

      <div className="cursor-pointer flex flex-row gap-5 mb-2">
      <div className="flex flex-1 items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              {/* Logo */}
            </div>
          </form>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost"
                type="button"
                onClick={toggleMenu}
                className="block text-gray-800 hover:text-gray-900 focus:text-gray-900 focus:outline-none"
>
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          />
        </svg>
                <span className="sr-only" onClick={toggleMenu}>Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/Clients">
                  Clients
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/Marketers">
                  Marketers
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/AddClient">
                Add client
                </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                <Link href="/AddMarketer">
                Add Marketer
                </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      </div>
      </header>
  )}