<script setup lang="ts">
import NewsList from './components/NewsList.vue'
</script>

<template>
  <div class='news-list-wrapper'>
    <NewsList/>
  </div>
</template>

<style scoped>
  .news-list-wrapper {
    display: flex;
    justify-content: center;
    padding: 0 20%;
  }
</style>
