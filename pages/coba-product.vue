<script lang="ts" setup>
const { data, pending, error } = useFetch<
  {
    id: number;
    title: string;
    image: string;
    price: number;
    category: string;
    description: string;
  }[]
>("/api/product");

// import { useProducts } from "~/composables/product/useProducts";
// const { products, fetchProducts } = useProducts();
// fetchProducts();
</script>

<template>
  <div class="flex flex-col items-center">
    <h1 class="text-4xl font-bold my-6">Product Page</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-if="pending" class="text-blacak bg-white rounded-lg shadow-md p-6">
        Loading...
      </div>
      <div
        v-else-if="error"
        class="text-black bg-white rounded-lg shadow-md p-6"
      >
        Error: {{ error.message }}
      </div>
      <div
        v-else
        v-for="product in data"
        :key="product.id"
        class="text-black bg-white rounded-lg shadow-md p-6"
      >
        <img
          class="w-full h-48 object-contain mb-4"
          :src="product.image"
          :alt="product.title"
        />
        <h2 class="text-2xl font-bold">{{ product.title }}</h2>
        <p class="text-xl font-semibold">Rp {{ product.price }}</p>
        <p class="text-lg">{{ product.category }}</p>
        <p class="text-base">{{ product.description }}</p>
      </div>
    </div>
  </div>
</template>
