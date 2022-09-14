<template>
  <div class="q-pa-md row col-6 items-center q-gutter-md">
    <q-card class="my-card" flat bordered>
      <!-- <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" /> -->

      <q-card-section>
        <!-- <div class="text-overline text-orange-9">Solomon</div> -->
        <div class="text-h5 q-mt-sm q-mb-xs">About Me</div>
        <div class="text-body2 text-blue-grey-10">
          {{ top }}
        </div>
      </q-card-section>

      <q-card-actions>
        <q-space />
        More About me
        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />
      </q-card-actions>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-body2 text-blue-grey-14">
            <div>
              <p>
                I graduate from Nanyang Technological University from Singapore
                with a degree in Computer Science. Upon graduation, I started a
                life with start-ups, wearing multiple hats learning many things
                . To me Tech is a compliment to life. It is there to simplify
                life and remove all the mundane work that you need to do over
                and over again.
              </p>
              <p>
                At the time of writing this, my focus will be to grow
                technically, learning the philosophy behind different designs,
                getting out of the trough of disillusionment to have the
                confidence in approving pull requests
              </p>
            </div>
            <q-separator />

            <div class="column content-start">
              <TechStackChips
                :techArr="languages"
                :text="'Languages:'"
              ></TechStackChips
              ><TechStackChips
                :techArr="libraries"
                :text="'Libraries:'"
              ></TechStackChips
              ><TechStackChips
                :techArr="frameworks"
                :text="'Frameworks:'"
              ></TechStackChips
              ><TechStackChips
                :techArr="techStack"
                :text="'Tools/Tech:'"
              ></TechStackChips>
            </div>
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
  </div>
</template>
  <script>
import { ref } from "vue";
import TechStackChips from "./TechStackChips.vue";
export default {
  components: {
    TechStackChips,
  },
  setup() {
    const top = ` My name is Solomon Sim. If you haven't notice, Front-end design isn't
          really my kind of thing. While I believe that if you can code in a
          single language, you can code in any language, CSS is a different ball
          game for me. I would rather spend the time solving different challenges than centering a <div>`;
    /** should have mapped these */
    const techStack = ["AWS", "GCP", "Docker", "Kubernetes", "Jira"];
    const languages = ["Python", "JavaScript", "Typescript", "Go(learning)"];
    const libraries = ["NumPy", "Pandas", "OpenCV"];
    const frameworks = [
      "Vue.js",
      "Node.js",
      "Express.js",
      "Keras",
      "TensorFlow",
      "Flask",
      "FastAPI",
    ];
    return {
      expanded: ref(false),
      top,
      techStack,
      languages,
      libraries,
      frameworks,
    };
  },
};
</script>