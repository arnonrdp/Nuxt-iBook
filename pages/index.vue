<template>
  <div class="wrapper">
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 200px;
  grid-auto-flow: column;
  grid-gap: 0.5rem;
  @include screen('small', 'medium') {
    grid-template-columns: 1fr;
  }
  .box {
    background-color: color('dark', 'darkest');
  }
}
</style>
