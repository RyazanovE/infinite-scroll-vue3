<script setup lang="ts">
  import NewsItem from './NewsItem.vue';
  import { useFakeFetch } from '../composables/useFakeFetch';
  import { useScroll } from '../composables/useScroll';
  import { IPost } from '../types';
  import { fakeFetchCallback } from '../constants/base-variant';

  const { data: posts, isLoading: isPostsLoading, addLimit } = useFakeFetch<IPost>(fakeFetchCallback);
  const { scrollComponent } = useScroll(addLimit)
</script>

<template>
  <div ref="scrollComponent">
    <v-list>
      <v-list-subheader>POSTS</v-list-subheader>
      <template 
        v-for="post in posts"
        :key="post.id"
      >
        <NewsItem :post/>
        <v-divider/>
      </template>
    </v-list>
    <div class='d-flex justify-sm-center' style='height: 50px;'>
      <v-progress-circular 
        v-if='isPostsLoading' 
        indeterminate
      />
    </div>
  </div>
</template>

