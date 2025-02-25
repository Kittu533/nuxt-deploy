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