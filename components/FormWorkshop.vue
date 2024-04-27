<template>
  <div class="relative">
    <form netlify name="Workshop formulář" method="post" action="/success" data-netlify="true"
      data-netlify-honeypot="bot-field" class="grid md:grid-cols-5 gap-y-8 gap-x-16">
      <div class="md:col-span-3 space-y-8">
        <div class="max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <h2 class="inline sm:block">Přihlaš se</h2>
        </div>
        <div class="prose prose-lg">
          <p>Vyplň formulář, nebo nám napiš na <a href="mailto:ahoj.sann@gmail.com">ahoj.sann@gmail.com</a>.</p>
        </div>
        <InputFullName />
        <InputEmail />
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
