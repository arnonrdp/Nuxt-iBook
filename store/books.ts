import { Action, config, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { Book } from '@/models'
import { $axios } from '@/utils/nuxt-instance'

config.rawError = true

interface Show {
  id: number
}

@Module({ name: 'books', stateFactory: true, namespaced: true })
export default class Books extends VuexModule {
  private books = [] as Book[]
  private singleBook = {} as Book

  public get $all() {
    return this.books
  }

  public get $single() {
    return this.singleBook
  }

  @Mutation
  private SET_BOOKS(books: Book[]) {
    this.books = books
  }

  @Mutation
  private SET_SINGLE_BOOK(book: Book) {
    this.singleBook = book
  }

  @Action
  public async index() {
    const books = await $axios.$get('/books')
    this.context.commit('SET_BOOKS', books)
  }

  @Action
  async show({ id }: Show) {
    const book = await $axios.$get(`/books/${id}`)
    this.context.commit('SET_SINGLE_BOOK', book)
  }
}
