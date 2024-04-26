<template>
  <div class="relative">
    <form netlify name="Registrační formulář" method="post" action="/success" data-netlify="true"
      data-netlify-honeypot="bot-field" class="mt-10 grid md:grid-cols-2 gap-y-8 gap-x-16">
      <div class="space-y-8">
        <div class="max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <h2 class="inline sm:block">Rozsviť s náma SANN</h2>
        </div>
        <FormPersonalDetails />
      </div>
      <div class="space-y-8">
        <FormRadioRegistrar />
        <FormCheckboxExpectations />
        <FormCheckboxNewsletter />
        <!-- Signup -->
        <div class="flex justify-between items-center gap-4">
          <div>
            <p class="mt-4 leading-6 text-gray-900">Jak vaše data zpracováváme? Přečtěte si naše <a href="#"
                class="text-amber-600 hover:text-amber-500">podmínky zpracování osobních údajů</a>.</p>
            <input type="hidden" name="form-name" value="Registrační formulář" />
            <p hidden class="sr-only  ">
              <label>Don’t fill this out: <input name="bot-field" /></label>
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
    <img class="absolute hidden lg:block right-4 lg:top-[160px] w-52 h-auto pointer-events-none" src="/images/eyes.webp" alt="" aria-hidden="true" />
  </div>
</template>

<script setup lang="ts"></script>
