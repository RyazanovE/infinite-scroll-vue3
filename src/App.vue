<script setup lang="ts">
  import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="Vue 3 vuetify test scroll app"></v-app-bar>
    <Sidebar class='mt-2'/>
    <v-main>
      <div class='main'>
        <RouterView />
      </div>
    </v-main>
  </v-layout>
</template>

<style scoped>
  .main {
    padding: 0 20%;
  }
</style>
