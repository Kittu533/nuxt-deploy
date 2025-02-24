// import  { Product } from "~/types/product";
// import { apiFetch } from "~/utils/api";

// export default defineEventHandler(async (): Promise<Product[]> => {
//   return await apiFetch<Product[]>("/products");
// });


export default defineEventHandler(async () => {
  const response = await $fetch("https://fakestoreapi.com/products");
  return response;
});
