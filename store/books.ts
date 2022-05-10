import { Module, VuexModule } from 'vuex-module-decorators'
import { $axios } from '@/utils/nuxt-instance'

@Module({ name: 'books', stateFactory: true, namespaced: true })
export default class Books extends VuexModule {
  books = ['livro 1', 'livro 2', 'livro 3']
  $axios: any
}
