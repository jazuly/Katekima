<script lang="ts" setup>
import { index } from '@/api'
import { dataStore } from '@/stores'
import { onMounted, ref } from 'vue'
import Modal from './TheModal.vue'
import HomeTheHeader from './homeComponents/TheHeader.vue'
import HomeTheTable from './homeComponents/TheTable.vue'
import HomeTheFooter from './homeComponents/TheFooter.vue'

onMounted(async () => {
  if (store.table.results.length === 0) {
    await index()
  }
})

const store = dataStore()
const isModalOpen = ref(false)
</script>

<template>
  <Modal
    v-if="isModalOpen"
    :isOpen="isModalOpen"
    text="Data Berhasil Dihapus"
    @close="isModalOpen = false"
  />
  <div class="p-3">
    <HomeTheHeader />
    <HomeTheTable />
    <HomeTheFooter />
  </div>
</template>
