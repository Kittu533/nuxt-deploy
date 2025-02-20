<script lang="ts" setup>
definePageMeta({
  layout: "page",
});

useSeoMeta({
  title: "Landing Page",
  titleTemplate: "",
});

const stats = [
  { value: "245%", label: "More revenues for the brand" },
  { value: "130K+", label: "Audiences reached" },
  { value: "50+", label: "Brands trust us" },
  { value: "24+", label: "Worldwide Awards" },
];

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
    <section class="flex-1 flex justify-center items-center gap-32 mb-28">
      <div class="flex flex-col gap-6">
        <h1 class="text-6xl md:text-7xl font-bold leading-tight text-black">
          <span class="block">We Take</span>
          <span class="block">Care Of</span>
          <span class="block">Your Brand</span>
        </h1>
        <p class="text-lg">
          We care about our work and we care about our client
        </p>
        <div class="flex gap-4">
          <input
            type="text"
            placeholder="Enter your email"
            class="px-4 py-2 rounded-2xl"
          />
          <Button class="rounded-xl">Book A Call</Button>
        </div>
      </div>
      <div>
        <img class="w-[602px]" src="~/assets/hero-img.png" alt="" />
      </div>
    </section>
    <section
      class="min-h-[calc(60vh-68px)] bg-gray-100 flex justify-center item-center"
    >
      <div class="flex flex-col justify-evenly">
        <h1
          class="flex justify-center items-center text-black text-4xl font-semibold"
        >
          Companies We Work With
        </h1>
        <img class="w-[1200px]" src="~/assets/work-with-1.png" alt="" />
        <img class="w-[1200px]" src="~/assets/work-with-2.png" alt="" />
      </div>
    </section>
    <section
      class="min-h-[calc(60vh-68px)] bg-gray-50 flex flex-col justify-center"
    >
      <div
        class="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        <!-- Bagian Statistik -->
        <div class="grid grid-cols-2 gap-8">
          <div v-for="(item, index) in stats" :key="index">
            <h2 class="text-4xl md:text-5xl font-bold">{{ item.value }}</h2>
            <p class="text-gray-500">{{ item.label }}</p>
          </div>
        </div>

        <!-- Bagian Komitmen -->
        <div>
          <h2 class="text-4xl md:text-5xl font-bold">Commitments</h2>
          <p class="text-gray-500 mt-4">
            We are committed to working with you collaboratively to understand
            your goals and create a strategy that will achieve them.
          </p>
          <a
            href="#"
            class="text-blue-600 font-medium mt-4 inline-flex items-center"
          >
            Learn More →
          </a>
        </div>
      </div>
    </section>
    <section
      class="min-h-[calc(60vh-68px)] bg-gray-100 flex flex-col items-center py-16 px-6"
    >
      <div class="text-center mb-8">
        <h2 class="text-4xl md:text-5xl font-bold">Our Work</h2>
        <p class="text-gray-500 text-lg">A glimpse of our portfolio</p>
      </div>

      <div v-if="loading" class="text-gray-500 text-lg">
        Loading products...
      </div>

      <div
        v-else
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        <div
          v-for="product in products"
          :key="product.id"
          class="bg-white rounded-3xl shadow-md p-6 text-center"
        >
          <img
            :src="product.image"
            :alt="product.title"
            class="w-full h-56 object-contain mb-4 rounded-lg"
          />
          <h3 class="text-xl font-semibold">{{ product.title }}</h3>
        </div>
      </div>

      <button
        class="mt-8 bg-blue-700 text-white px-8 py-2 rounded-full text-lg hover:bg-blue-700"
      >
        See More
      </button>
    </section>
    <!-- CTA Banner  -->
    <section
      class="min-h-[calc(60vh-68px)] bg-gray-100 flex justify-center item-center"
    >
      <img class="w-[1200px] h-[400px]" src="~/assets/cta-banner.png" alt="" />
    </section>
    <!-- Meet Our Team -->
    <section
      class="min-h-[calc(60vh-68px)] bg-gray-100 flex justify-center item-center px-6"
    >
      <div
        class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <img
          class="w-[610px] h-[400px]"
          src="~/assets/team-photo.png"
          alt="team-photo"
        />
        <div class="flex flex-col justify-center">
          <h1 class="text-4xl md:text-5xl font-semibold">Meet Our Team</h1>
          <p class="text-gray-500 mt-4">
            Discover the brilliance behind Embrace. Our team blends innovation
            and artistry to craft digital wonders that captivate.
          </p>
          <button
            class="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>

    <!-- Testimonial -->
    <Testimonial />
  </div>
</template>

