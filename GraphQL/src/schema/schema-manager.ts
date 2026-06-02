import { readFileSync } from "fs";
import { join } from "path";

const loadGraphQL = (path: string) => readFileSync(join(__dirname, path), "utf-8");

const typeDefs = `
  ${loadGraphQL("./index.graphql")}
  ${loadGraphQL("./product/product.types.graphql")}
`;

export default typeDefs;