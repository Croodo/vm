<script setup>
import InfiniteLoading from "v3-infinite-loading";
import "v3-infinite-loading/lib/style.css";
import shareModal from "~/components/shorts/shareModal.vue";
import "lazysizes";
const route = useRoute();
// const { data: list } = await useFetch("/api/yt/shorts/related");
// // const { list } = await useAsyncData("list", () =>
// //   $fetch("/api/yt/shorts/related")
// // );
// const { pending, data: list } = useLazyAsyncData("list", () =>
//   $fetch("/api/yt/shorts/related")
// );
const myvideo = ref(null);

const muted = useState("muted", () => false);
let nextPlaying = ref([]);
const displayDiv = useState("displayDiv", () => false);
const isModal = useState("isModal", () => false);
watch(route, (to, from) => {
  isModal.value = false;
});
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

function playPause(index) {
  let vidElm = myvideo.value[index];
  vidElm.paused ? vidElm.play() : vidElm.pause();
  if (!nextPlaying.value[index]) {
    nextPlaying.value[index] = true;
  } else {
    nextPlaying.value[index] = false;
  }
}
const list = ref([]);
let page = 2;
const load = async ($state) => {
  console.log("loading...");

  try {
    const response = await fetch("/api/yt/shorts/related");
    const json = await response.json();
    if (json.posts.length < 10) $state.complete();
    else {
      list.value.posts.push(...json.posts);
      $state.loaded();
    }
    page++;
  } catch (error) {
    $state.error();
  }
};
function obser() {
  let options = {
    rootMargin: "0px",
    threshold: [0.4, 0.55],
  };

  let handlePlay = (entries, observer) => {
    entries.forEach((video, i) => {
      const currentIndex = myvideo.value.indexOf(video.target);

      if (video.isIntersecting) {
        for (var source in video.target.children) {
          var videoSource = video.target.children[source];
          if (
            typeof videoSource.tagName === "string" &&
            videoSource.tagName === "SOURCE"
          ) {
            videoSource.src = videoSource.dataset.src;
          }
        }
        video.target.load();
        video.target.classList.remove("lazy");
        setTimeout(function () {
          var playPromise = video.target.play();

          if (playPromise !== undefined) {
            playPromise
              .then((_) => {
                // Automatic playback started!
                // Show playing UI.
              })
              .catch((error) => {
                // Auto-play was prevented
                // Show paused UI.
              });
          }
        }, 0);

        // video.target.play();
        nextPlaying.value[currentIndex] = true;
      } else {
        video.target.pause();
        nextPlaying.value[currentIndex] = false;
      }
    });
  };

  let observer = new IntersectionObserver(handlePlay, options);
  myvideo.value.forEach((video) => {
    nextPlaying.value.push(!video.paused);
    observer.observe(video);
  });
}
onMounted(async () => {
  $fetch(`/api/yt/shorts/related`, {
    method: "GET",
  })
    .then((response) => {
      list.value = response;
    })
    .then(() => {
      obser();
    });
});
</script>
<template>
  <div
    class="
      flex
      justify-center
      items-center
      md:h-screen
      lg:-mt-0
      post
      snap-start
    "
    v-for="(video, index) in list.posts"
    :key="index"
  >
    <div class="md:rounded-xl overflow-hidden relative shortsHeight">
      <div
        class="
          absolute
          z-50
          top-2
          left-2
          text-gray-100
          h-9
          w-9
          flex
          justify-center
          items-center
        "
      >
        <span
          class="relative"
          :class="{
            hidden: nextPlaying[index],
            block: !nextPlaying[index],
          }"
          ><Icon name="material-symbols:play-arrow" size="20"></Icon
        ></span>
        <span
          class="relative"
          :class="{
            block: nextPlaying[index],
            hidden: !nextPlaying[index],
          }"
          ><Icon name="material-symbols:pause-outline" size="20"></Icon
        ></span>
      </div>
      <div
        class="
          absolute
          z-50
          top-2
          right-2
          text-gray-100
          h-9
          w-9
          flex
          justify-center
          items-center
        "
        @click="toggleMute"
      >
        <span class="relative" :class="{ hidden: muted, block: !muted }"
          ><Icon name="octicon:unmute-16" size="20"></Icon
        ></span>
        <span class="relative" :class="{ block: muted, hidden: !muted }"
          ><Icon name="bx:volume-mute" size="20"></Icon
        ></span>
      </div>

      <div
        class="
          z-50
          absolute
          m-auto
          left-0
          right-0
          top-0
          bottom-0
          text-gray-100
          flex
          justify-center
          items-center
        "
        :class="{ hidden: displayDiv }"
      >
        <span
          class="
            relative
            translate-x-0
            h-12
            w-12
            rounded-full
            bg-black bg-opacity-50
            flex
            justify-center
            items-center
            animate-ping
          "
          :class="{ block: nextPlaying[index], hidden: !nextPlaying[index] }"
          ><Icon name="material-symbols:play-arrow" size="40"></Icon
        ></span>
        <span
          class="
            relative
            translate-x-0
            h-12
            w-12
            rounded-full
            bg-black bg-opacity-50
            flex
            justify-center
            items-center
            animate-ping
          "
          :class="{ hidden: nextPlaying[index], block: !nextPlaying[index] }"
          ><Icon name="material-symbols:pause-outline" size="40"></Icon
        ></span>
      </div>

      <video
        id="vid"
        ref="myvideo"
        :poster="`/_ipx/f_webp,q_30,s_400x720/thumbnail/vi/${video.videoId}/maxres2.jpg`"
        class="
          w-screen
          lg:w-[401px]
          md:w-auto
          overflow-hidden
          md:h-[80vh]
          object-cover
          shortsHeight
          relative
          z-10
          lazy
          lazyload
        "
        @click="
          playPause(index);
          hideDiv();
        "
        :muted="muted"
        autoplay
        playsinline
        preload="none"
      >
        <source
          :data-src="`https://vid.vidmatevideos.in/stream/${video.videoId}`"
          type="video/mp4"
        />
      </video>
      <!-- name detail -->
      <div
        class="
          absolute
          bottom-0
          left-0
          right-0
          p-5
          text-slate-100
          z-30
          bg-gradient-to-b
          from-transparent
          to-black
          bg-opacity-30
        "
      >
        <h1 class="text-sm mr-6">{{ video.title }}</h1>
        <div class="flex justify-between items-center">
          <div class="flex items-center mt-2">
            <div
              class="h-8 w-8 rounded-full overflow-hidden ring-1 ring-slate-800"
            >
              <nuxt-img
                :src="
                  '/authorpic' +
                  video.author.thumbnails[0].url.replace(
                    'https://yt3.ggpht.com',
                    ''
                  )
                "
                :alt="video.author.name"
                width="88"
                height="88"
              />
            </div>
            <h2 class="font-medium ml-2">{{ video.author.name }}</h2>
          </div>
          <span
            class="
              flex flex-col
              text-xs
              font-semibold
              tracking-wider
              items-center
              gap-1
            "
            @click="isModal = !isModal"
            ><Icon name="icon-park-solid:share-two" size="24" /> Share</span
          >
        </div>
      </div>
      <!-- name detail -->
      <shareModal
        v-show="isModal"
        :link="`https://www.vidmatevideos.in/shorts/${video.seourl}`"
      />
    </div>
  </div>
  <InfiniteLoading @infinite="load" />
</template>
