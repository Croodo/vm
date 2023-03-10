<script setup>
const route = useRoute();
const path = route.fullPath;
</script>
<template>
  <header class="h-20 flex items-center">
    <div class="w-[90%] m-auto flex items-center justify-between">
      <ul
        class="flex gap-4 md:gap-6 uppercase tracking-wide items-center text-sm"
      >
        <li class="bg-zinc-900 text-white rounded-full px-5 py-1.5">
          <NuxtLink to="/" title="VidMate">Home</NuxtLink>
        </li>
        <li><NuxtLink to="/shorts">Shorts</NuxtLink></li>
        <li><NuxtLink to="/download">Download</NuxtLink></li>
      </ul>
      <div class="flex items-center font-bold gap-3">
        <NuxtLink
          :to="`/hi${path}`"
          title="विडमेट"
          class="bg-zinc-100 rounded-md px-2 py-1 hover:bg-zinc-900 hover:text-zinc-100"
          >Hindi</NuxtLink
        >
        <NuxtLink to="/" title="VidMate"
          ><img
            src="/images/vidmate-new-icon.png"
            alt="VidMate"
            class="w-8 h-8"
        /></NuxtLink>
      </div>
    </div>
  </header>
</template>
