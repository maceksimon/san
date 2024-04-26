<template>
  <div class="space-y-8">
    <div class="max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl my-10">
      <h2 class="inline sm:block">Přijď na SANN: Jak si postavit saunu</h2>
    </div>
    <div class="grid md:grid-cols-5 gap-8 sm:gap-12 md:gap-16">
      <div class="md:col-span-3">
        <div class="relative bg-teal-400 rounded-3xl p-4 py-6 sm:px-6 lg:py-8 lg:px-8">
          <div class="font-bold sm:text-lg space-y-2">
            <div class="flex flex-wrap gap-2">
              <dt>Termín:</dt><dd>18. - 21.&nbsp;července</dd>
            </div>
            <div class="flex flex-wrap gap-2">
              <dt>Lokalita:</dt><dd>louka a loděnice NUUK, Hradec Králové</dd>
            </div>
            <div class="flex flex-wrap gap-2">
              <dt>Cena:</dt><dd>12.500&nbsp;Kč členové sann / 14.000&nbsp;Kč klasik</dd>
            </div>
            <div class="flex flex-wrap gap-2">
              <dt>Kapacita:</dt><dd>10&nbsp;lidí</dd>
            </div>
            <dt>Průvodci:</dt>
              <dd class="font-normal">
                <ul class="pl-4 sm:pl-6 space-y-2">
                  <li><b>Marianna Maczova</b> - architektka, Woven, účastnice WS stavby sauny ve Finsku</li>
                  <li><b>Branislav Jurčák</b> - inženýr všeho s vůní dřeva a realizátor saunových konstrukcí</li>
                  <li><b>Peter Jančár</b> - spoluzakladatel SSC, CEO Woodmaster SK a konzultant saunových koster</li>
                  <li><b>Aneta Kohoutová a Natálie Kratochvíle</b> - provozovatelky sauny NUUK a zažehávačky saunové asociace nezávislých nadšenců SANN</li>
                </ul>
              </dd>
          </div>
          <NuxtImg src="/images/prosteradlo_transparent.webp" class="absolute top-4 -right-20 w-48" />
        </div>
      </div>
      <div class="flex justify-center md:col-span-2">
        <div class="text-center">
          <NuxtImg src="/images/sauna_transparent.webp" class="max-h-64 lg:max-h-96" />
          <NuxtLink to="workshop" class="btn btn-primary min-w-24 mt-4">
            Víc
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
