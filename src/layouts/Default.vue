
<template>
  <particles-bg color="#000000" num="80" type="cobweb" :bg="true" />
  <Navbar />
  <router-view />
  <Footer />
</template>
  
  <script>
import Navbar from "src/components/Navbar.vue";
import Footer from "src/components/Footer.vue";
import { ParticlesBg } from "particles-bg-vue";
export default {
  components: {
    Navbar,
    Footer,
    ParticlesBg,
  },
};
</script>
  