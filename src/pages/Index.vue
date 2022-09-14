<template>
  <div class="justify-evenly content-center">
    <SelfIntroVue></SelfIntroVue>
  </div>
</template>

<script>
import SelfIntroVue from "src/components/SelfIntro.vue";
export default {
  metaInfo: {
    title: "Home",
  },
  components: {
    SelfIntroVue,
  },
};
</script>

<style lang="scss" scoped>
.posts {
  display: flex;
  flex-direction: column;
  width: 75%;
  margin: 2rem 0;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
}
.projects {
  margin: 5rem 0;
}
a {
  text-decoration: none;
  padding: 0 0.5rem;
}
h2 {
  margin-bottom: 1rem;
}
hr {
  width: 25%;
  margin: 0;
}
</style>