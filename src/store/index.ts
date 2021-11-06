import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { InjectionKey } from 'vue'
import filmsAll from '@/store/modules/films';
export interface State {
  filmsAll: any
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  modules: {
    filmsAll
  },
});

export function useStore () {
  return baseUseStore(key)
}
