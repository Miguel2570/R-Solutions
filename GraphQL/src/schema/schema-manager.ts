import { readFileSync } from "fs";
import { join } from "path";

// Lê os ficheiros a partir da pasta atual (__dirname = src/schema)
const loadGraphQL = (relativePath: string) => {
    return readFileSync(join(__dirname, relativePath), "utf-8");
};

// Aqui vamos juntar TODOS os ficheiros .graphql do projeto
const typeDefs = `
  ${loadGraphQL("./index.graphql")}
  ${loadGraphQL("./product/product.types.graphql")}
  ${loadGraphQL("./product/product.queries.graphql")}
`;

export default typeDefs;