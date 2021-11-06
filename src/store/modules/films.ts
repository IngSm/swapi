import getFilms from "@/services/Api";

const state = () => ({
  films: []
});

const getters = {};

const actions = {
  async showFilms (commit: any) {
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
  state,
  getters,
  actions,
  
}