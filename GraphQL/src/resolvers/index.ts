// src/schema/resolvers.ts
import { getProducts } from "./product/product.queries";

export const resolvers = {
  Query: {
    // Aqui usamos o nome EXATO que definiste no ficheiro .graphql
    getProducts: getProducts, 
  },
};