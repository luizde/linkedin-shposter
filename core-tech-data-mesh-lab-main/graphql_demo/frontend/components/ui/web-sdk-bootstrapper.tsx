"use client";

import { initZanalytics, identify } from "@zillow/universal-analytics";
import { useEffect } from "react";

interface WebSdkBootstrapperProps {
  environment: 'local' | 'dev' | 'stage' | 'prod';
  userId: string | null;
  // Add other expected params if any
}

export default function WebSdkBootstrapper(params: WebSdkBootstrapperProps) {
  const cdnUrl =
    "https://cdn.zg-api.test.zillow.net/a/z/js/v1/analytics.js?v=bcf290c";
  
  // Ensure the env type matches what initZanalytics expects
  const envValue: 'dev' | 'stage' | 'prod' = params.environment === "local" ? "dev" : params.environment;
  
  const options = {
    zillow: {
      env: envValue,
    },
  };

  useEffect(() => {
    const _window = globalThis?.window;

    if (!_window) {
      console.error("Failed to set up the Eventing SDK. Window is undefined");
      return;
    }
    // Ensure options matches the expected type for initZanalytics if it's very specific
    // For now, this structure should be compatible with { [key: string]: { env?: ... } }
    initZanalytics(_window, document, options, undefined, cdnUrl);

    if (params.userId) {
      identify(params.userId, "core-tech.employee_email");
    }
  }, [params.environment, params.userId, options]); // Added dependencies to useEffect
  return <></>;
}