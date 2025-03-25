<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import TheSidebar from '@/components/TheSidebar.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <div class="grid grid-cols-5 h-screen">
    <div class="col-span-1 bg-red-200">
      <TheSidebar />
    </div>
    <div class="col-span-4">
      <TheHeader class="bg-red-300" />
      <RouterView class="bg-red-400" />
      <TheFooter class="bg-red-300" />
    </div>
  </div>
</template>
