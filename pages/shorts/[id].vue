<script setup>
import moment from "moment";
import { useWindowSize } from "vue-window-size";
import shareModal from "~/components/shorts/shareModal.vue";
import nextList from "~/components/shorts/nextList.vue";
import NList from "~~/components/shorts/nList.vue";
definePageMeta({
  layout: false,
});
const route = useRoute();
const { id } = useRoute().params;
const uri = "https://www.vidmatevideos.in/api/yt/mongo/" + id;
const { data: video } = await useFetch(uri);

const { width, height } = useWindowSize();
const isModal = useState("isModal", () => false);
watch(route, (to, from) => {
  isModal.value = false;
});

const vidId =
  "https://vid.vidmatevideos.in/stream/" + video.value.details.videoId;
const vidThumb =
  "/_ipx/s_400x720/thumbnail/vi/" +
  video.value.details.videoId +
  "/maxres2.jpg";
const Authorpic = video.value.details.author.thumbnails[2].url.replace(
  "https://yt3.ggpht.com",
  ""
);
let minutes = 0;
let seconds = 0;
let videoDuration = parseInt(video.value.details.lengthSeconds);
minutes = Math.floor((videoDuration % 3600) / 60);
seconds = Math.floor((videoDuration % 3600) % 60);
const duration = `T${minutes}M${seconds}S`;
let isPlaying = useState("isPlaying", () => false);
const myvideo = useState("myvideo", () => null);
let FirstPlay = ref(false);
const openShare = ref(false);
function playPause() {
  myvideo.value.paused ? myvideo.value.play() : myvideo.value.pause();
  if (!isPlaying.value) {
    isPlaying.value = true;
  } else {
    isPlaying.value = false;
  }
}
onMounted(() => {
  let options = {
    rootMargin: "0px",
    threshold: [0.45, 0.55],
  };

  let handlePlay = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.play();
        isPlaying.value = true;
      } else {
        entry.target.pause();
        isPlaying.value = false;
      }
    });
  };

  let observer = new IntersectionObserver(handlePlay, options);

  observer.observe(myvideo.value);
});

const muted = useState("muted", () => true);

const displayDiv = useState("displayDiv", () => !isPlaying.value);

const hideDiv = () => {
  displayDiv.value = false;
  setTimeout(() => {
    displayDiv.value = true;
  }, 700);
};
const toggleMute = () => {
  myvideo.value;
  muted.value = !muted.value;
};

