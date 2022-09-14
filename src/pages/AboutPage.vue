<template>
  <div class="row justify-center content-center">
    <AboutMeVue class="col-auto"></AboutMeVue>
  </div>
</template>
  
  <script>
import AboutMeVue from "src/components/AboutMe.vue";
export default {
  metaInfo: {
    title: "About Me",
  },
  components: {
    AboutMeVue,
  },
};
</script>
  