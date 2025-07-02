import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { MobileNav } from "@/components/mobile-nav"
import { UserMenu } from "@/components/user-menu"
import { UserProvider } from "@/lib/user-context"
import { ClientLayout } from "@/components/client-layout"
import Image from "next/image"
import Link from "next/link"
import WebSdkBootstrapper from "@/components/ui/web-sdk-bootstrapper"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Zillow: Real Estate, Apartments, Mortgages & Home Values",
  description:
    "The leading real estate marketplace. Search millions of for-sale and rental listings, compare home values and connect with local professionals.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <ClientLayout />
          <header className="border-b md:hidden">
            <div className="container mx-auto px-4 flex items-center justify-between h-16">
              <MobileNav />
              <Link href="/" className="flex items-center">
                <Image src="/zillow-logo-blue.png" alt="Zillow" width={120} height={40} className="h-8 w-auto" />
              </Link>
              <UserMenu />
            </div>
          </header>
          {children}
        </UserProvider>
      </body>
    </html>
  )
}
