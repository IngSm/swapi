import getFilms from "@/services/Api";

const state = () => ({
  films: []
});

const getters = {
  getAllFilms: (state: any) => {
    return state.films
  }
};

const actions = {
  async showFilms ({commit}: any) {
    const filmsAll = await getFilms(null);
    commit('setAllFilms', filmsAll)
  }
}

const mutations = {
  setAllFilms (state: any, filmsAll: any) {
    state.films = filmsAll
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}