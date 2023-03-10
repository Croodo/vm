<template>
  <div class="border-b border-zinc-200 flex flex-col justify-between relative">
    <!-- This slot will handle the title/header of the accordion and is the part you click on -->
    <h3
      class="text-lg lg:text-2xl items-center w-full cursor-pointer block py-6"
      :class="{ accordion__trigger_active: visible }"
      @click="open"
    >
      <strong
        class="font-bold bg-zinc-900 py-1 px-2 rounded-full text-zinc-100 mr-5"
        >{{ index + 1 }}</strong
      >
      <slot name="accordion-trigger"></slot>
    </h3>
    <!-- <Icon
      name="bi:chevron-compact-down"
      size="35"
      class="text-zinc-500 absolute right-0 top-6"
    /> -->
    <transition
      name="accordion"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end"
    >
      <div class="block my-5 ml-12 prose marker:text-zinc-900">
        <!-- This slot will handle all the content that is passed to the accordion -->
        <slot name="accordion-content"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {},
  inject: ["Accordion"],
  data() {
    return {
      index: null,
    };
  },
  computed: {
    visible() {
      return this.index == this.Accordion.active;
    },
  },
  methods: {
    open() {
      if (this.visible) {
        this.Accordion.active = null;
      } else {
        this.Accordion.active = this.index;
      }
    },
    start(el) {
      el.style.height = el.scrollHeight + "px";
    },
    end(el) {
      el.style.height = "";
    },
  },
  created() {
    this.index = this.Accordion.count++;
  },
};
</script>

<style scoped>
.accordion__item {
  cursor: pointer;
  padding: 10px 20px 10px 40px;
  border-bottom: 1px solid #ebebeb;
  position: relative;
}

.accordion__trigger {
  display: flex;
  justify-content: space-between;
}

.accordion-enter-active,
.accordion-leave-active {
  will-change: height, opacity;
  transition: height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}
</style>
