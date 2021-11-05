<template>
  <div class="collection">
    <div class="collection-browser">
      <q-layout :container="true" view="lhh lpR lff" class="collection-browser_layout bg-grey-9 text-white">

      <q-header elevated class="bg-grey-6">
        <q-toolbar>
          <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

          <q-toolbar-title>
            <q-avatar>
              <img src="@/assets/svgs/Yoda.svg">
            </q-avatar>
            Universe collection
          </q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer :width="312" v-model="leftDrawerOpen" class="bg-grey-8" side="left" behavior="mobile">
        <q-list dark>
          <q-item-label header>Essential Links</q-item-label>

          <q-item clickable @click="$router.push({name: 'Films'})">
            <q-item-section>
              <q-item-label>Films</q-item-label>
              <q-item-label caption>Browse awesome SW films</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable @click="$router.push({name: 'Films'})">
            <q-item-section>
              <q-item-label>Actors</q-item-label>
              <q-item-label caption>Browse your favourite SW actors and actresses</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable @click="$router.push({name: 'Films'})">
            <q-item-section>
              <q-item-label>Starships</q-item-label>
              <q-item-label caption>Browse amazing SW starships</q-item-label>
            </q-item-section>
          </q-item>

        </q-list>
      </q-drawer>

      <q-page-container>
        <h3 v-if="$route.name === 'Collection'" class="collection-browser_cont-text" v-html="'&#8592; Browse fascinating content from Star Wars Universe'" />
        <router-view />
      </q-page-container>

    </q-layout>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";


@Options({
  components: {},
})
export default class collection extends Vue {
  leftDrawerOpen = false

  toggleLeftDrawer () {
    this.leftDrawerOpen = !this.leftDrawerOpen
  }

}
</script>

