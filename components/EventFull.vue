<template>
  <div>
    <div class="max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl my-10">
      <h1 class="inline sm:block">Víkendový workshop: Jak postavit saunu</h1>
    </div>

    <div class="grid md:grid-cols-5 gap-8 sm:gap-12 md:gap-16">
      <div class="md:col-span-3">
        <div class="relative bg-teal-400 rounded-3xl p-4 py-6 sm:px-6 lg:py-8 lg:px-8">
          <div class="relative font-bold sm:text-lg space-y-2 z-10">
            <div class="flex flex-wrap gap-2">
              <dt>Termín:</dt>
              <dd>18. - 21.&nbsp;července</dd>
            </div>
            <div class="flex flex-wrap gap-2">
              <dt>Lokalita:</dt>
              <dd>louka a loděnice NUUK, Hradec Králové</dd>
            </div>
            <div class="flex flex-wrap gap-2">
              <dt>Cena:</dt>
              <dd>12.500&nbsp;Kč členové sann / 14.000&nbsp;Kč klasik</dd>
            </div>
            <div class="flex flex-wrap gap-2">
              <dt>Kapacita:</dt>
              <dd>10&nbsp;lidí</dd>
            </div>
            <dt>Průvodci:</dt>
            <dd class="font-normal">
              <ul class="pl-4 sm:pl-6 space-y-2">
                <li><b>Marianna Maczova</b> - architektka, Woven, účastnice WS stavby sauny ve Finsku</li>
                <li><b>Branislav Jurčák</b> - inženýr všeho s vůní dřeva a realizátor saunových konstrukcí</li>
                <li><b>Peter Jančár</b> - spoluzakladatel SSC, CEO Woodmaster SK a konzultant saunových koster</li>
                <li><b>Aneta Kohoutová a Natálie Kratochvíle</b> - provozovatelky sauny NUUK a zažehávačky saunové
                  asociace nezávislých nadšenců SANN</li>
              </ul>
            </dd>
          </div>
          <NuxtImg src="/images/prosteradlo_transparent.webp" class="absolute -top-8 right-0 max-w-48 max-h-48" />
        </div>
      </div>
      <div class="flex justify-center md:col-span-2">
        <div class="text-center">
          <NuxtImg src="/images/tent-moon.webp" class="max-h-64 lg:max-h-72" />
        </div>
      </div>
    </div>

    <div class="my-10 sm:my-12 lg:my-16">
      <div class="max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl my-10">
        <h2 class="inline sm:block">
          Praktikális
        </h2>
      </div>
      <p class="text-lg max-w-4xl">
        V ceně je saunovačka, jídlo (snídaně, svačinky, teplý oběd a ohňová večeře), ubytování je na louce ve stanech se zázemím v maringotkách či v přilehlé loděnici. Na místě je suchý záchod a pitná voda.
      </p>
    </div>

    <div class="my-10 sm:my-12 lg:my-16">
      <FormWorkshop />
    </div>
  </div>
</template>
