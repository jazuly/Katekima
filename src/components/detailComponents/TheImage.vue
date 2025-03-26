<script lang="ts" setup>
import { ref, watch } from 'vue'

const props = defineProps({
  image: String,
})

const isImageLoaded = ref(false)

watch(
  () => props.image,
  () => {
    isImageLoaded.value = false
  },
)
</script>

<template>
  <div>
    <div
      v-if="!isImageLoaded"
      class="w-full h-[300px] bg-gray-300 dark:bg-gray-400 animate-pulse rounded-xl"
    />
    <img :src="image" class="rounded-2xl" @load="isImageLoaded = true" v-show="isImageLoaded" />
  </div>
</template>
