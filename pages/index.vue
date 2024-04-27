<template>
  <div>
    <HeaderBar />
    <h1 class="sr-only">Saunařská asociace nezávislých nadšenců</h1>
    <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
      <EventInvitation class="my-10 sm:my-12 lg:my-24" />
      <FormNewsletter class="my-10 sm:my-12 lg:my-16" />
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Rozsviť s náma SANN | SANN.cz',
  ogTitle: 'Rozsviť s náma SANN',
  description: 'Saunová asociace nezávislých nadšenců (SANN) sdružuje saunáčstvo s divokostí v srdci a majitele nezkrocených potíren.',
  ogDescription: 'Saunová asociace nezávislých nadšenců (SANN) sdružuje saunáčstvo s divokostí v srdci a majitele nezkrocených potíren.',
  ogImage: 'https://sann.cz/images/og-image.jpg',
  twitterCard: 'summary_large_image',
})
</script>
