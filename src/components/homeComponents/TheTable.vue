<script lang="ts" setup>
import { deleted, index } from '@/api'
import { dataStore } from '@/stores'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

onMounted(async () => {
  if (store.table.results.length === 0) {
    await index()
  }
})

const store = dataStore()
const isModalOpen = ref(false)
const router = useRouter()

const deleteData = async (id: number) => {
  await deleted(id)
  store.table.results = store.table.results.filter((data) => data.id !== id)
  isModalOpen.value = true
}
</script>

<template>
  <table class="table w-full">
    <thead>
      <tr>
        <th class="w-7 text-left">No</th>
        <th
          class="text-left"
          @click="store.table.sort = store.table.sort == 'asc' ? 'desc' : 'asc'"
        >
          Nama
          <font-awesome-icon
            :icon="['fas', store.table.sort == 'asc' ? 'chevron-down' : 'chevron-up']"
          />
        </th>
        <th class="text-center w-10">Aksi</th>
      </tr>
      <template v-if="store.listDataTable.length > 0">
        <tr v-for="(data, dk) in store.listDataTable" :key="dk">
          <td>{{ (store.table.page - 1) * store.table.limit + dk + 1 }}</td>
          <td class="text-left">{{ data.title }}</td>
          <td class="text-center">
            <button @click="router.push(`/edit/${data.id}`)">
              <font-awesome-icon :icon="['fas', 'pencil']" class="mr-1 cursor-pointer" />
            </button>
            <button @click="deleteData(data.id)">
              <font-awesome-icon :icon="['fas', 'trash']" class="ml-1 cursor-pointer" />
            </button>
          </td>
        </tr>
      </template>
      <template v-else>
        <tr>
          <td class="text-center" colspan="3">Tidak ada data</td>
        </tr>
      </template>
    </thead>
  </table>
</template>
