import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Auth from '@/store/auth'
import Books from '@/store/books'

let auth: Auth
let books: Books

const initializeStores = (store: Store<any>): void => {
  auth = getModule(Auth, store)
  books = getModule(Books, store)
}

export { initializeStores, auth, books }
