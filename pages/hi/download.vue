<script setup>
import hiMainHeader from "~~/components/ui/hi/hiMainHeader.vue";
import MainFooter from "~~/components/ui/MainFooter.vue";
components: {
  hiMainHeader, MainFooter;
}
// onMounted(() => {
//   function download() {
//     document.getElementById("dl").click();
//   }
//   download();
// });

useHead({
  title: "विडमेट - डाउनलोड",
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
        "एंड्राइड के लिए APK का लेटेस्ट वर्जन फ्री में डाउनलोड करें। विडमेट को इनस्टॉल करने के लिए आपको विडमेट APK का लेटेस्ट वर्जन डाउनलोड करना होगा क्योंकि इसे सीधे गूगल प्लेस्टोर  से इनस्टॉल नहीं किया जा सकता है।",
    },
  ],
  link: [
    { rel: "canonical", href: "https://www.vidmatevideos.in/hi/download" },
    {
      rel: "alternate",
      hreflang: "en",
      href: "https://www.vidmatevideos.in/download",
    },
    {
      rel: "alternate",
      hreflang: "hi",
      href: "https://www.vidmatevideos.in/hi/download",
    },
  ],
});
useSchemaOrg(
  defineBreadcrumb({
    itemListElement: [
      { name: "विडमेट", item: "/" },
      { name: "डाउनलोड", item: "/download" },
    ],
  })
);
</script>
<template>
  <div class="bg-rose-50 bg-opacity-60">
    <hiMainHeader />

    <main class="lg:w-[90%] lg:px-0 m-auto my- pb-20">
      <div class="px-6 py-10 max-w-2xl m-auto flex flex-col items-center">
        <Icon
          name="line-md:downloading-loop"
          size="120"
          class="font-black text-zinc-700"
        />
        <h1 class="my-9 text-2xl lg:text-5xl font-black font-serif">
          विडमेट डाउनलोड हो रहा
        </h1>
        <p class="prose-sm lg:prose-xl text-center">
          अगर डाउनलोड अपने आप शुरू नहीं हुआ तो शुरू करने के लिए
          <a
            id="dl"
            href="https://vid.vidmatevideos.in/vidmate"
            class="text-xl font-semibold text-red-500"
            >यहां क्लिक करें</a
          >
        </p>
        <iframe
          class="hidden"
          src="https://vid.vidmatevideos.in/vidmate"
        ></iframe>
      </div>
      <div
        class="
          bg-white
          lg:border
          border-zinc-200
          lg:rounded-2xl lg:p-20
          prose-sm
          md:prose-xl
          px-6
          py-6
        "
      >
        <span
          class="
            absolute
            top-44
            left-0
            pointer-events-none
            opacity-10
            bg-gradient-to-r
            from-amber-400
            via-red-400
            rounded-full
            to-red-600
            h-[100vw]
            w-[100vw]
            blur-[20vw]
            md:h-[40vw] md:w-[40vw] md:blur-[8vw]
            lg:h-[50vh] lg:w-[50vh] lg:right-[-10vw] lg:blur-[10vh]
            z-[1]
          "
        ></span>
        <h2 class="font-black">कैसे इनस्टॉल करें</h2>
        <p>1. सबसे पहले "विडमेट" APK फ़ाइल डाउनलोड करें।</p>
        <p>
          2. एक बार डाउनलोड पूरा हो जाने के बाद, विडमेट इंस्टॉल करने के लिए उस
          पर क्लिक करें।
        </p>
        <nuxt-img
          src="/images/screen/click-on-install.JPEG"
          alt="How To Install"
          height="400"
          sizes="sm:100vw md:50vw lg:400px"
          format="webp"
          quality="50"
          preload
        />
        <p>
          3. इसके बाद आपको अपने एंड्राइड फ़ोन में "Unknown Sources" से ऐप्स
          इनस्टॉल करने की परमिशन देना होग।
        </p>
        <p>4. इसके बाद फिर से डाउनलोडेड ऐप पर क्लिक करें।</p>
        <div class="grid grid-cols-2">
          <nuxt-img
            src="/images/screen/click-on-settings.JPEG"
            alt=""
            height="400"
            sizes="sm:100vw md:50vw lg:400px"
            format="webp"
            quality="50"
            preload
          />
          <nuxt-img
            src="/images/screen/allow-unknown-sources.JPEG"
            alt="enable unknows sources permission"
            height="400"
            sizes="sm:100vw md:50vw lg:400px"
            format="webp"
            quality="50"
            preload
          />
        </div>
        <p>
          5. इसके बाद फिर से डौन्लोडेड ऐप पर क्लिक करें और फिर इनस्टॉल बटन को
          दबाये।
        </p>
        <p>
          6. विडमेट के सफलतापूर्वक इंस्टाल होने के बाद "ओपन" बटन पर क्लिक करें।
        </p>
      </div>
    </main>
    <main-footer></main-footer>
  </div>
</template>