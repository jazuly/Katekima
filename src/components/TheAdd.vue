<script lang="ts" setup>
import { store as storeAPI, update } from '@/api'
import type { formData } from '@/interfaces'
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { dataStore } from '@/stores/index'
import Modal from './TheModal.vue'

const router = useRouter()
const route = router.currentRoute
const isModalOpen = ref(false)
const store = dataStore()
const formData = ref<formData>({
  id: null,
  title: '',
  price: 0,
  description: '',
  category: '',
  image: '',
  rating: {
    rate: 0,
    count: 0,
  },
})
const isAbleSubmit = computed(() => {
  return Object.values(formData.value).every((val) => val !== '')
})

onMounted(() => {
  if (route.value.params.id) {
    formData.value = store.table.results.find(
      (data) => data.id === parseInt(route.value.params.id.toString()),
    ) as formData
  }
})

const submit = async () => {
  if (route.value.params.id) {
    await update(formData.value)
  } else {
    await storeAPI(formData.value)
  }

  isModalOpen.value = true
}
</script>

<template>
  <Modal
    v-if="isModalOpen"
    :isOpen="isModalOpen"
    :text="route.params.id ? 'Data Berhasil Diubah' : 'Data Berhasil Ditambah'"
    @close="router.back"
  />
  <div class="p-3">
    <label for="">Judul</label>
    <input type="text" v-model="formData.title" class="border p-2 rounded w-full my-3" required />
    <label for="">Harga</label>
    <input type="number" v-model="formData.price" class="border p-2 rounded w-full my-3" required />
    <label for="">Deskripsi</label>
    <textarea
      type="text"
      v-model="formData.description"
      class="border p-2 rounded w-full my-3"
      rows="3"
      required
    />
    <label for="">Kategori</label>
    <input
      type="text"
      v-model="formData.category"
      class="border p-2 rounded w-full my-3"
      required
    />
    <label for="">Gambar</label>
    <input type="text" v-model="formData.image" class="border p-2 rounded w-full my-3" required />

    <div class="flex justify-end">
      <button class="border rounded py-2 px-5 mr-1 cursor-pointer" @click="router.back">
        Batal
      </button>
      <button
        class="border rounded py-2 px-5 ml-1 cursor-pointer"
        @click="submit"
        :class="{ 'text-gray-400': !isAbleSubmit }"
        :disabled="!isAbleSubmit"
      >
        {{ route.params.id ? 'Ubah' : 'Simpan' }}
      </button>
    </div>
  </div>
</template>
