<template>
  <div>
    <label for="field-registrar" class="text-lg font-semibold text-gray-900">Jsem:</label>
    <fieldset id="field-registrar" class="mt-4">
      <legend class="sr-only">Kdo jste v saunařském světě?</legend>
      <div class="space-y-4">
        <div v-for="option in registrarOptions" :key="option.id" class="flex items-center">
          <input :id="option.id" name="registrar-type" type="radio" :checked="option.id === 'majitel'" :value="option.id" class="h-4 w-4 border-gray-400 text-amber-600 focus:ring-amber-600" />
          <label :for="option.id" class="ml-3 block font-medium leading-6 text-gray-900">
            {{ option.title }}
          </label>
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script setup>
const registrarOptions = [
  { id: 'majitel', title: 'Majitel/ka potírny' },
  { id: 'planujici', title: 'Člověk s plánem otevřít si saunu' },
  { id: 'saunar', title: 'Hrdý saunař' },
]
</script>
