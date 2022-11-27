<template>
  <div class="content">
    <div class="content__button">
      <router-link to="/">what?</router-link>
    </div>
  </div>

  <preloder-page name="what" />
</template>

<script>
import preloderPage from "../components/preloderPage.vue";
export default {
  components: { preloderPage },
  component: {
    preloderPage,
  },
};
</script>

<style scoped lang='scss'>
@import "../assets/style/pageTemplate.scss";
</style>