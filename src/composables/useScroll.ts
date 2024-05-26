import { Ref, onMounted, onUnmounted, ref } from 'vue';

export function useScroll(callback?: () => void,) {
  const scrollComponent: Ref<HTMLElement | null> = ref(null);

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  const handleScroll = (_e: Event): void => {
    const bottom = scrollComponent.value?.getBoundingClientRect().bottom;

    if (callback && bottom && bottom - window.innerHeight < 50) {
      callback();
    }
  };

  return { scrollComponent }
}