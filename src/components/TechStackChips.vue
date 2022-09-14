<template>
  <div class="row">
    <div class="text-h6">{{ text }}</div>
    <div v-for="(tech, index) in techArr" :key="index">
      <q-chip dense color="primary" text-color="white">
        {{ tech }}
      </q-chip>
    </div>
  </div>
</template>
    <script>
export default {
  props: {
    text: String,
    techArr: Array,
  },
  setup() {},
};
</script>