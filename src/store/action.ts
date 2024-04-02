import { Action } from "vuex";
import { IMovieState } from "./type";
import axios from 'axios';
import store from ".";

export enum MovieAction {
    MOVIE = 'MOVIE',
}

export const action: Action<IMovieState, MovieAction> = () => {
    return {
        [MovieAction.MOVIE]: (payload: any) => {
            console.log(payload);
            axios.request(payload)
            .then((res) => {
                store.commit('IMovieState', res);
                console.log(res);
            }).catch((err) => {
                console.log(err);
            });
            
        },
        
    };
};

export default action;

