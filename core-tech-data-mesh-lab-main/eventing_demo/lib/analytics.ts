import { zep, isInitialized } from "@zillow/universal-analytics";

interface TrackEventOptions {
  eventName: string;
  payload?: Record<string, any>;
  category?: string;
  pagePath?: string;
  pageTitle?: string;
  nativeEvent?: Event;
  source?: string;
}

/**
 * Track an event with the ZEP analytics system
 */
export async function trackEvent({
  eventName,
  payload = {},
  category = "interaction",
  pagePath,
  pageTitle,
  nativeEvent,
  source = "general",
}: TrackEventOptions): Promise<boolean> {
  try {
    if (typeof isInitialized === "function" && !isInitialized()) {
      console.error("ZEP SDK not initialized. Cannot send event.");
      return false;
    }

    // Build the full event name
    const fullEventName = `core-tech.data-mesh-lab.${eventName}`;

    // Create event builder
    let eventBuilder = zep
      .event(fullEventName, 1)
      .withPayload(payload)
      .withCategory(category)
      .withOptions({
        event_domain: "core-tech",
        event_namespace: "data-mesh-lab",
        event_id: eventName,
        event_version: 1,
        event_source: source,
      });

    // Add page info if available
    if (pagePath || pageTitle) {
      eventBuilder = eventBuilder.withPageInfo(
        pagePath ||
        (typeof window !== "undefined" ? window.location.pathname : ""),
        pageTitle || (typeof document !== "undefined" ? document.title : "")
      );
    }

    // Add native event if available
    if (nativeEvent) {
      eventBuilder = eventBuilder.withElement(nativeEvent);
    }

    // Send the event
    await eventBuilder.sendAsync();

    console.log(`ZEP event sent: ${fullEventName}`);
    return true;
  } catch (error) {
    console.error("Failed to send ZEP event:", error);
    return false;
  }
}

/**
 * Track when a property is liked (added to favorites)
 */
export async function trackPropertyLiked(
  zpid: string,
  propertyData: {
    price?: string;
    bedrooms?: number;
    bathrooms?: number;
    squareFootage?: number;
    address?: string;
    yearBuilt?: number;
  } = {},
  nativeEvent?: Event
): Promise<boolean> {
  // Extract numeric price value without the $ and commas
  let numericPrice: number | undefined;
  if (propertyData.price) {
    const priceString = propertyData.price.replace(/[^0-9.]/g, "");
    numericPrice = parseFloat(priceString);
  }

  return trackEvent({
    eventName: `luisd-property-liked`,
    payload: {
      zpid,
    },
    source: "property_listings",
    nativeEvent,
  });
}

export async function homePageViewed(): Promise<boolean> {
  return trackEvent({
    eventName: `home-page-viewed`,
    payload: {
      traffic_source: "none",
    },
    source: "home-page",
    category: "impression",
  });
}

export async function propertyDetailsViewed(
  zpid: string,
  numBedrooms?: number,
  numBathrooms?: number,
  nativeEvent?: Event
): Promise<boolean> {
  return trackEvent({
    eventName: `home-details-viewed`,
    payload: {
      zpid: zpid,
      num_bedrooms: numBedrooms,
      num_bathrooms: numBathrooms,
    },
    source: "home-details-page",
    nativeEvent,
    category: "impression",
  });
}

/**
 * Track a buyability action
 */
export async function trackBuyabilityAction(
  payload: {
    location?: string;
    down_payment?: number;
    monthly_payment?: number;
    annual_income?: number;
    monthly_debts?: number;
    credit_score?: string;
  },
  nativeEvent?: Event
): Promise<boolean> {
  return trackEvent({
    eventName: "buyability-affordability-clicked",
    payload,
    source: "homepage_buyability_banner",
    nativeEvent,
  });
}
