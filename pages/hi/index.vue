<script setup>
import DownloadLinks from "~/components/home/downloadLinks.vue";
import Shorts from "~/components/home/shorts.vue";
import MainFooter from "~~/components/ui/MainFooter.vue";
import hiHeder from "~~/components/home/hi/hiHeder.vue";
import hiDescription from "~~/components/home/hi/hiDescription.vue";
import hiFaq from "~~/components/home/hi/hiFaq.vue";
useHead({
  title: "VidMate - एंड्राइड के लिए नंबर 1 वीडियो डाउनलोडिंग ऐप",
  htmlAttrs: {
    lang: "hi",
  },
  meta: [
    {
      name: "robots",
      content: `follow, index`,
    },
    {
      name: "description",
      content:
        "VidMate अभी एंड्राइड के लिए सबसे अच्छे वीडियो डाउनलोडिंग ऐप में से एक है जो यूट्यूब, फेसबुक, इंस्टाग्राम, टिकटोक, डैलीमोशन, Vimeo , Vine जैसे सोशल मीडिया प्लेटफॉर्म से आपके पसंदीदा वीडियो या संगीत को डाउनलोड करने की सुबिधा देता है।",
    },
  ],
  link: [
    { rel: "canonical", href: "https://www.vidmatevideos.in/hi" },
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
  <hiHeder />
  <main class="">
    <div class="lg:w-[75%] px-6 lg:px-0 m-auto text-center">
      <div class="my-10">
        <h1
          class="text-2xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-red-500 to-amber-600"
        >
          <span class="block text-4xl md:text-7xl">VidMate</span> बेस्ट HD
          वीडियो डाउनलोडर
        </h1>
        <div class="my-5 md:my-10">
          <DownloadLinks title="डाउनलोड" link="/hi/download" />
        </div>
      </div>
    </div>
    <Shorts title="शॉर्ट वीडियोस" />
    <hiDescription />
    <hiFaq />
  </main>
  <!-- footer -->
  <MainFooter />
</template>
