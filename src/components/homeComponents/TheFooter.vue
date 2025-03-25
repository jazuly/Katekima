<script lang="ts" setup>
import { index } from '@/api'
import { dataStore } from '@/stores'
import { onMounted, ref } from 'vue'

onMounted(async () => {
  if (store.table.results.length === 0) {
    await index()
  }
})

const store = dataStore()
const limit = ref(store.table.limit)

const changeLimit = () => (store.table.limit = limit.value)
</script>

<template>
  <section class="my-5 flex justify-between items-center">
    <span class="border p-2 rounded">
      <label for="dropdown">Limit: </label>
      <select id="dropdown" v-model="limit" @change="changeLimit">
        <option :value="10">10</option>
        <option :value="30">30</option>
        <option :value="50">50</option>
      </select>
    </span>

    <span>{{ store.table.page * store.listDataTable.length }} / {{ store.table.count }}</span>

    <section>
      <button
        class="mr-1"
        :class="{
          'text-gray-400': store.table.page <= 1,
          'cursor-pointer': store.table.page > 1,
        }"
        :disabled="store.table.page <= 1"
        @click="store.table.page = store.table.page - 1"
      >
        <font-awesome-icon :icon="['fas', 'angles-left']" />
      </button>
      <button
        class="ml-1"
        :class="{
          'text-gray-400': store.table.page * limit >= store.table.count,
          'cursor-pointer': store.table.page * limit < store.table.count,
        }"
        :disabled="store.table.page * limit >= store.table.count"
        @click="store.table.page = store.table.page + 1"
      >
        <font-awesome-icon :icon="['fas', 'angles-right']" />
      </button>
    </section>
  </section>
</template>
