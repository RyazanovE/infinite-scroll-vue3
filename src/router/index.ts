import { createWebHistory, createRouter } from 'vue-router'

import BaseVariantView from "../views/BaseVariantView.vue"
import NativeVuetifyView from '../views/NativeVuetifyView.vue';
import IntersectonObserverView from '../views/IntersectonObserverView.vue';
import VirtualizationView from '../views/VirtualizationView.vue';

export const routeNamesEnum = {
  BASE_VARIANT: 'base-variant',
  NATIVE_VUETIFY: 'native-vuetify',
  INTERSECTION_OBSERVER: 'intersection-observer',
  VIRTUALIZATION: 'virtualization'
};

const routes = [
  { path: '/', component: BaseVariantView, name: routeNamesEnum.BASE_VARIANT },
  { path: '/native-vuetify', component: NativeVuetifyView, name: routeNamesEnum.NATIVE_VUETIFY },
  { path: '/intersection-observer', component: IntersectonObserverView, name: routeNamesEnum.INTERSECTION_OBSERVER },
  { path: '/virtualization', component: VirtualizationView, name: routeNamesEnum.VIRTUALIZATION },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})