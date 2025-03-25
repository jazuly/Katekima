<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import TheSidebar from '@/components/TheSidebar.vue'
import TheFooter from '@/components/TheFooter.vue'
import { onMounted, watch } from 'vue'
import { dataStore } from './stores'

const store = dataStore()

onMounted(async () => {
  store.table.limit = Number(localStorage.getItem('limit')) || 10
  store.table.keyword = localStorage.getItem('keyword') || ''
  store.table.page = Number(localStorage.getItem('page')) || 1
})

watch(
  () => store.table.limit,
  () => {
    localStorage.setItem('limit', store.table.limit.toString())
  },
)

watch(
  () => store.table.keyword,
  () => {
    localStorage.setItem('keyword', store.table.keyword)
  },
)

watch(
  () => store.table.page,
  () => {
    localStorage.setItem('page', store.table.page.toString())
  },
)
</script>

<template>
  <div class="grid grid-cols-5 h-screen">
    <div class="col-span-1 bg-red-200">
      <TheSidebar />
    </div>
    <div class="col-span-4">
      <TheHeader class="bg-red-300" />
      <RouterView class="bg-red-100 h-[calc(100%-120px)]" />
      <TheFooter class="bg-red-300" />
    </div>
  </div>
</template>
