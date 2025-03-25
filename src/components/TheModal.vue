<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  isOpen: {
    type: Boolean,
    default: false,
    required: true,
  },
  text: {
    type: String,
    default: '',
    required: true,
  },
})

const emmits = defineEmits(['close'])

const close = () => {
  emmits('close')
}
</script>

<template>
  <Teleport to="body">
    <div class="fixed inset-0 flex items-center justify-center bg-gray-800/30 backdrop-blur-sm">
      <div class="bg-gray-800 text-white rounded-lg p-6 w-96 shadow-lg">
        <h2 class="text-xl font-semibold mb-4">{{ text }}</h2>

        <div class="mt-4 flex justify-end">
          <button @click="close" class="px-4 py-2 bg-red-700 text-white rounded">Ok</button>
        </div>
      </div>
    </div>
  </Teleport>
</template>
