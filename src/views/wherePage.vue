<template>
  <div class="content">
    <div class="content__button">
      <router-link to="/">where?</router-link>
    </div>
  </div>
  <preloder-page name="where" />
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