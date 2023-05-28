<template>
  <NuxtPage />
</template>

<style>
html, body, #__nuxt {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>

<script setup lang="ts">
import Blobity from 'blobity';

const nuxt = useNuxtApp()

nuxt.hooks.hook("page:finish", () => {
  const defaultOptions = {
    licenseKey: 'opensource',
    invert: true,
    zIndex: 0,
    magnetic: false,
    dotColor: '#10b981',
    radius: 8,
    focusableElementsOffsetX: 5,
    focusableElementsOffsetY: 4,
    mode: 'normal',
    focusableElements:
        '[data-blobity], a:not([data-no-blobity]), button:not([data-no-blobity]), [data-blobity-tooltip], .back-to-top, .intro',
  }

  new Blobity(defaultOptions as any);
})
</script>