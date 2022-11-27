<template>
  <div class="main">
    <div class="main__container">
      <main class="content">
        <div class="content__button_left">
          <router-link to="where" class="content__button_link"
            >where?</router-link
          >
        </div>
        <div class="content__body">
          <div class="content__title">
            <h2
              :style="{
                top: `${calculateBias(mouseY)}%`,
                left: `${calculateBias(mouseX)}%`,
              }"
            >
              FULL-CYCLE EVENT AGENCY
            </h2>
          </div>
          <circle-showreel />
        </div>
        <div class="content__button_right">
          <router-link to="what" class="content__button_link"
            >what?</router-link
          >
        </div>
      </main>
      <footer class="footer">
        <div class="footer__button">
          <router-link to="who" class="footer__button_link">Who?</router-link>
        </div>
      </footer>
    </div>
  </div>
  <preloder-page name="mozgi" />
</template>

<script>
import circleShowreel from "../components/circleShowreel.vue";
import preloderPage from "../components/preloderPage.vue";
export default {
  props: {
    mouseX: {
      type: Number,
      required: true,
      default: 0,
    },
    mouseY: {
      type: Number,
      required: true,
      default: 0,
    },
  },

  components: {
    circleShowreel,
    preloderPage,
  },

  methods: {
    calculateBias(number) {
      return number / 200;
    },
  },
};
</script>

<style scoped lang='scss'>
.main {
  width: 98%;
  margin: 0 auto;
}

.main__container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.content {
  flex: 1 1 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 200px 0 0 0;
  margin: 0 0 50px 0;
}

.content__body {
  flex: 1 1 auto;
}

.content__title {
  max-width: 1023px;
  height: 180px;
  margin: 0 auto 50px;
  position: relative;

  @media (max-width: 877px) {
    margin: 0 0 100px 0;
  }

  @media (max-width: 721px) {
    margin: 0 0 200px 0;
  }

  @media (max-width: 700px) {
    margin: 0 0 50px 0;
  }

  @media (max-width: 559px) {
    margin: 0;
  }

  @media (max-width: 446px) {
    margin: 0 0 50px 0;
  }

  @media (max-width: 400px) {
    margin: 0;
  }

  h2 {
    position: absolute;
    font-family: "Lexend Giga", Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 82px;
    line-height: 110%;
    text-align: center;
    text-transform: uppercase;
    color: #373737;
    z-index: 100;

    @media (max-width: 1000px) {
      font-size: 72px;
    }

    @media (max-width: 700px) {
      font-size: 52px;
    }

    @media (max-width: 559px) {
      font-size: 38px;
    }

    @media (max-width: 400px) {
      font-size: 30px;
    }

    @media (max-width: 310px) {
      font-size: 26px;
    }
    &::before {
      content: "";
      position: absolute;
      width: 500px;
      height: 500px;
      top: -85%;
      left: 23%;
      z-index: -1;
      border-radius: 50%;
      background: #ffcb46;
      filter: blur(38px);

      @media (max-width: 877px) {
        left: 15%;
        top: -45%;
      }

      @media (max-width: 721px) {
        top: -25%;
        left: 5%;
      }

      @media (max-width: 700px) {
        width: 350px;
        height: 350px;
        top: -65%;
        left: 17%;
      }
      @media (max-width: 641px) {
        top: -85%;
        top: -4%;
      }
      @media (max-width: 559px) {
        left: -5%;
        top: -105%;
      }

      @media (max-width: 459px) {
        left: 4%;
        top: -25%;
        width: 250px;
        height: 250px;
      }

      @media (max-width: 400px) {
        left: 0%;
        top: -75%;
      }

      @media (max-width: 392px) {
        left: 4%;
        top: -35%;
        width: 200px;
        height: 200px;
      }
      @media (max-width: 310px) {
        left: -15%;
        top: -35%;
      }
    }
  }
}

.content__button_left,
.content__button_right {
  flex: 0 0 5%;
  transform: rotate(90deg);
}

.content__button_left .content__button_link,
.content__button_right .content__button_link {
  width: 68px;
  height: 22px;
  position: relative;
  background: none;
  font-family: "Lexend Giga";
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 2.5;
  text-align: center;
  transition: color 100ms ease-in-out;
  color: #373737;

  @media (max-width: 600px) {
    line-height: 1;
  }

  &::before {
    content: "";
    position: absolute;
    top: 150%;
    left: -5%;
    background-color: #fff;
    width: 0;
    height: 2px;
    transition: width 300ms ease-in-out;
  }

  &:hover {
    color: #fff;
    -webkit-text-stroke: 0.2px #373737;
  }

  &:hover::before {
    width: 115%;
  }
}

.content__button_left {
  transform: rotate(-90deg);
}

.footer {
  flex: 0 0 auto;
  min-height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .footer__button .footer__button_link {
    width: 68px;
    height: 22px;
    position: relative;
    background: none;
    font-family: "Lexend Giga";
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 140%;
    text-align: center;
    transition: color 100ms ease-in-out;
    color: #373737;

    &::before {
      content: "";
      position: absolute;
      top: 25px;
      left: -5%;
      background-color: #fff;
      width: 0;
      height: 2px;
      transition: width 300ms ease-in-out;
    }

    &:hover {
      color: #fff;
      -webkit-text-stroke: 0.2px #373737;
    }

    &:hover::before {
      width: 115%;
    }
  }
}
</style>