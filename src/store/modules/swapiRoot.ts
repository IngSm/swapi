import { getSwapiRoot } from "@/services/Api";

const state = () => ({
  root: [],
});

const getters = {
  getRoot: (state: any, getters: any) => {
    return state.root;
  },
};

const actions = {
  async showSwapiRoot({ commit }: any) {
    const rootAll = await getSwapiRoot();
    commit("setSwapiRoot", rootAll);
  },
};

const mutations = {
  setSwapiRoot(state: any, rootAll: any) {
    state.root = rootAll;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
