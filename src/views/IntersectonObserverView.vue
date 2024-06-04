<script setup lang="ts">
  import NewsItem from '../components/NewsItem.vue';
  import Observer from "../components/Observer.vue"
  import { useFakeFetch } from '../composables/useFakeFetch';
  import { IPost } from '../types';
  import { fakeFetchCallback } from '../constants/base-variant';
  import { Ref, ref } from 'vue';

  const scrollComponent: Ref<HTMLElement | null> = ref(null);
  const { data: posts, isLoading: isPostsLoading, addLimit, fakeFetch } = useFakeFetch<IPost>(fakeFetchCallback);

  const onIntersected = () => {
    addLimit();
    fakeFetch();
  }
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
    <Observer @intersected='onIntersected'/>
    <div class='d-flex justify-sm-center' style='height: 50px;'>
      <v-progress-circular 
        v-if='isPostsLoading' 
        indeterminate
      />
    </div>
  </div>
</template>

