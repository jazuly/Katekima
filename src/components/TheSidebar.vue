<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const routeName = computed(() => route.name?.toString() || '')
</script>

<template>
  <div class="p-3">
    <div class="border p-2 text-center">
      <h1>Logo</h1>
    </div>
    <div class="grid grid-cols-1 gap-4 mt-4">
      <span>
        <router-link to="/" :class="{ 'text-red-400': ['home', 'add', 'edit'].includes(routeName) }"
          >Home</router-link
        >
      </span>
      <span>
        <router-link to="/detail" :class="{ 'text-red-400': ['detail'].includes(routeName) }"
          >Detail</router-link
        >
      </span>
    </div>
  </div>
</template>
