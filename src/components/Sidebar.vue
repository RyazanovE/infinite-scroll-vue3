<script setup lang="ts">
  import { useRoute, useRouter } from 'vue-router';
  import { routeNamesEnum } from '../router/index'

  const router = useRouter();
  const route = useRoute();
</script>

<template>
  <v-navigation-drawer permanent>
    <v-list
      density="compact"
      nav
    >
      <h3 class='mb-2 ml-4'>Infinite scroll</h3>
      <v-divider class='mb-4'/>
      <v-list-item prepend-icon="mdi-view-dashboard" title="Scroll listeners" :active='route.name === routeNamesEnum.BASE_VARIANT'  @click='router.push({name: routeNamesEnum.BASE_VARIANT})'/>
      <v-list-item prepend-icon="mdi-forum" title="Native vuetify" :active='route.name === routeNamesEnum.NATIVE_VUETIFY'  @click='router.push({name: routeNamesEnum.NATIVE_VUETIFY})'/>
      <v-list-item prepend-icon="mdi-forum" title="Intersection observer" :active='route.name === routeNamesEnum.INTERSECTION_OBSERVER'  @click='router.push({name: routeNamesEnum.INTERSECTION_OBSERVER})'/>
    </v-list>
  </v-navigation-drawer>
</template>

