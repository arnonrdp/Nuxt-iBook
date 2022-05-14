<template>
  <!-- <BookReaderTemplate /> -->
  <h2>// TODO: Inserir leitor de livros aqui</h2>
</template>

<script lang="ts">
import Vue from 'vue'
import { books } from '@/store'
export default Vue.extend({
  layout: 'ibook',
  async asyncData({ route }) {
    await books.show({ id: route.params.id as any })
  },
  head() {
    return {
      title: books.$single.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: books.$single.description,
        },
      ],
    }
  },
})
</script>
