<script setup lang="ts">
import { defineProps } from 'vue'
import { IPost } from '../types';

const { post } = defineProps<{post: IPost}>()

</script>

<template>
  <div class='post-item'>
    {{ post.value }}
  </div>
</template>

<style scoped>
  .post-item {
    border: 1px solid red;
    height: 100px;
    text-align: center;
  }
</style>
