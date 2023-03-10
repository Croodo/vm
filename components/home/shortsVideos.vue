<script setup>
const uri = "/api/yt/shorts/home";
const { pending, data: list } = useLazyFetch(uri);
</script>
<template>
  <div v-if="pending">Loading ...</div>
  <div v-else class="relative">
    <div class="flex overflow-x-scroll pb-5 lg:-mx-[5.5%] -mx-6 px-6">
      <div
        class="w-screen flex flex-nowrap md:ml-[2.5%] snap-mandatory snap-x gap-4 pt-2"
      >
        <div
          class="inline-block snap-center ring-2 ring-opacity-25 ring-black bg-white bg-opacity-30 p-1 rounded-xl"
          v-for="(data, index) in list.posts"
          :key="index"
        >
          <div
            class="w-52 h-80 max-w-xs overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <NuxtLink :to="`/shorts/${data.seourl}`"
              ><img
                width="400"
                height="720"
                preload
                :src="`https://www.vidmatevideos.in/_ipx/f_webp,q_5,s_400x720/thumbnail/vi/${data.videoId}/maxres2.jpg`"
                :alt="data.title + 'Shorts Video'"
                class="md:rounded-lg overflow-hidden w-auto md:scale-100 rounded-xl"
            /></NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
