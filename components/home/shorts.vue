<script setup>
import shortsVideos from "./shortsVideos.vue";
const { title } = defineProps({
  title: ref({}),
});
</script>

<template>
  <div
    class="lg:w-[90%] m-auto bg-gradient-to-r from-red-500 to-purple-500 h-fit text-zinc-100 lg:rounded-[40px] lg:shadow-2xl"
    id="shorts"
  >
    <div class="lg:w-[90%] px-6 lg:px-0 m-auto py-8">
      <h2 class="text-lg font-bold pb-6">{{ title }}</h2>

      <shortsVideos></shortsVideos>
    </div>
  </div>
</template>
