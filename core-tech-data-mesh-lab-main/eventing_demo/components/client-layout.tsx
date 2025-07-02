"use client"

import { useUser } from "@/lib/user-context"
import WebSdkBootstrapper from "@/components/ui/web-sdk-bootstrapper"
import { UsernameDialog } from "@/components/username-dialog"

export function ClientLayout() {
  const { username } = useUser()

  return (
    <>
      <WebSdkBootstrapper
        userId={username}
        environment={"dev"}
      />
      <UsernameDialog />
    </>
  )
} 