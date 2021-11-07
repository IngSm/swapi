<template>
  <div class="home">
    <transition name="fade">
      <div v-if="start" class="home-main">
        <h1 class="home_title" v-text="'STAR WARS'" />
        <h3 class="home_title" v-text="'Universe collection'" />
        <div class="home_btn-wrap">
          <q-btn
            @click="$router.push({name: 'Collection'})"
            class="home_btn"
            outline
            style="color: goldenrod"
            label="Browse collection"
          />
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class Home extends Vue {
  start = false;

  mounted() {
    setTimeout(() => {
      this.start = true;
    }, 1000);
  }
}
</script>
