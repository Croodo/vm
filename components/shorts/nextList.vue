<script setup>
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
    const response = await fetch(
      "https://www.vidmatevideos.in/api/yt/shorts/related?page=" + page
    );
    const json = await response.json();
    if (json.posts.length < 30) $state.complete();
    else {
      list.value.push(...json.posts);
      $state.loaded();
    }
    page++;
  } catch (error) {
    $state.error();
  }
};

onMounted(async () => {
  $fetch(`/api/yt/shorts/related`, {
    method: "GET",
  })
    .then((response) => {
      list.value = response;
    })
    .then(() => {
      let options = {
        rootMargin: "0px",
        threshold: [0.4, 0.55],
      };

      let handlePlay = (entries, observer) => {
        entries.forEach((video, i) => {
          const currentIndex = myvideo.value.indexOf(video.target);

          if (video.isIntersecting) {
            const lazyPoster = video.target;
            lazyPoster.poster = lazyPoster.dataset.poster;
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
                playPromise.then((_) => {}).catch((error) => {});
              }
            }, 0);
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
    });
});
</script>
<template>
  <div
    class="flex justify-center items-center md:h-screen lg:-mt-0 post snap-start"
    v-for="(video, index) in list.posts"
    :key="index"
  >
    <div class="md:rounded-xl overflow-hidden relative shortsHeight">
      <div
        class="absolute z-30 top-2 left-1 text-gray-100 flex justify-center items-center"
      >
        <NuxtLink
          to="/shorts"
          class="relative flex items-center font-extrabold tracking-wide font-sans text-xl"
          :class="{
            hidden: nextPlaying[index],
            block: !nextPlaying[index],
          }"
          ><Icon name="material-symbols:chevron-left" size="40"></Icon>
          Shorts</NuxtLink
        >
        <NuxtLink
          to="/shorts"
          class="relative"
          :class="{
            block: nextPlaying[index],
            hidden: !nextPlaying[index],
          }"
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
          class="relative translate-x-0 h-12 w-12 rounded-full bg-black bg-opacity-50 flex justify-center items-center animate-ping"
          :class="{ block: nextPlaying[index], hidden: !nextPlaying[index] }"
          ><Icon name="material-symbols:play-arrow" size="40"></Icon
        ></span>
        <span
          class="relative translate-x-0 h-12 w-12 rounded-full bg-black bg-opacity-50 flex justify-center items-center animate-ping"
          :class="{ hidden: nextPlaying[index], block: !nextPlaying[index] }"
          ><Icon name="material-symbols:pause-outline" size="40"></Icon
        ></span>
      </div>

      <video
        id="vid"
        ref="myvideo"
        :data-poster="`/_ipx/f_webp,q_30,s_400x720/thumbnail/vi/${video.videoId}/maxres2.jpg`"
        class="w-screen lg:w-[401px] md:w-auto overflow-hidden md:h-[80vh] object-cover shortsHeight relative z-10 lazy"
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
        class="absolute bottom-0 left-0 right-0 p-5 text-slate-100 z-30 bg-gradient-to-b from-transparent to-black bg-opacity-30"
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
            class="flex flex-col text-xs font-semibold tracking-wider items-center gap-1"
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
</template>
