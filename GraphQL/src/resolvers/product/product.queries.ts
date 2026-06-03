import { db } from "../../db"; // Volta duas pastas atrás para chegar ao db.ts

export const productQueries = {
    // O nome da função tem de ser IGUAL ao que está no product.queries.graphql
    getProducts: async () => {
        try {
            const result = await db.query("SELECT * FROM products");
            return result.rows;
        } catch (error) {
            console.error("Erro ao buscar produtos:", error);
            throw new Error("Falha ao carregar produtos");
        }
    }
};