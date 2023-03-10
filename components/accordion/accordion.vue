<script setup>
const { head } = defineProps({
  head: ref({}),
});
</script>
<template>
  <div class="px-6 lg:w-[75%] m-auto py-14">
    <div class="max-w-4xl m-auto" id="faq">
      <h2 class="text-4xl mb-6 font-serif">{{ head }}</h2>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      Accordion: {
        count: 0,
        active: null,
      },
    };
  },
  provide() {
    return { Accordion: this.Accordion };
  },
};
</script>

<style scoped>
.accordion {
  list-style: none;
  margin: 0;
  padding: 0;
}
.accordion__item:last-child {
  border-bottom: none;
}
</style>
