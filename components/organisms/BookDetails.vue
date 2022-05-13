<template>
  <div class="book-details">
    <BookCover />
    <BookInfo />
  </div>
</template>

<style lang="scss" scoped>
.book-details {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-gap: 1.4rem;
  @include screen('small', 'medium') {
    grid-template-columns: 1fr;
  }
}
</style>
