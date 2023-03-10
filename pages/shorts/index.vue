<script setup>
import InfiniteLoading from "v3-infinite-loading";
import "v3-infinite-loading/lib/style.css";
import shortLists from "~/components/shorts/shortLists.vue";
import MainHeader from "~~/components/ui/MainHeader.vue";
const uri = "https://www.vidmatevideos.in/api/yt/shorts/latest";
const { data: list } = await useFetch(uri);

let shorts = ref([]);
let page = 2;
const load = async ($state) => {
  console.log("loading...");

  try {
    const response = await fetch(
      "https://www.vidmatevideos.in/api/yt/shorts/latest?page=" + page
    );
    const json = await response.json();
    if (json.posts.length < 30) $state.complete();
    else {
      shorts.value.push(...json.posts);
      $state.loaded();
    }
    page++;
  } catch (error) {
    $state.error();
  }
};

const wHeight = ref();
useHead({
  title: "Shorts - Trending Short Videos",
  meta: [
    {
      name: "robots",
      content: `follow, index`,
    },
    {
      name: "description",
      content:
        "Discover trending short videos. Funny, Motivational, Tips & Tricks, Educational and more shorts",
    },
  ],
  link: [
    { rel: "canonical", href: "https://www.vidmatevideos.in/shorts" },
    {
      rel: "alternate",
      hreflang: "en",
      href: "https://www.vidmatevideos.in/shorts",
    },
    {
      rel: "alternate",
      hreflang: "hi",
      href: "https://www.vidmatevideos.in/hi/shorts",
    },
  ],
});
useSchemaOrg(
  defineBreadcrumb({
    itemListElement: [
      { name: "VidMate", item: "/" },
      { name: "Shorts", item: "/shorts" },
    ],
  })
);
</script>
<template>
  <MainHeader />
  <main class="relative bg-black">
    <div
      class="p-6 lg:w-[80%] m-auto grid gap-4 md:gap-7 lg:gap-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:p-12 md:h-auto"
    >
      <div
        v-for="(data, index) in list.posts"
        :key="index"
        class="flex flex-col"
      >
        <div class="">
          <NuxtLink :to="`/shorts/${data.seourl}`"
            ><nuxt-img
              width="400"
              height="720"
              :src="`/thumbnail/vi/${data.videoId}/maxres2.jpg`"
              :modifiers="{ fit: 'cover' }"
              class="md:rounded-lg overflow-hidden w-auto md:scale-100 rounded-xl aspect-[9/12] h-[70vh] lg:h-auto"
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
      <shortLists :list="shorts" />
      <InfiniteLoading @infinite="load" />
    </div>
  </main>
</template>
<style scoped>
html {
  background: black;
}
body {
  background: #222222;
}
</style>
