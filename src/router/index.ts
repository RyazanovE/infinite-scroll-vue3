import { createWebHistory, createRouter } from 'vue-router'

import BaseVariantView from "../views/BaseVariantView.vue"
import NativeVuetifyView from '../views/NativeVuetifyView.vue';
import IntersectonObserverView from '../views/IntersectonObserverView.vue';

export const routeNamesEnum = {
  BASE_VARIANT: 'base-variant',
  NATIVE_VUETIFY: 'native-vuetify',
  INTERSECTION_OBSERVER: 'intersection-observer',
};

const routes = [
  { path: '/', component: BaseVariantView, name: routeNamesEnum.BASE_VARIANT },
  { path: '/native-vuetify', component: NativeVuetifyView, name: routeNamesEnum.NATIVE_VUETIFY },
  { path: '/intersection-observer', component: IntersectonObserverView, name: routeNamesEnum.INTERSECTION_OBSERVER },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})