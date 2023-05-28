<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: ''
  },
  target: {
    type: String,
    default: '_blank'
  }
})
</script>

<template>
  <NuxtLink :href="href" :target="target" class="border-b border-b-dashed border-b-current decoration-none text-current font-500 visited:text-current hover:!text-primary">
    <slot />
  </NuxtLink>
</template>