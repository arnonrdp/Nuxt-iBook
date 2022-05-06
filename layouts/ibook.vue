<template>
  <div class="ibook-layout">
    <Header />
    <Container>
      <Nuxt />
    </Container>
    <Footer />
  </div>
</template>


<style lang="scss" scoped>
.ibook-layout {
  margin-top: 4.313rem;
  display: grid;
  grid-gap: 6.75rem;
  .container {
    padding-bottom: 6.75rem;
  }
  .footer {
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>
