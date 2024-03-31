<template>
    <v-container class="home-view">
        <h2>당신이 찾는 영화 리스트를 찾아보세요!</h2>
        <swiper
            :modules="modules" :pagination="{ clickable: true }"
        >
            <swiper-slide class="slide">Slide 1</swiper-slide>
            <swiper-slide class="slide">Slide 2</swiper-slide>
            <swiper-slide class="slide">Slide 3</swiper-slide>
            <swiper-slide class="slide">Slide 4</swiper-slide>
            <swiper-slide class="slide">Slide 5</swiper-slide>
            <swiper-slide class="slide">Slide 6</swiper-slide>
            <swiper-slide class="slide">Slide 7</swiper-slide>
            <swiper-slide class="slide">Slide 8</swiper-slide>
        </swiper>

    </v-container>
</template>

<script lang="ts">
import axios from 'axios';

import { Vue, Component} from 'vue-property-decorator';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

@Component({
    name: 'MainView',
    components: {
        Swiper,
        SwiperSlide,
    },
})
export default class MainView extends Vue{
    protected setup() {
      return {
        modules: [Pagination,],
      };
    }

    protected created() {
        const options:any = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/movie/now_playing?api_key=f54fde8b320e720ed31e18710d7b0f25',
            params: {language: 'kr-KR', page: '1',},
            headers: {
                accept: 'application/json',
            },
        };

        axios.request(options)
            .then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err);
            });
    }

    protected mounted() {
        console.log('mainview mounted');
    }
}

</script>

<style lang="scss">

</style>
