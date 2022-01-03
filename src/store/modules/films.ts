import { getFilms } from "@/services/Api";

const state = () => ({
  films: [],
});

const getters = {
  getAllFilms: (state: any, getters: any) => {
    return state.films;
  },
};

const actions = {
  async showFilms({ commit }: any, arg: null | number) {
    const filmsAll = await getFilms(arg);
    commit("setAllFilms", filmsAll);
  },
};

const mutations = {
  setAllFilms(state: any, filmsAll: any) {
    state.films = filmsAll;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
