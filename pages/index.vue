<script setup>
import DownloadLinks from "~/components/home/downloadLinks.vue";
import Shorts from "~/components/home/shorts.vue";
import Description from "~/components/home/description.vue";
import Faq from "~/components/home/faq.vue";
import Header from "~/components/home/header.vue";
import MainFooter from "~~/components/ui/MainFooter.vue";
useHead({
  title: "VidMate - Best Video Downloading App for Android",
  meta: [
    {
      name: "robots",
      content: `follow, index`,
    },
    {
      name: "description",
      content:
        "Vidmate is one of the best video downloading app for Android right now that allows downloading your favourite video or music from YouTube and social media platforms like Facebook, Instagram, TikTok, Dailymotion, Vimeo, Vine, etc.",
    },
    { property: "og:site_name", content: "VidMate" },
    {
      name: "keywords",
      content: "vidmate, vidmate app, vidmate download, vidmate apk",
    },
  ],
  link: [
    { rel: "canonical", href: "https://www.vidmatevideos.in" },
    { rel: "alternate", hreflang: "en", href: "https://www.vidmatevideos.in" },
    {
      rel: "alternate",
      hreflang: "hi",
      href: "https://www.vidmatevideos.in/hi",
    },
  ],
});
</script>
<template>
  <Header />
  <main class="">
    <div class="lg:w-[75%] px-6 lg:px-0 m-auto text-center">
      <div class="my-10">
        <h1
          class="text-2xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-red-500 to-amber-600"
        >
          <span class="block text-4xl md:text-7xl">VidMate</span> Best HD Video
          Downloader
        </h1>
        <div class="my-5 md:my-10">
          <DownloadLinks title="Download" link="/download" />
        </div>
      </div>
    </div>
    <!-- <Shorts title="Short Videos" /> -->
    <Description />
    <Faq />
  </main>
  <!-- footer -->
  <MainFooter />
</template>
