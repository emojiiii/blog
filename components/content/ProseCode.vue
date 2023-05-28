<script lang="ts">
import { defineComponent } from '#imports'

export default defineComponent({
  props: {
    code: {
      type: String,
      default: ''
    },
    language: {
      type: String,
      default: null
    },
    filename: {
      type: String,
      default: null
    },
    highlights: {
      type: Array as () => number[],
      default: () => []
    },
    meta: {
      type: String,
      default: null
    }
  }
})
</script>

<template>
  <div class="p-4 relative overflow-x-auto rounded-lg border-1 border-dashed bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-gray-400">
    <span v-if="filename" class="absolute top-0 right-0 text-sm px-3 py-2 text-gray-700">{{ filename }}</span>
    <slot />
    <div></div>
  </div>
</template>

<style>
pre {
    padding: 0;
    margin: 0;
}
</style>