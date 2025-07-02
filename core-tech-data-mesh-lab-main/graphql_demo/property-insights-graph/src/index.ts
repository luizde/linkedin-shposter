import { start } from "@zillow/zgcp-node-service-base";
import { ENV, SERVICE_NAME, SERVICE_PORT } from "./config";
import { runApolloServer } from "./graphql";

// eslint-disable-next-line no-void
void (async () => {
    const { app, server } = await start({
        config: {
            env: ENV,
            serviceName: SERVICE_NAME,
            servicePort: parseInt(SERVICE_PORT, 10),
        },
    });

    // eslint-disable-next-line no-void
    void runApolloServer(app, server);
})();
