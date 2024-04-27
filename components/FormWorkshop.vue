<template>
  <div class="relative">
    <form netlify name="Workshop" method="post" action="/success" data-netlify="true"
      data-netlify-honeypot="bot-field" class="grid md:grid-cols-5 gap-y-8 gap-x-16">
      <div class="md:col-span-3 space-y-8">
        <div class="max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <h2 class="inline sm:block">Přihlaš se</h2>
        </div>
        <div class="prose prose-lg">
          <p>Vyplň formulář, nebo nám napiš na <a href="mailto:ahoj.sann@gmail.com">ahoj.sann@gmail.com</a>.</p>
        </div>
        <div>
          <label for="fullNameWorkshop" class="block font-medium leading-6 text-gray-900">Celé jméno <span class="text-red-600">*</span></label>
          <div class="mt-2">
            <input type="text" name="full_name_workshop" id="fullNameWorkshop"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
              placeholder="" autocomplete="name" required />
          </div>
        </div>
        <div>
          <label for="emailWorkshop" class="block font-medium leading-6 text-gray-900">E-mail <span class="text-red-600">*</span></label>
          <div class="mt-2">
            <input id="emailWorkshop" name="email_workshop" type="email" autocomplete="email" required
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6" placeholder="" />
          </div>
        </div>
        <!-- Signup -->
        <div class="flex justify-between items-center gap-4">
          <div>
            <p class="mt-4 leading-6 text-gray-900">Odesláním formuláře souhlasíte se <NuxtLink to="/ochrana-osobnich-udaju"
                class="text-amber-600 hover:text-amber-500 underline">zpracováním osobních údajů</NuxtLink>.</p>
            <input type="hidden" name="form-name" value="Registrační formulář" />
            <p hidden class="sr-only  ">
              <label>Don't fill this out: <input name="bot-field" /></label>
            </p>
          </div>
          <div class="shrink-0">
            <button type="submit" class="flex-none btn btn-primary">
              Zapsat se
            </button>
          </div>
        </div>
      </div>
    </form>
    <img class="absolute hidden md:block right-4 lg:top-[160px] w-52 h-auto pointer-events-none" src="/images/eyes.webp" alt="" aria-hidden="true" />
  </div>
</template>
