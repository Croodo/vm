<script setup>
import { toClipboard } from "@soerenmartius/vue3-clipboard";

// import ClipboardJS from "clipboard";
// const { isModal } = defineProps({
//   isModal: ref({}),
// });
const { link } = defineProps({
  link: ref({}),
});
const route = useRoute();
const isModal = useState("isModal", () => false);
// onMounted(() => {
//   function copyText() {
//     const element = this.$refs.message;
//     element.select();
//     element.setSelectionRange(0, 99999);
//     document.execCommand("copy");
//   }
// });
</script>
<template>
  <Transition name="modal">
    <div
      class="
        absolute
        z-30
        top-0
        bottom-0
        right-0
        left-0
        w-full
        bg-black bg-opacity-30
        transition-all
      "
      @click="isModal = !isModal"
    >
      <div class="relative w-full h-full">
        <div
          class="
            absolute
            bg-zinc-900
            bottom-0
            -left-2
            -right-2
            z-50
            m-4
            text-zinc-200
            rounded-2xl
            overflow-hidden
            transition-all
            modal-container
          "
          @click.stop
        >
          <h3 class="text-lg font-bold my-3 px-3">Share</h3>
          <div
            class="flex gap-5 overflow-auto px-3 py-3 border-b border-zinc-700"
          >
            <a :href="`whatsapp://send?text=${link}`" title="Whatsapp"
              ><span class="flex flex-col text-xs gap-2 items-center"
                ><Icon
                  name="ic:outline-whatsapp"
                  size="45"
                  class="bg-green-500 rounded-full p-2"
                />
                Whatsapp</span
              ></a
            >
            <a
              :href="`https://www.facebook.com/sharer/sharer.php?u=${link}`"
              target="blank"
              title="Facebook"
              ><span class="flex flex-col text-xs gap-2 items-center"
                ><Icon
                  name="ic:outline-facebook"
                  size="45"
                  class="bg-blue-500 rounded-full p-2"
                />
                Facebook</span
              ></a
            >
            <a
              :href="`http://www.twitter.com/share?url=${link}`"
              target="blank"
              title="Twitter"
              ><span class="flex flex-col text-xs gap-2 items-center"
                ><Icon
                  name="mdi:twitter"
                  size="45"
                  class="bg-sky-500 rounded-full p-2"
                />
                Twitter</span
              ></a
            >
            <a
              :href="`fb-messenger://share?link=${link}`"
              target="blank"
              title="Messenger"
            >
              <span class="flex flex-col text-xs gap-2 items-center"
                ><Icon
                  name="mdi:facebook-messenger"
                  size="45"
                  class="bg-purple-500 rounded-full p-2"
                />
                Messenger</span
              ></a
            >
            <!-- <span class="flex flex-col text-xs gap-2 items-center"
            ><Icon
              name="bx:bxs-message-rounded"
              size="45"
              class="bg-green-400 rounded-full p-2"
            />
            Messages</span
          > -->
          </div>
          <div
            class="px-3 py-4 flex items-center copy ripple"
            @click="toClipboard(link)"
          >
            <span class="bg-zinc-700 rounded-full p-3 mr-4"
              ><Icon name="ic:outline-content-copy" size="22"
            /></span>
            Copy Link
          </div>
        </div>
      </div>
    </div></Transition
  >
</template>
<style>
.ripple {
  @apply bg-center transition-all;
}
.ripple:active {
  @apply bg-neutral-800 transition-none scale-90;
}
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: translate(0, 90vh);
  -ms-transform: translate(0, 90vh);
  -o-transform: translate(0, 90vh);
  transform: translate(0, 90vh);
}
</style>