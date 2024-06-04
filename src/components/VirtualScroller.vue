<script setup lang="ts">
import { Ref, onMounted, ref } from 'vue';
import { IPost, IVirtualizationSettings } from '../types';
import NewsItem from '../components/NewsItem.vue'

  interface IProps {
    settings: IVirtualizationSettings,
    posts: IPost[],
  }

  const props = defineProps<IProps>();
  
  const emits = defineEmits(['listScroll'])
  const viewport: Ref<HTMLElement | null> = ref(null)

  const viewportHeight = props.settings.amount * props.settings.itemHeight;
  const totalHeight = (props.settings.maxInd - props.settings.minInd + 1) * props.settings.itemHeight;
  const toleranceHeight = props.settings.tolerance * props.settings.itemHeight;
  const bufferedItems = props.settings.amount + 2 * props.settings.tolerance;
  const itemsAbove = props.settings.startInd - props.settings.tolerance - props.settings.minInd;
  const topPaddingHeight = ref(itemsAbove * props.settings.itemHeight);
  const bottomPaddingHeight = ref(totalHeight - topPaddingHeight.value);
  const initialPosition = topPaddingHeight.value + toleranceHeight;

  onMounted(() => {
    if (viewport.value) {
      viewport.value.scrollTop = initialPosition;
    }
    
    if (!initialPosition) {
      handleScroll({ target: { scrollTop: 0 } } as never as Event)
    }
  })

  const handleScroll = (e: Event) => {
    const { settings: { itemHeight, minInd }} = props;
    const offset = minInd + Math.floor(((e.target as HTMLElement).scrollTop -  toleranceHeight) / itemHeight )
    const itemsAbove = offset - minInd;
    
    emits('listScroll', offset,  bufferedItems)
    
    topPaddingHeight.value = Math.max(itemsAbove * itemHeight, 0)
    bottomPaddingHeight.value = Math.max(totalHeight - topPaddingHeight.value - bufferedItems * itemHeight, 0)
  }


</script>

<template>
  <v-list-subheader>POSTS</v-list-subheader>
  <div 
    class='viewport' 
    ref='viewport' 
    :style="{ overflowY: 'auto', height: viewportHeight + 'px' }"
    @scroll='handleScroll'  
  >
    <div :style="{ height: topPaddingHeight + 'px' }"></div>
      <v-list :style='{padding: 0}'>
        <template 
          v-for="post in props.posts"
          :key="post.id"
        >
          <NewsItem 
            :post 
            :height='settings.itemHeight'
          />
        </template>
      </v-list>
    <div :style="{ height: bottomPaddingHeight + 'px' }"></div>
  </div>
</template>

