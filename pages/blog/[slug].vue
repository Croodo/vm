<script setup>
import MainHeader from "~~/components/ui/MainHeader.vue";
import MainFooter from "~~/components/ui/MainFooter.vue";
</script>
<template>
  <MainHeader />
  <div class="max-w-7xl px-6 lg:px-0 m-auto">
    <div class="max-w-6xl my-14">
      <ul
        class="font-medium text-base md:text-xl lg:text-lg flex text-red-400 gap-4 breadcumb relative mb-6"
      >
        <li>
          <nuxt-link :to="`/`"> Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/blog">Blog</nuxt-link>
        </li>
      </ul>
      <div class="grid grid-cols-3 gap-20">
        <div class="col-span-2 prose-lg">
          <ContentDoc />
        </div>
        <div>Related</div>
      </div>
    </div>
  </div>
  <MainFooter />
</template>
<style>
.breadcumb li:nth-child(1) {
  @apply list-none;
}
.breadcumb li {
  @apply list-disc list-inside;
}
</style>
