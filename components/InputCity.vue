<template>
  <div>
    <label for="city" class="block font-medium leading-6 text-gray-900">Město <span
        class="text-red-600">*</span></label>
    <div class="mt-2">
      <input type="text" name="city" id="city"
        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
        autocomplete="city" required />
    </div>
  </div>
</template>
