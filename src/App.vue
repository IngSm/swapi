<template>
  <router-view />
</template>

<script>
export default {
  name: "LayoutDefault",

  components: {},

  created() {
    this.$store.dispatch("films/showFilms", null);
    this.$store.dispatch("swapiRoot/showSwapiRoot");
  },
};
</script>

<style lang="sass">
@use 'StyleInput.scss'
</style>
