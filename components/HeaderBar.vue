<template>
  <header>
    <nav class="relative mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 overflow-hidden sm:overflow-visible" aria-label="Global">
      <a href="/" class="-m-1.5 p-1.5">
        <span class="sr-only">Your Company</span>
        <img class="h-24 w-auto" src="/images/sann-logo-full.webp" alt="" />
      </a>
      <img class="absolute left-[240px] lg:top-24 h-16 w-auto pointer-events-none" src="/images/caleidoscope.webp" alt="" aria-hidden="true" />
      <img class="absolute hidden lg:block left-[420px] lg:top-12 h-16 w-auto pointer-events-none" src="/images/heat.webp" alt="" aria-hidden="true" />
      <img class="absolute hidden sm:block right-4 top-12 h-48 lg:h-52 w-auto pointer-events-none" src="/images/drops.webp" alt="" aria-hidden="true" />
      <div class="flex flex-1">
        <div class="hidden lg:flex lg:gap-x-12">
          <a v-for="item in navigation" :key="item.name" :href="item.href"
            class="text-sm font-semibold leading-6 text-gray-900">{{ item.name }}</a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup></script>
