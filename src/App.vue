<template>
  <div @mousemove="mouseMoving" class="wrapper">
    <div class="container">
      <header-section class="container__header" />
      <router-view
        :mouseX="mouseX"
        :mouseY="mouseY"
        class="container__content"
      />
    </div>
  </div>
</template>

<script>
import headerSection from "./components/headerSection.vue";
export default {
  components: {
    headerSection,
  },

  data: () => {
    return {
      mouseX: 0,
      mouseY: 0,
    };
  },

  methods: {
    mouseMoving({ screenY, screenX }) {
      this.mouseX = screenX;
      this.mouseY = screenY;
    },
  },
};
</script>

<style lang="scss" >
@import "./assets/style/nullStyle.scss";
@import url("https://fonts.googleapis.com/css2?family=Lexend+Giga:wght@100;200;300;400;500;600;700;800;900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:wght@400;900&display=swap");

body {
  min-height: 100%;
  height: 100%;
}

#app {
  min-height: 100%;
  height: 100%;
}

.wrapper {
  width: 100%;
  height: 100%;
  background: #bebebe;
  overflow: hidden;
}

.container {
  height: 100%;
  width: 98%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.container__header {
  flex: 0 0 auto;
}

.container__content {
  flex: 1 1 auto;
}
</style>
