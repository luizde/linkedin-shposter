"use client";

import { propertyDetailsViewed } from "@/lib/analytics";
import { useEffect } from "react";

export default function PropertyImpression({
  zpid,
  propertyData,
}: {
  zpid: string;
  propertyData?: {
    bedrooms?: number;
    bathrooms?: number;
  };
}) {
  const trackImpression = async () => {
    await propertyDetailsViewed(
      zpid,
      propertyData?.bedrooms,
      propertyData?.bathrooms
    );
  };
  useEffect(() => {
    trackImpression();
  }, []);

  return <></>;
}
