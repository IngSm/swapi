<template>
  <div class="collection">
    <div class="collection-browser">
      <q-layout
        :container="true"
        view="lhh lpR lff"
        class="collection-browser_layout bg-grey-9 text-white"
      >
        <q-header elevated class="bg-grey-6">
          <q-toolbar>
            <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
            <q-toolbar-title class="collection-browser_title">
              <q-avatar>
                <img
                  @click="$router.push({ name: 'Collection' })"
                  class="collection-browser_Yoda-icon"
                  src="@/assets/svgs/Yoda.svg"
                  alt="Yoda image"
                />
              </q-avatar>
              {{ makeName }}
            </q-toolbar-title>
          </q-toolbar>
        </q-header>

        <q-drawer
          :width="312"
          v-model="leftDrawerOpen"
          class="bg-grey-8"
          side="left"
          behavior="mobile"
        >
          <q-list dark>
            <q-item-label header>Essential Links</q-item-label>

            <div v-for="(item, key, num) in menuItems" :key="num">
              <q-item clickable @click="makeRouter(num)">
                <q-item-section>
                  <q-item-label
                    class="collection-browser_menu-item"
                    v-text="key"
                  />
                  <q-item-label caption v-text="subtitles[num]" />
                </q-item-section>
              </q-item>
            </div>
          </q-list>
        </q-drawer>

        <q-page-container>
          <div v-if="$route.name === 'Collection'">
            <h3
              class="collection-browser_cont-text"
              v-text="
                '&#8592; Browse fascinating content from Star Wars Universe'
              "
            />

            <Slider />
          </div>
          <router-view />
        </q-page-container>
      </q-layout>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Slider from "@/components/Slider.vue";

@Options({
  data() {
    return {
      subtitles: [
        "Browse SW universe's great people",
        "Browse distant SW planets",
        "Browse awesome SW films",
        "Browse diversity of SW creatures",
        "Browse future SW vehicles",
        "Browse powerful SW starships",
      ],
    };
  },
  components: {
    Slider,
  },
  computed: {
    menuItems() {
      return this.$store.getters["swapiRoot/getRoot"];
    },
    makeName() {
      switch (this.$route.name) {
        case "Collection":
          return "Collection";
        case "Films":
          return "Films";
      }
    },
  },
})
export default class collection extends Vue {
  leftDrawerOpen = false;

  toggleLeftDrawer() {
    this.leftDrawerOpen = !this.leftDrawerOpen;
  }

  makeRouter(key: number) {
    switch (key) {
      default:
        alert("Sorry, nothing here yet");
        break;
      case 2:
        this.$router.push({ name: "Films" });
        break;
      case 4:
        this.$router.push({ name: "Vehicles" });
        break;
    }
  }
}
</script>
