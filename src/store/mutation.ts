import Vue from "vue";
import { MutationTree } from "vuex";
import { IMovieState, ISetMoviePayload } from "./type";

export const enum MovieMutations {
    setState = 'setMovieState'
}

const mutations: MutationTree<IMovieState, MovieMutations> = {
    [MovieMutations.setState](state: IMovieState, payload: ISetMoviePayload) {
        Vue.set(state, payload.key, payload.data);
    },
};

export default mutations;
