<script setup lang="ts">
  import { useFakeFetch } from '../composables/useFakeFetch';
  import { fakeFetchCallback } from '../constants/base-variant';
  import { IPost } from '../types';
  import NewsItem from '../components/NewsItem.vue';

  const { data: posts, addLimit, fakeFetch } = useFakeFetch<IPost>(fakeFetchCallback, true);
  
  async function load ({ done }: {done: (status: any) => void}) {
    addLimit()
    await fakeFetch()
    done('ok')
  }
</script>

<template>
  <v-infinite-scroll :items="posts" :onLoad="load">
    <v-list-subheader>POSTS</v-list-subheader>
    <template v-for="(post) in posts" :key="post.id">
      <div>
        <NewsItem :post/>
      </div>
    </template>
  </v-infinite-scroll>
</template>
