<script setup lang="ts">
  import { ref } from 'vue';
import VirtualScroller from '../components/VirtualScroller.vue'
import { IPost } from '../types';

  const virtualizationSettings = {
    minInd: 1,
    maxInd: 50,
    startInd: 1,
    itemHeight: 168,
    amount: 5,
    tolerance: 2
  }

  const posts = ref<IPost[]>([])

  const getPosts = (offset: number, limit: number) => {
    const posts = []
    const start = Math.max(virtualizationSettings.minInd, offset)
    const end = Math.min(offset + limit - 1, virtualizationSettings.maxInd)

    if (start <= end) {
      for (let i = start; i <= end; i++) {
        posts.push({ id: i, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!', value: `Post ${i}` })
      }
    }
    return posts 
  }

  const onListScroll = (index: number, bufferedItems: number) => {
    posts.value = getPosts(index, bufferedItems);
  }

</script>

<template>
  <VirtualScroller :settings="virtualizationSettings" :posts='posts' @listScroll='onListScroll'/>
</template>

