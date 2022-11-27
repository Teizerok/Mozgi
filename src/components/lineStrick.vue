<template>
  <div class="line-strick__block">
    <div class="line-strick_one">
      FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY
    </div>
    <div class="line-strick_two">
      FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY
    </div>
  </div>
</template>

<style scoped lang="scss">
.line-strick__block {
  transform: rotate(150deg);
}

.line-strick_one,
.line-strick_two {
  position: absolute;
  width: 2374px;
  height: 57px;
  font-family: "Lexend Giga";
  font-style: italic;
  font-weight: 700;
  font-size: 52px;
  line-height: 110%;
  text-align: center;
  text-transform: uppercase;
  opacity: 0.1;
  right: 0;
  color: #bebebe;
  -webkit-text-stroke: 1px #373737;
  transform: translate(0%);
  animation-name: runStrick;
  animation-duration: 45s;
  animation-iteration-count: infinite;
}
.line-strick_one {
  top: 240px;
}

.line-strick_two {
  top: 320px;
  transform: rotate(-180deg);
}

@keyframes runStrick {
  0% {
    right: 0%;
  }

  50% {
    right: -65%;
  }

  100% {
    right: 0%;
  }
} ;
</style>