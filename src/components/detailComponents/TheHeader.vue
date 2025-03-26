<script lang="ts" setup>
import { dataStore } from '@/stores/index'

defineEmits(['update:modelValue', 'changeView'])
defineProps({
  modelValue: {
    type: Number,
    required: true,
  },
})

const store = dataStore()
</script>

<template>
  <div class="flex justify-between items-center p-3">
    <select
      id="dropdown"
      :value="modelValue"
      class="border rounded p-2 w-full"
      @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
    >
      <option :value="0" readonly>Pilih Detail:</option>
      <option :value="data.id" v-for="(data, dK) in store.table.results" :key="dK">
        {{ data.title }}
      </option>
    </select>
    <button class="ml-3 w-28 h-10 border rounded cursor-pointer" @click="$emit('changeView')">
      Pindah
    </button>
  </div>
</template>
