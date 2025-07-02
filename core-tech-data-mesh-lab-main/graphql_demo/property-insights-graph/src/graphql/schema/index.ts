import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";

import bookTypeDefs from "./book/typeDefs";
import bookResolvers from "./book/resolver";
import propertyInsightsTypeDefs from "./propertyInsights/typeDefs";
import propertyInsightsResolvers from "./propertyInsights/resolver";

export const typeDefs = mergeTypeDefs([bookTypeDefs, propertyInsightsTypeDefs]);
export const resolvers = mergeResolvers([bookResolvers, propertyInsightsResolvers]);
