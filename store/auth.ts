import { Module, VuexModule } from 'vuex-module-decorators'

@Module({ name: 'auth', stateFactory: true, namespaced: true })
export default class Auth extends VuexModule {}
