<script setup>
const { title, link } = defineProps({
  title: ref({}),
  link: ref({}),
});
</script>
<template>
  <div class="flex justify-center gap-4 my-5">
    <NuxtLink :to="link"
      ><div
        class="
          text-zinc-100
          bg-zinc-900
          rounded-xl
          flex
          pl-4
          pr-6
          py-1
          items-center
          tracking-wide
        "
      >
        <Icon
          name="material-symbols:download-for-offline-rounded"
          size="28"
          class="mr-3"
        />
        <div class="flex flex-col">
          <span class="text-[10px]">18.2MB</span>
          <span class="-mt-1 font-semibold">{{ title }}</span>
        </div>
      </div></NuxtLink
    >
  </div>
</template>