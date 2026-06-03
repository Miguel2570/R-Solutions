<script setup lang="ts">
import { RouterView } from 'vue-router'

// Importamos a Navbar e o Footer que acabaste de copiar
import Navbar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    
    <Navbar />

    <main class="flex-grow pt-16"> <RouterView />
    </main>

    <Footer />
    
  </div>
</template>