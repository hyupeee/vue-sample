// 사용할 api type 설정 
export interface iMOVIE {
    dates: iDates;
    page: number;
    results: iResult[];
    total_pages: number;
    total_results: number;
}

export interface iDates {
    maximum: string;
    minimum: string;
}

export interface iResult {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface IRequestMOVIE {
    query: string;
}

export interface IResponseMOVIE {
    data: iMOVIE;
    status: number;
}
