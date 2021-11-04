<template>
  <div class="home">
    <div class="home_text-block">
      <h1 class="home_title" v-text="'STAR WARS'" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class Home extends Vue {}
</script>
