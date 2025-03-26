<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { dataStore } from '@/stores/index'
import { index } from '@/api'
import type { listData } from '@/interfaces'
import TheHeader from './detailComponents/TheHeader.vue'
import TheImage from './detailComponents/TheImage.vue'
import TheContent from './detailComponents/TheContent.vue'

onMounted(async () => {
  if (store.table.results.length === 0) {
    await index()
  }
})

const selected = ref(0)
const store = dataStore()
const detailData = ref<listData>()

const viewDetail = () => {
  detailData.value = store.table.results.find((data) => data.id == selected.value)
}
</script>

<template>
  <div>
    <TheHeader v-model="selected" @change-view="viewDetail" />
    <section v-if="detailData" class="grid grid-cols-5 gap-4 p-3">
      <TheImage class="col-span-1" :image="detailData.image" />
      <TheContent class="col-span-4" :detail-data="detailData" />
    </section>
  </div>
</template>
