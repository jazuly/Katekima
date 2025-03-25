<script lang="ts" setup>
import { index } from '@/api'
import { dataStore } from '@/stores'
import { onMounted, ref } from 'vue'

onMounted(async () => {
  await index()
})

const store = dataStore()
const limit = ref(store.table.limit)
const keywords = ref(store.table.keyword)

const changePage = (url: string | null) => store.changePage(url)
const changeLimit = () => store.changeLimit(limit.value)
</script>

<template>
  <div class="p-3">
    <input
      type="text"
      v-model="keywords"
      placeholder="Cari..."
      class="border p-2 rounded w-full my-3"
      @keyup="store.table.keyword = keywords"
    />
    <table class="table w-full">
      <thead>
        <tr>
          <th class="w-7 text-left">No</th>
          <th
            class="text-center"
            @click="store.table.sort = store.table.sort == 'asc' ? 'desc' : 'asc'"
          >
            <font-awesome-icon
              :icon="['fas', store.table.sort == 'asc' ? 'chevron-down' : 'chevron-up']"
            />
            Nama
          </th>
          <th class="text-center w-10">Aksi</th>
        </tr>
        <tr v-for="(data, dk) in store.listDataTable" :key="dk">
          <td>{{ dk + 1 }}</td>
          <td class="text-center">{{ data.name }}</td>
          <td class="text-center">
            <button>
              <font-awesome-icon :icon="['fas', 'pencil']" class="mr-1 cursor-pointer" />
            </button>
            <button>
              <font-awesome-icon :icon="['fas', 'trash']" class="ml-1 cursor-pointer" />
            </button>
          </td>
        </tr>
      </thead>
    </table>

    <section class="my-5 flex justify-between items-center">
      <span class="border p-2 rounded">
        <label for="dropdown">Limit: </label>
        <select id="dropdown" v-model="limit" @change="changeLimit">
          <option :value="20">20</option>
          <option :value="30">30</option>
          <option :value="50">50</option>
        </select>
      </span>

      <section>
        <button
          class="mr-1"
          :class="{
            'text-gray-400': store.table.previous === null,
            'cursor-pointer': store.table.previous !== null,
          }"
          :disabled="store.table.previous === null"
          @click="changePage(store.table.previous)"
        >
          <font-awesome-icon :icon="['fas', 'angles-left']" />
        </button>
        <button
          class="ml-1"
          :class="{
            'text-gray-400': store.table.next === null,
            'cursor-pointer': store.table.next !== null,
          }"
          :disabled="store.table.next === null"
          @click="changePage(store.table.next)"
        >
          <font-awesome-icon :icon="['fas', 'angles-right']" />
        </button>
      </section>
    </section>
  </div>
</template>
