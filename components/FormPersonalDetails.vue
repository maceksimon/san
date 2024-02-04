<template>
  <div>
    <label for="fullName" class="block text-sm font-medium leading-6 text-gray-900">Celé jméno</label>
    <div class="mt-2">
      <input type="text" name="full_name" id="fullName"
        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
        placeholder="" autocomplete="name" required />
    </div>
  </div>
  <div>
    <label for="city" class="block text-sm font-medium leading-6 text-gray-900">Město</label>
    <div class="mt-2">
      <input type="text" name="city" id="city"
        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6" autocomplete="city" />
    </div>
  </div>
  <div>
    <label for="email-address" class="block text-sm font-medium leading-6 text-gray-900">E-mail</label>
    <div class="mt-2">
      <input id="email-address" name="email" type="email" autocomplete="email" required
        class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
        placeholder="" />
    </div>
  </div>
</template>
