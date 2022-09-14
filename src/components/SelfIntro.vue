<template>
  <div class="flex flex-center">
    <v-typical
      class="blink"
      :steps="helloWorld"
      :loop="Infinity"
      :wrapper="'h3'"
    ></v-typical>
  </div>
  <div class="flex flex-center">
    <v-typical
      class="blink"
      :steps="iamText"
      :loop="Infinity"
      :wrapper="'h5'"
    ></v-typical>
  </div>
</template>
  
<script>
import VTypical from "vue-typical";

export default {
  components: {
    VTypical,
  },
  setup() {
    const iamText = [
      "I am Solomon",
      1000,
      "I am a Programmer",
      1000,
      "I am a Developer",
      1000,
      "I am an Entrepreneur",
      1000,
    ];
    const helloWorld = [
      "👋 Hello World!",
      1000,
      "👋 你好世界!",
      1000,
      "👋 こんにちは世界",
      1000,
      "👋 Bonjour monde!",
      1000,
      "👋 Hallo Welt!",
      1000,
      "👋 ¡Hola Mundo!",
      1000,
      "👋 สวัสดีชาวโลก!",
      1000,
      "👋 Chào thế giới!",
      1000,
    ];
    return { iamText, helloWorld };
  },
};
</script>