<script lang="ts" setup>
import type { listData } from '@/interfaces'

defineProps({
  detailData: {
    type: Object as () => listData,
    required: true,
  },
})
</script>

<template>
  <div>
    <h3 class="text-gray-500">{{ detailData.category }}</h3>
    <h1 class="text-2xl font-bold my-2">{{ detailData.title }}</h1>
    <div class="flex items-center justify-between">
      <p>${{ detailData.price }}</p>
      <div class="flex justify-end items-center">
        <font-awesome-icon :icon="['fas', 'star']" class="pr-1 text-amber-400" />
        <p>{{ detailData.rating.rate }} ({{ detailData.rating.count }})</p>
      </div>
    </div>
    <div class="my-10">
      <p class="font-bold">Deskripsi</p>
      <p class="text-justify">{{ detailData.description }}</p>
    </div>
  </div>
</template>
