<template>
  <div class="bg-white py-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        <h2 class="inline sm:block">Chcete se k nám přidat?</h2>
        {{ ' ' }}
        <p class="inline sm:block">Napište nám.</p>
      </div>
      <form
        netlify
        name="Registrační formulář"
        method="post"
        action="/success"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        class="mt-10 max-w-md space-y-8"
      >
        <!-- Form fields -->
        <FormRadioRegistrar />
        <FormName />
        <FormTextareaComment />
        <FormCheckboxNewsletter />
        <!-- Signup -->
        <div class="flex gap-x-4">
          <label for="email-address" class="sr-only">E-mail</label>
          <input id="email-address" name="email" type="email" autocomplete="email" required="" class="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6" placeholder="Zadejte svůj e-mail" />
          <button type="submit" class="flex-none rounded-md bg-amber-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600">Zapsat se</button>
        </div>
        <p class="mt-4 text-sm leading-6 text-gray-900">Jak vaše data zpracováváme? Přečtěte si naše <a href="#" class="font-semibold text-amber-600 hover:text-amber-500">podmínky zpracování osobních údajů</a>.</p>
        <input type="hidden" name="form-name" value="Registrační formulář" />
        <p hidden class="sr-only  ">
          <label>Don’t fill this out: <input name="bot-field" /></label>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
