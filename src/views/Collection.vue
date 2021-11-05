<template>
  <div class="collection">
    <div class="collection-browser">
      <q-layout container="false" view="lhh lpR lff" class="bg-grey-9 text-white">

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

      <q-drawer v-model="leftDrawerOpen" class="bg-grey-8" side="left" behavior="mobile">
        <q-list dark>
          <q-item-label header>Essential Links</q-item-label>
          <q-item clickable tag="a" target="_blank" rel="noopener" href="">
            <q-item-section>
              <q-item-label>Docs</q-item-label>
              <q-item-label caption></q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-drawer>

      <q-page-container>
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

