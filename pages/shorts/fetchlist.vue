<script setup>
let res = useState("res", () => null);
const cId = ref(null);
function channelId() {
  $fetch(`/api/yt/fetch/citems/` + cId.value, {
    method: "GET",
  }).then((response) => {
    if (response.success) {
      res.value = "Post Added!";
    } else if (!response.success) {
      res.value = "Data Already Exist!";
    } else {
      res.value = "Something Wrong Fetch Other Post!";
    }
    // res.value = response;
  });
}
</script>
<template>
  <div class="p-8">
    <form class="my-6 relative flex gap-6" v-on:submit.prevent>
      <input
        type="text"
        class="
          lg:prose-2xl
          block
          w-full
          rounded-none rounded-r-md
          border-gray-300 border
        "
        @keyup.enter="submit"
        v-model="cId"
      />
      <button
        @click="channelId"
        class="
          w-fit
          px-6
          py-2
          text-lg
          bg-teal-500
          rounded-md
          text-white
          font-medium
          hover:bg-teal-700
        "
      >
        Fetch Channel
      </button>
    </form>
    <div v-if="res === null && cId !== null">Wait</div>
    <div v-else-if="res !== null && cId !== null">{{ res }}</div>
    <div></div>
  </div>
</template>