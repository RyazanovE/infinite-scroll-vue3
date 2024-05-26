<script setup lang="ts">
import { useFakeFetch } from '../composables/useFakeFetch';
import { useScroll } from '../composables/useScroll';
import { IPost } from '../types';
import NewsItem from './NewsItem.vue'

const fakeFetchCallback = (itemsAmount: number, start: number): IPost[] => {
  return Array.from({ length: itemsAmount }, (_value, ind) => ({ id: start + ind, value: 'Post' + (start + ind) }));
};

const { data: posts, isLoading: isPostsLoading, setLimit } = useFakeFetch<IPost>(fakeFetchCallback);
const { scrollComponent } = useScroll(() => setLimit(posts.value?.length ? posts.value?.length + 5 : 0))




</script>

<template>
  <ul class="news-list" ref="scrollComponent">
    <li >
      <NewsItem 
        v-for="post in posts" 
        :key="post.id"
        :post="post"
      />
    </li>
    <li v-if='isPostsLoading'>
      Loading...
    </li>
  </ul>
</template>

<style scoped>
  .news-list {
    width: 100%;
    padding: 0;
  }
</style>
