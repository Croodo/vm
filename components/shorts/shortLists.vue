<script setup>
const { list } = defineProps({
  list: ref({}),
});
</script>
<template>
  <div v-for="(data, index) in list" :key="index" class="flex flex-col">
    <div class="">
      <NuxtLink :to="`/shorts/${data.seourl}`"
        ><nuxt-img
          width="400"
          height="720"
          :src="`/thumbnail/vi/${data.videoId}/maxres2.jpg`"
          :modifiers="{ fit: 'cover' }"
          class="
            md:rounded-lg
            overflow-hidden
            w-auto
            md:scale-100
            rounded-xl
            aspect-[9/12]
            h-[70vh]
            lg:h-auto
          "
      /></NuxtLink>
      <div class="w-full py-5 z-50 text-zinc-200">
        <div class="flex items-center mt-2">
          <div
            class="h-8 w-8 rounded-full overflow-hidden ring-1 ring-slate-800"
          >
            <nuxt-img
              :src="
                '/authorpic' +
                data.author.thumbnails[0].url.replace(
                  'https://yt3.ggpht.com',
                  ''
                )
              "
            />
          </div>
          <h3 class="font-medium ml-4">{{ data.author.name }}</h3>
        </div>
        <h2 class="text-xs mt-3 font-extralight">{{ data.title }}</h2>
      </div>
    </div>
  </div>
</template>