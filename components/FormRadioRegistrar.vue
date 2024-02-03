<template>
  <div>
    <label class="text-base font-semibold text-gray-900">Členství</label>
    <p class="text-sm text-gray-500">Z jaké pozice byste se chtěli do klubu zapojit?</p>
    <fieldset class="mt-4">
      <legend class="sr-only">Pozice v saunařském světě</legend>
      <div class="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
        <div v-for="notificationMethod in notificationMethods" :key="notificationMethod.id" class="flex items-center">
          <input :id="notificationMethod.id" name="notification-method" type="radio" :checked="notificationMethod.id === 'email'" class="h-4 w-4 border-gray-300 text-amber-600 focus:ring-amber-600" />
          <label :for="notificationMethod.id" class="ml-3 block text-sm font-medium leading-6 text-gray-900">{{ notificationMethod.title }}</label>
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script setup>
const notificationMethods = [
  { id: 'majitel', title: 'Majitel/provozovatel*ka sauny' },
  { id: 'navstevnik', title: 'Návštěvník*nice sauny' },
  { id: 'planujici', title: 'Člověk s plánem otevřít saunu' },
]
</script>
