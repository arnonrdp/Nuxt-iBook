import { Module, VuexModule } from 'vuex-module-decorators'
import { Book } from '@/models'

@Module({ name: 'books', stateFactory: true, namespaced: true })
export default class Books extends VuexModule {
  books = [{/** Livros poderiam ser declarados aqui */}] as Book[]
}
