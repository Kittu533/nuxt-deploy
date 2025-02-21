<script lang="ts" setup>
definePageMeta({
  layout: "page",
});

useSeoMeta({
  title: "Embrace | Product Page",
  titleTemplate: "",
});

// Interfaces
interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
}

// State
const searchQuery = ref('');
const selectedCategory = ref('All'); // ✅ Default semua produk ditampilkan

// Fetch all products
const { data: allProducts, pending, error } = await useFetch<Product[]>("https://fakestoreapi.com/products");

// Computed properties
const categories = computed(() => {
  if (!allProducts.value) return [];
  return ['All', ...new Set(allProducts.value.map(product => product.category))];
});

const filteredProducts = computed(() => {
  if (!allProducts.value) return [];
  
  return allProducts.value.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.value.toLowerCase());
    const matchesCategory = selectedCategory.value === 'All' || product.category === selectedCategory.value;
    return matchesSearch && matchesCategory;
  });
});

const sortedProducts = computed(() => {
  return [...filteredProducts.value].sort((a, b) => a.price - b.price); // ✅ Sorting otomatis Low to High
});

// Methods
const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
};
</script>

<template>
  <div class="flex flex-col flex-1 p-4">
    <h1 class="text-2xl font-bold mb-4">Product Page</h1>

    <!-- Search and Filter Section -->
    <div class="mb-4 flex flex-wrap gap-4">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search products..."
        class="p-2 border rounded  text-white"
      />
      <select v-model="selectedCategory" class="p-2 border rounded text-white">
        <option v-for="category in categories" :key="category" :value="category">
          {{ category }}
        </option>
      </select>
    </div>

    <!-- Loading and Error States -->
    <div v-if="pending" class="text-center py-4">Loading...</div>
    <div v-else-if="error" class="text-center py-4 text-red-500">
      Error: {{ error.message }}
    </div>

    <!-- Product Grid -->
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
      <div v-for="product in sortedProducts" :key="product.id" class="border rounded p-4">
        <img :src="product.image" :alt="product.title" class="w-full h-48 object-contain mb-2" />
        <h2 class="font-semibold">{{ product.title }}</h2>
        <p class="text-gray-600">{{ product.category }}</p>
        <p class="font-bold mt-2">{{ formatPrice(product.price) }}</p>
      </div>
    </div>

    <!-- No Results Message -->
    <div v-if="sortedProducts.length === 0" class="text-center py-4">
      No products found matching your criteria.
    </div>
  </div>
</template>
