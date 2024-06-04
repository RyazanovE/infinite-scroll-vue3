<script setup lang="ts">
import { defineProps } from 'vue'
import { IPost } from '../types';

const { post } = defineProps<{post: IPost}>()

</script>

<template>
  <v-card :text="post.text">
    <template v-slot:title>
      <span class="font-weight-black">{{ post.value }}</span>
    </template>
  </v-card>
</template>

