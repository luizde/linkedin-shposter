"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between border-b py-4">
            <Link href="/" onClick={() => setOpen(false)}>
              <Image src="/zillow-logo-blue.png" alt="Zillow" width={120} height={40} className="h-8 w-auto" />
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          <nav className="flex flex-col gap-4 py-6">
            <Link href="#" className="px-4 py-2 text-lg font-medium" onClick={() => setOpen(false)}>
              Buy
            </Link>
            <Link href="#" className="px-4 py-2 text-lg font-medium" onClick={() => setOpen(false)}>
              Rent
            </Link>
            <Link href="#" className="px-4 py-2 text-lg font-medium" onClick={() => setOpen(false)}>
              Sell
            </Link>
            <Link href="#" className="px-4 py-2 text-lg font-medium" onClick={() => setOpen(false)}>
              Get a mortgage
            </Link>
            <Link href="#" className="px-4 py-2 text-lg font-medium" onClick={() => setOpen(false)}>
              Find an Agent
            </Link>
            <Link href="#" className="px-4 py-2 text-lg font-medium" onClick={() => setOpen(false)}>
              Manage Rentals
            </Link>
            <Link href="#" className="px-4 py-2 text-lg font-medium" onClick={() => setOpen(false)}>
              Advertise
            </Link>
            <Link href="#" className="px-4 py-2 text-lg font-medium" onClick={() => setOpen(false)}>
              Help
            </Link>
          </nav>
          <div className="mt-auto border-t py-6">
            <Button className="w-full" onClick={() => setOpen(false)}>
              Sign In
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
