<template>
  <tr v-for="data in 5" :key="data">
    <td class="py-2 px-1">
      <div class="w-full h-5 bg-gray-300 dark:bg-gray-400 animate-pulse rounded-xl" />
    </td>
    <td class="py-2 px-1">
      <div class="w-full h-5 bg-gray-300 dark:bg-gray-400 animate-pulse rounded-xl" />
    </td>
    <td class="py-2 px-1">
      <div class="flex justify-center items-center">
        <div class="w-5 h-5 bg-gray-300 dark:bg-gray-400 animate-pulse rounded-xl mr-1" />
        <div class="w-5 h-5 bg-gray-300 dark:bg-gray-400 animate-pulse rounded-xl ml-1" />
      </div>
    </td>
  </tr>
</template>
