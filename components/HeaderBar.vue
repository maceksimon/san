<template>
  <header>
    <nav class="relative mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 overflow-hidden sm:overflow-visible" aria-label="Global">
      <div class="flex gap-4">
        <a href="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-24 w-auto" src="/images/sann-logo-full.webp" alt="" />
        </a>
        <!-- Icon Facebook -->
        <a href="https://www.facebook.com/sanncz" target="_blank" class="hover:text-gray-700 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m12 191.13V156h20a12 12 0 0 0 0-24h-20v-20a12 12 0 0 1 12-12h16a12 12 0 0 0 0-24h-16a36 36 0 0 0-36 36v20H96a12 12 0 0 0 0 24h20v55.13a84 84 0 1 1 24 0"/></svg>
        </a>
        <!-- Icon Instagram -->
        <a href="https://www.instagram.com/sann_sann_cz/" target="_blank" class="hover:text-gray-700 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 72a24 24 0 1 1 24-24a24 24 0 0 1-24 24m48-132H80a60.07 60.07 0 0 0-60 60v96a60.07 60.07 0 0 0 60 60h96a60.07 60.07 0 0 0 60-60V80a60.07 60.07 0 0 0-60-60m36 156a36 36 0 0 1-36 36H80a36 36 0 0 1-36-36V80a36 36 0 0 1 36-36h96a36 36 0 0 1 36 36ZM196 76a16 16 0 1 1-16-16a16 16 0 0 1 16 16"/></svg>
        </a>
      </div>
      <img class="absolute left-[240px] top-20 h-16 w-auto pointer-events-none" src="/images/caleidoscope.webp" alt="" aria-hidden="true" />
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
