import type { Product } from "~/types/product";
import { apiFetch } from "~/utils/api";


export const useProducts = () => {
  const products = ref<Product[]>([]);
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);
  const pending = ref<boolean>(false);


  const fetchProducts = async () => {
    loading.value = true;
    pending.value = true;
    try {
      products.value = await apiFetch<Product[]>("/products");
    } catch (err) {
      error.value = err instanceof Error ? err.message : "Unknown error";
    } finally {
      loading.value = false;
      pending.value = false;


    }
  };
  return { products, loading,pending, error, fetchProducts };
};

// Code untuk consume Api Internal
// export function useProducts() {
//   const products = ref([]);

//   const fetchProducts = async () => {
//     products.value = await apiFetch("/products");
//   };

//   return { products, fetchProducts };
// }


// Code untuk consume Api External
// import { ref } from "vue";
// import { useFetch } from "#app"; // Gunakan jika di dalam Nuxt


// export function useProducts() {
//   const products = ref<Array<any>>([]); // Pastikan ini adalah array
//   const error = ref<string | null>(null); // Definisikan tipe agar bisa menerima string


//   const fetchProducts = async () => {
//     try {
//       const { data } = await useFetch("https://fakestoreapi.com/products");
     
//       if (data.value && Array.isArray(data.value)) {
//         products.value = data.value;
//       } else {
//         throw new Error("Data produk tidak valid");
//       }
//     } catch (err) {
//       error.value = "Gagal mengambil data produk!";
//     }
//   };


//   return { products, error, fetchProducts };
// }
