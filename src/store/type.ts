import { IResponseMOVIE } from "@/api/MOVIE";

export interface IMovieState {
    movie: IResponseMOVIE | null;
}

export interface ISetMoviePayload {
    key: keyof IMovieState,
    data: string | number | IResponseMOVIE | null
}
