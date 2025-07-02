import { zep, isInitialized } from '@zillow/universal-analytics'

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
    category = 'interaction',
    pagePath,
    pageTitle,
    nativeEvent,
    source = 'general'
}: TrackEventOptions): Promise<boolean> {
    try {
        if (typeof isInitialized === 'function' && !isInitialized()) {
            console.error('ZEP SDK not initialized. Cannot send event.');
            return false;
        }

        // Build the full event name
        const fullEventName = `core-tech.sandbox.${eventName}`;

        // Create event builder
        let eventBuilder = zep
            .event(fullEventName, 1)
            .withPayload(payload)
            .withCategory(category)
            .withOptions({
                event_domain: "core-tech",
                event_namespace: "sandbox",
                event_id: eventName,
                event_version: 1,
                event_source: source
            });

        // Add page info if available
        if (pagePath || pageTitle) {
            eventBuilder = eventBuilder.withPageInfo(
                pagePath || (typeof window !== 'undefined' ? window.location.pathname : ''),
                pageTitle || (typeof document !== 'undefined' ? document.title : '')
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
        console.error('Failed to send ZEP event:', error);
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
        const priceString = propertyData.price.replace(/[^0-9.]/g, '');
        numericPrice = parseFloat(priceString);
    }

    return trackEvent({
        eventName: `property-liked`,
        payload: {
            zpid: parseInt(zpid, 10), // Required: the canonical identifier
            liked_at: new Date().toISOString(), // Required: timestamp
            // All additional property data goes in metadata
            metadata: {
                price: numericPrice,
                bedrooms: propertyData.bedrooms,
                bathrooms: propertyData.bathrooms,
                square_footage: propertyData.squareFootage,
                address: propertyData.address,
                year_built: propertyData.yearBuilt,
                // Add device/browser info
                user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
                screen_width: typeof window !== 'undefined' ? window.innerWidth : undefined,
                screen_height: typeof window !== 'undefined' ? window.innerHeight : undefined
            }
        },
        source: 'property_listings',
        nativeEvent
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
        eventName: 'buyability-affordability-clicked',
        payload,
        source: 'homepage_buyability_banner',
        nativeEvent
    });
} 