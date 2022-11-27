<template>
  <div :class="{ loading: loading }" class="animation">
    <p class="animation__text">{{ name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      required: true,
      type: String,
      default: "",
    },
  },

  data: () => {
    return {
      loading: true,
    };
  },

  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1800);
  },
};
</script>

<style scoped lang='scss'>
.animation {
  display: none;
}

.animation__text {
  color: #fff;
  font-family: "Lexend Giga";
  font-weight: 400;
  font-size: 52px;
  text-align: center;
  margin: 200px 0 0 0;
  text-transform: uppercase;
  position: relative;
  top: 0;
  opacity: 1;
}

.animation.loading {
  display: block;
  animation-name: loadingPage;
  animation-duration: 2s;
}

@keyframes loadingPage {
  0% {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 10000;
    background: rgb(91, 89, 205);
    left: -100%;
  }

  20% {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 10000;
    background: rgb(91, 89, 205);
    left: 0%;
  }

  80% {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 10000;
    background: rgb(91, 89, 205);
    left: 0%;
  }

  100% {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 10000;
    background: rgb(91, 89, 205);
    left: 100%;
  }
}
</style>