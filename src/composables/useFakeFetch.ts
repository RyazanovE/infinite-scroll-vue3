import { Ref, computed, ref, watch } from 'vue';

export function useFakeFetch<T>(
  callback: (itemsAmount: number, start: number) => T[],
  manually = false,
  initialStart = 0,
  initialLimit = 15
) {
  const limit = ref(initialLimit);
  const start = ref(initialStart);
  const data: Ref<T[] | null> = ref(null);
  const isLoading = ref(false);

  const itemsAmount = computed(() => limit.value - start.value);

  async function fakeFetch() {
    if (itemsAmount.value <= 0) return;
    
    try {
      isLoading.value = true;
      const fakeResultData = callback(itemsAmount.value, start.value);
      data.value = await new Promise<T[]>((resolve) =>
        setTimeout(() => resolve(fakeResultData), 2000)
      );
    } catch (error) {
      console.error(error);
    } finally {
      isLoading.value = false;
    }
  }

  if (!manually && itemsAmount.value > 0) {
    fakeFetch();
  }

  watch([limit, start], () => {
    if (!isLoading.value && !manually) {
      fakeFetch();
    }
  });

  function addLimit() {
    limit.value += 5;
  }

  return {
    data,
    isLoading,
    addLimit,
    fakeFetch,
  };
}