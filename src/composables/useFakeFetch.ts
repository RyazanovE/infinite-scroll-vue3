import { Ref, computed, ref, watch } from 'vue';

export function useFakeFetch<T>(callback: (itemsAmount: number, start: number) => T[], initialStart= 0, initialLimit = 15) {
  const limit = ref(initialLimit);
  const start = ref(initialStart);
  const data: Ref<T[] | null> = ref(null);
  const isLoading = ref(false);

  const itemsAmount = computed(() => limit.value - start.value)


  async function fakeFetch() {
    try {
      console.log("fetch", itemsAmount)
      isLoading.value = true;
      const fakeResultData: T[] | null = itemsAmount ? callback(itemsAmount.value, start.value) : null;
      data.value = await new Promise((resolve) => setTimeout(() => resolve(fakeResultData), 2000));
    } catch (error) {
      console.error(error);
    } finally {
      isLoading.value = false;
    }
  }

  if (itemsAmount) {
    fakeFetch();
  }

  watch([limit, start], () => {
    if (!isLoading.value) {
      console.log("watch", limit.value)
      fakeFetch();
    }
  });


  return {
    data,
    isLoading,
    setStart: (newStart: number) => {
      start.value = newStart;
    },
    setLimit: (newLimit: number) => {
      console.log('🚀 ~ newLimit:', newLimit)
      limit.value = newLimit;
    }
  };
}