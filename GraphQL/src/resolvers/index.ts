import { productQueries } from "./product/product.queries";

// Junta tudo num único objeto para enviar para o Apollo Server
export const resolvers = {
    Query: {
        ...productQueries,
        // ...userQueries,
        // ...invoiceQueries,
    },
    Mutation: {
        // ...productMutations,
        // ...userMutations,
    }
};