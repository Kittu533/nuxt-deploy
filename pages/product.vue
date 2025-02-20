<script lang="ts" setup>
definePageMeta({
  layout: "page",
});

useSeoMeta({
  title: "Product Page",
  titleTemplate: "",
});

// fetch Api FakeStore
import { ref, onMounted } from "vue";

// Definisikan interface untuk produk dari API
interface Product {
  id: number;
  title: string;
  image: string;
}

// State untuk menyimpan data produk dan status loading
const products = ref<Product[]>([]);
const loading = ref(true);

// Fungsi untuk fetch data produk
const fetchProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products?limit=3");
    const data: Product[] = await response.json();
    products.value = data;
  } catch (error) {
    console.error("Error fetching products:", error);
  } finally {
    loading.value = false;
  }
};

// Fetch data saat komponen dipasang
onMounted(fetchProducts);


</script>

<template>
  <div class="flex flex-col flex-1">
   
  </div>
</template>

