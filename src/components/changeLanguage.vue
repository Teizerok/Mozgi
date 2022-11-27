<template>
  <div :class="{ open: isOpen }" class="changer">
    <div @click="isOpen = !isOpen" class="changer__change-lang">
      <div class="changer__icon">👅</div>
    </div>

    <div class="changer__languages">
      <div
        v-for="language in languages"
        @click="switchLanguage(language)"
        :key="language"
        :class="{ selected: currentLanguage === language }"
        class="changer__language"
      >
        <p>
          {{ language }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      isOpen: false,
      languages: ["RU", "UA"],
      currentLanguage: "RU",
    };
  },

  methods: {
    switchLanguage(language) {
      this.currentLanguage = language;
    },
  },

  watch: {
    currentLanguage() {
      this.isOpen = false;
    },
  },
};
</script>

<style scoped lang="scss">
.changer {
  position: relative;
  .changer__languages {
    position: absolute;
    top: 5px;
    left: -40px;
    display: flex;
    opacity: 0;
    visibility: hidden;
    transition: all 350ms ease-in-out;
    .changer__language {
      padding: 0 10px;
      padding: 4px 10px;
      margin: 0 0 0 5px;
      font-family: "Lexend Giga";
      border: 1px solid #373737;
      border-radius: 50px;
      font-size: 17px;
      color: #373737;
      background: none;
      transition: all 100ms;

      &.selected {
        color: #ffffff;
        background: #373737;
      }

      &:hover {
        color: #ffffff;
        background: #373737;
      }
    }
  }
}

.changer__change-lang {
  justify-self: start;
  position: relative;
  box-sizing: border-box;
  width: 38px;
  height: 38px;
  cursor: pointer;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
}

.changer__icon {
  position: relative;
  width: 15px;
  height: 21px;
  top: 7px;
  left: 6px;
  font-family: "Body Grotesque";
  font-size: 15px;
  line-height: 140%;
  letter-spacing: 0.1em;
  color: #373737;
}

.changer.open .changer__languages {
  top: 5px;
  left: 40px;
  opacity: 1;
  visibility: visible;
}
</style>