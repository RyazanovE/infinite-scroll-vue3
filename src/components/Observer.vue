<script setup lang="ts">
  import { Ref, ref, onMounted, onUnmounted } from 'vue';

  const emit = defineEmits(['intersected'])
  const element: Ref<HTMLElement | null> = ref(null);


  const observer: Ref<IntersectionObserver | null> = ref(null);

  onMounted(() => {
    observer.value = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        emit('intersected')
      }
    });
    
    if (element.value) {
      observer.value.observe(element.value);
    }
  })

  onUnmounted(() => {
    observer.value?.disconnect();
  })
</script>

<template>
  <div ref='element' class='observer' />
</template>


