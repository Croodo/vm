<script setup></script>
<template>
  <header class="h-20 flex items-center">
    <div class="w-[90%] m-auto flex items-center justify-between">
      <ul
        class="flex gap-4 md:gap-6 uppercase tracking-wide items-center text-sm"
      >
        <li
          class="bg-gradient-to-r from-amber-500 via-red-500 to-pink-500 text-white rounded-full px-5 py-1.5"
        >
          <NuxtLink to="/hi/shorts" class="block">शॉर्ट्स</NuxtLink>
        </li>
        <li><a href="#about">अबाउट</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>
      <div class="flex items-center font-bold gap-3">
        <NuxtLink
          to="/"
          title="VidMate"
          class="bg-zinc-100 rounded-md px-2 py-1 hover:bg-zinc-900 hover:text-zinc-100"
          >English</NuxtLink
        >
        <NuxtLink to="/hi" title="VidMate"
          ><nuxt-img
            src="/images/vidmate-new-icon.png"
            alt="विडमेट"
            class="w-8 h-8"
        /></NuxtLink>
      </div>
    </div>
  </header>
</template>
