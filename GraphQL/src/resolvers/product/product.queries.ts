import { db } from "../../db";

export const getProducts = {
  Query: {
    getProducts: async () => {
      try {
        // Executamos a query SQL direta na base de dados
        const result = await db.query("SELECT * FROM products");
        
        // Retornamos os produtos encontrados
        return result.rows;
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        throw new Error("Falha ao carregar produtos");
      }
    },
  },
};