<template>
  <div>
    <label class="text-base font-semibold text-gray-900">Od SANN očekávám:</label>
    <fieldset class="mt-4">
      <legend class="sr-only">Vyberte možnost, která nejlépe odpovídá vašim očekáváním</legend>
      <div class="space-y-4">
        <div v-for="option in expecationOptions" :key="option.id" class="flex items-center">
          <input v-model="expectations" :id="option.id" name="expectation-options" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-600" :value="option.id" />
          <label :for="option.id" class="ml-3 block text-sm font-medium leading-6 text-gray-900">
            {{ option.title }}
          </label>
        </div>
      </div>
      <div v-show="expectations.includes('other')" class="mt-4">
        <label for="expectation" class="sr-only">Vlastní popis očekávání</label>
        <div class="mt-2">
          <input type="text" name="expectation" id="expectation"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6" placeholder="Moje očekávání..." />
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script setup>
const expecationOptions = [
  { id: 'propojeni', title: 'Propojení se saunařskou komunitou' },
  { id: 'podpora', title: 'Podporu a sdílení informací' },
  { id: 'zabava', title: 'Zábavu a pot' },
  { id: 'other', title: 'Něco úplně jiného:' },
]

const expectations = ref([])
</script>