useHead({
  title: `${video.value.details.title} by ${video.value.details.author.name} - VidMate`,
  meta: [
    {
      name: "robots",
      content: `follow, index`,
    },
    {
      name: "description",
      content: `${video.value.details.title} ${video.value.details.category} - Short Video by ${video.value.details.author.name}`,
    },
    { property: "og:type", content: "video" },
    {
      property: "og:video",
      content: vidId,
    },
    {
      property: "og:image",
      content: vidThumb,
    },
    { property: "og:video:type", content: "video/mp4" },
    { property: "og:video:secure_url", content: vidId },
    {
      property: "og:video:width",
      content: video.value.details.format.width,
    },
    {
      property: "og:video:height",
      content: video.value.details.format.height,
    },
  ],
  link: [
    { rel: "canonical", href: "https://www.vidmatevideos.in/shorts/" + id },
  ],
});
useSchemaOrg(
  defineBreadcrumb({
    itemListElement: [
      { name: "VidMate", item: "/" },
      { name: "Shorts", item: "/shorts" },
      {
        name: `${video.value.details.title} | VidMate`,
        item: `/shorts/${video.value.details.seourl}`,
      },
    ],
  })
);
useSchemaOrg(
  defineVideo({
    name: `${video.value.details.title} by ${video.value.details.author.name}`,
    uploadDate: video.value.details.date,
    duration: duration,
    thumbnailUrl: vidThumb,
    description: `${video.value.details.title} ${video.value.details.category} - Short Video by ${video.value.details.author.name}`,
    width: video.value.details.format.width,
    height: video.value.details.format.height,
    contentUrl: vidId,
    embedUrl: vidId,
    creator: {
      "@type": "Person",
      name: video.value.details.author.name,
    },
    isFamilyFriendly: true,
    interactionStatistic: [
      {
        "@type": "InteractionCounter",
        interactionType: { "@type": "http://schema.org/WatchAction" },
        userInteractionCount: video.value.details.viewCount,
      },
    ],
  })
);
const windowHeight = height.value + "px";
const mwindowHeight = ref(windowHeight - 160);
const next = ref(null);
</script>
<template>
  <div class="next snap-y snap-mandatory h-screen overflow-scroll bg-black">
    <div
      class="flex justify-center items-center md:h-screen lg:-mt-0 post snap-start"
    >
      <div class="md:rounded-xl overflow-hidden relative shortsHeight">
        <div
          class="absolute z-30 top-2 left-1 text-gray-100 flex justify-center items-center"
        >
          <NuxtLink
            to="/shorts"
            class="relative flex items-center font-extrabold tracking-wide font-sans text-xl"
            :class="{ hidden: isPlaying, block: !isPlaying }"
            ><Icon name="material-symbols:chevron-left" size="40"></Icon>
            Shorts</NuxtLink
          >
          <NuxtLink
            to="/shorts"
            class="relative"
            :class="{ block: isPlaying, hidden: !isPlaying }"
            ><Icon name="material-symbols:chevron-left" size="40"></Icon
          ></NuxtLink>
        </div>
        <div
          class="absolute z-30 top-3 right-0 text-gray-100 bg-black bg-opacity-30 px-2 py-1.5 rounded-l-2xl uppercase text-sm items-center flex justify-center"
          @click="toggleMute"
        >
          <span class="relative" :class="{ hidden: muted, block: !muted }"
            ><Icon name="octicon:unmute-16" size="20"></Icon
          ></span>
          <span class="relative flex" :class="{ block: muted, hidden: !muted }">
            Tap to unmute
            <Icon name="bx:volume-mute" size="20" class="ml-3"></Icon>
          </span>
        </div>

        <div
          class="z-50 absolute m-auto left-0 right-0 top-0 bottom-0 text-gray-100 flex justify-center items-center"
          :class="{ hidden: displayDiv }"
        >
          <span
            class="relative translate-x-0 h-12 w-12 rounded-full bg-black bg-opacity-40 flex justify-center items-center animate-ping"
            :class="{ block: isPlaying, hidden: !isPlaying }"
            ><Icon name="material-symbols:play-arrow" size="40"></Icon
          ></span>
          <span
            class="relative translate-x-0 h-12 w-12 rounded-full bg-black bg-opacity-40 flex justify-center items-center animate-ping"
            :class="{ hidden: isPlaying, block: !isPlaying }"
            ><Icon name="material-symbols:pause-outline" size="40"></Icon
          ></span>
        </div>

        <video
          id="vid"
          ref="myvideo"
          :poster="vidThumb"
          class="w-screen lg:w-[401px] md:w-auto overflow-hidden md:h-[80vh] object-cover shortsHeight relative z-10"
          @click="
            playPause();
            hideDiv();
          "
          :muted="muted"
          playsinline
          autoplay
          loop
          disableremoteplayback
          preload="metadata"
        >
          <source :src="vidId" type="video/mp4" />
        </video>
        <!-- name detail -->
        <div
          class="absolute bottom-0 left-0 right-0 p-5 text-slate-100 z-30 bg-gradient-to-b from-transparent to-black bg-opacity-30"
        >
          <h1 class="text-sm mr-6">{{ video.details.title }}</h1>
          <div class="flex justify-between items-center">
            <div class="flex items-center mt-2">
              <div
                class="h-8 w-8 rounded-full overflow-hidden ring-1 ring-slate-800"
              >
                <nuxt-img
                  :src="`/authorpic/${Authorpic}`"
                  :alt="video.details.author.name"
                  width="88"
                  height="88"
                />
              </div>
              <h2 class="font-medium ml-2">{{ video.details.author.name }}</h2>
            </div>
            <span
              class="flex flex-col text-xs font-semibold tracking-wider items-center gap-1"
              @click="isModal = !isModal"
              ><Icon name="icon-park-solid:share-two" size="24" /> Share</span
            >
          </div>
        </div>
        <!-- name detail -->

        <shareModal
          v-show="isModal"
          :link="`https://www.vidmatevideos.in/shorts/${video.details.seourl}`"
        />
      </div>

      <!-- container -->
    </div>
    <ClientOnly><nextList /></ClientOnly>
  </div>
</template>
<style>
@media only screen and (max-width: 480px) {
  .shortsHeight {
    min-height: v-bind(windowHeight);
    max-height: v-bind(windowHeight);
  }
}

.page-load-status {
  display: none; /* hidden by default */
  padding-top: 20px;
  border-top: 1px solid #ddd;
  text-align: center;
  color: #777;
}

*::-webkit-media-controls-start-playback-button {
  display: none !important;
  -webkit-appearance: none;
}

*::-webkit-media-controls {
  display: none;
}

/* Could Use thise as well for Individual Controls */
*::-webkit-media-controls-play-button {
  display: none !important;
  -webkit-appearance: none;
}

*::-webkit-media-controls-volume-slider {
  display: none !important;
  -webkit-appearance: none;
}

*::-webkit-media-controls-mute-button {
  display: none !important;
  -webkit-appearance: none;
}

*::-webkit-media-controls-timeline {
  display: none !important;
  -webkit-appearance: none;
}

*::-webkit-media-controls-current-time-display {
  display: none !important;
  -webkit-appearance: none;
}

.fade-enter-active {
  animation: fadein 2s;
}

.fade-leave-active {
  animation: fadeout 2s;
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeout {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
