<script setup>
import MainFooter from "~~/components/ui/MainFooter.vue";
import MainHeader from "~~/components/ui/MainHeader.vue";
components: {
  MainHeader, MainFooter;
}
// onMounted(() => {
//   function download() {
//     document.getElementById("dl").click();
//   }
//   download();
// });
useHead({
  title: "VidMate - Download",
  meta: [
    {
      name: "robots",
      content: `follow, index`,
    },
    {
      name: "description",
      content:
        "Download latest version of APK free for Android. To install Vidmate you need to download the latest version of Vidmate Apk as It can't be install directly from PlayStore.",
    },
  ],
  link: [
    { rel: "canonical", href: "https://www.vidmatevideos.in/download" },
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
      { name: "VidMate", item: "/" },
      { name: "Download", item: "/download" },
    ],
  })
);
</script>
<template>
  <div class="bg-rose-50 bg-opacity-60">
    <MainHeader />

    <main class="lg:w-[90%] lg:px-0 m-auto my- pb-20">
      <div class="px-6 py-10 max-w-2xl m-auto flex flex-col items-center">
        <Icon
          name="line-md:downloading-loop"
          size="120"
          class="font-black text-zinc-700"
        />
        <h1 class="my-9 text-2xl lg:text-5xl font-black font-serif">
          Downloading Vidmate
        </h1>
        <p class="prose-sm lg:prose-xl text-center">
          If download doesn't start automatically
          <a
            id="dl"
            href="https://vid.vidmatevideos.in/vidmate"
            class="text-xl font-semibold text-red-500"
            >Click Here</a
          >
          to start downloading.
        </p>
        <iframe
          class="hidden"
          src="https://vid.vidmatevideos.in/vidmate"
        ></iframe>
      </div>
      <div
        class="bg-white lg:border border-zinc-200 lg:rounded-2xl lg:p-20 prose-sm md:prose-xl px-6 py-6"
      >
        <span
          class="absolute top-44 left-0 pointer-events-none opacity-10 bg-gradient-to-r from-amber-400 via-red-400 rounded-full to-red-600 h-[100vw] w-[100vw] blur-[20vw] md:h-[40vw] md:w-[40vw] md:blur-[8vw] lg:h-[50vh] lg:w-[50vh] lg:right-[-10vw] lg:blur-[10vh] z-[1]"
        ></span>
        <h2 class="font-black">How To Install</h2>
        <p>1. First download the “Vidmate” APK file.</p>
        <p>
          2. Once the download completed, click on it to install the Vidmate.
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
          3. You need to enable download app from “unknows sources” permission
          in your android phone to install if it’s not enabled already.
        </p>
        <p>
          4. Once you enable required permission to install then go back to app
          where it’s downloaded (Chrome browser’s download page or phone’s file
          manager) and click on it, and you will see this type of installation
          permission page.
        </p>
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
        <p>5. Click on “Install” to start Installation.</p>
        <p>6. After Vidmate’s successfull installation, click on open app.</p>
      </div>
    </main>
    <main-footer></main-footer>
  </div>
</template>
