import { createStore, useStore as baseUseStore, Store } from "vuex";
import { InjectionKey } from "vue";
import films from "@/store/modules/films";
import swapiRoot from "@/store/modules/swapiRoot";
export interface State {
  state: any;
  modules: any;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  modules: {
    films,
    swapiRoot,
  },
});

export function useStore() {
  return baseUseStore(key);
}
