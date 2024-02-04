<template>
  <header class="bg-white">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 lg:pt-10" aria-label="Global">
      <a href="#" class="-m-1.5 p-1.5">
        <span class="sr-only">Your Company</span>
        <img class="h-12 w-auto" src="/images/red-sun.webp" alt="" />
      </a>
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
