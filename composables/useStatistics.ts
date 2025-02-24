// ~/composables/useStatistics.ts
export const useStatistics = () => {
  const stats = ref([
    { value: "245%", label: "More revenues for the brand" },
    { value: "130K+", label: "Audiences reached" },
    { value: "50+", label: "Brands trust us" },
    { value: "24+", label: "Worldwide Awards" },
  ]);

  return { stats };
};
