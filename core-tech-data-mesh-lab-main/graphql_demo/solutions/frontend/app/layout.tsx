import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { MobileNav } from "@/components/mobile-nav"
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
      <WebSdkBootstrapper
        userId={"test@test.com"}
        environment={"dev"}
      />
      <body className={inter.className}>
        <header className="border-b md:hidden">
          <div className="container mx-auto px-4 flex items-center justify-between h-16">
            <MobileNav />
            <Link href="/" className="flex items-center">
              <Image src="/zillow-logo-blue.png" alt="Zillow" width={120} height={40} className="h-8 w-auto" />
            </Link>
            <div className="w-10"></div> {/* Spacer for alignment */}
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}
