declare module "@zillow/universal-analytics" {
    interface ZepEventBuilder {
        withPayload(payload: object): ZepEventBuilder;
        withCategory(category: string): ZepEventBuilder;
        withPageInfo(pageId: string, pageName: string): ZepEventBuilder;
        withElement(element: Event | EventTarget | null): ZepEventBuilder;
        withOptions(options: object): ZepEventBuilder;
        sendAsync(): Promise<any>;
    }

    interface ZepInterface {
        /**
         * Track an event with the given name and value
         * @param eventType - The name of the event to track
         * @param version - The major version of the event
         */
        event(eventName: string, version: number): ZepEventBuilder;
        categories: {
            INTERACTION: 'interaction';
            IMPRESSION: 'impression';
            VIEW: 'view';
            SCROLL: 'scroll';
        };
        getEventingHeaders(): Promise<{ traceparent?: string; baggage?: string }>;
        environments?: {
            PROD: 'prod';
            STAGE: 'stage';
            DEV: 'dev';
        };
    }

    export const zep: ZepInterface;

    interface InitOptions {
        [brandName: string]: {
            env?: 'prod' | 'stage' | 'dev';
        };
    }

    // Changed to export const for consistency and potentially better module resolution
    export const initZanalytics: (
        window: Window,
        document: Document,
        options: InitOptions,
        globalName?: string,
        cdnUrl?: string
    ) => void;

    export const isInitialized: () => boolean;

    export const identify: (userId: string | null, userIdType?: string) => void;
}