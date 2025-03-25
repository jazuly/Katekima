<script lang="ts" setup>
import { index } from '@/api'
import { dataStore } from '@/stores'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

onMounted(async () => {
  if (store.table.results.length === 0) {
    await index()
  }
})

const store = dataStore()
const keywords = ref(store.table.keyword)
const router = useRouter()
</script>

<template>
  <div class="flex justify-between items-center">
    <input
      type="text"
      v-model="keywords"
      placeholder="Cari..."
      class="border p-2 rounded w-full my-3"
      @keyup="store.table.keyword = keywords"
    />
    <button class="ml-3 w-28 h-10 border rounded cursor-pointer" @click="router.push('/add')">
      <font-awesome-icon :icon="['fas', 'plus']" class="mr-1" />
      <span>Tambah</span>
    </button>
  </div>
</template>
