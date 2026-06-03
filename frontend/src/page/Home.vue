<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import Button from '@/components/ui/forms/Button.vue';

// 1. A query GraphQL para buscar os produtos
const GET_PRODUCTS = gql`
  query GetProducts {
    getProducts {
      id
      title
      description
      category
      price
    }
  }
`;

// 2. Executa a query automaticamente ao abrir a página
const { result, loading, error } = useQuery(GET_PRODUCTS);
</script>

<template>
  <div class="min-h-screen bg-gray-50 p-8 font-sans">
    <div class="max-w-4xl mx-auto space-y-6">
      
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold text-gray-900">Catálogo R-Solutions</h1>
        <Button>Novo Produto</Button>
      </div>

      <div v-if="loading" class="text-center py-12">
        <p class="text-gray-500 animate-pulse">A carregar dados do PostgreSQL...</p>
      </div>

      <div v-else-if="error" class="bg-red-50 text-red-500 p-4 rounded-lg">
        Erro ao carregar: {{ error.message }}
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <div 
          v-for="product in result?.getProducts" 
          :key="product.id"
          class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
        >
          <div class="flex justify-between items-start mb-2">
            <h2 class="text-xl font-semibold text-gray-800">{{ product.title }}</h2>
            <span class="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">
              {{ product.category }}
            </span>
          </div>
          <p class="text-gray-600 text-sm mb-4 h-10">{{ product.description }}</p>
          <p class="text-2xl font-black text-gray-900">{{ product.price }} €</p>
        </div>

      </div>

    </div>
  </div>
</template>