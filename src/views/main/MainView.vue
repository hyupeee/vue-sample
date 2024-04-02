<template>
    <v-container class="home-view">
        <h2>당신이 찾는 영화 리스트를 찾아보세요!</h2>
        <swiper
            :slides-per-view="3"
            :space-between="50"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
        >
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
        </swiper>

    </v-container>
</template>

<script lang="ts">
// import axios from 'axios';
import { Vue, Component} from 'vue-property-decorator';
import { Swiper, SwiperSlide } from 'swiper/vue';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//import "swiper/swiper.scss";

@Component({
    name: 'MainView',
    components: {
        Swiper,
        SwiperSlide,
    },
})
export default class MainView extends Vue{
    // init Swiper:
    
    
    

    // protected created() {
    //     const options:any = {
    //         method: 'GET',
    //         url: 'https://api.themoviedb.org/3/movie/now_playing?api_key=f54fde8b320e720ed31e18710d7b0f25',
    //         params: {language: 'kr-KR', page: '1',},
    //         headers: {
    //             accept: 'application/json',
    //         },
    //     };

    //     axios.request(options)
    //         .then((res) => {
    //             console.log(res);
    //         }).catch((err) => {
    //             console.log(err);
    //         });
    // }

    protected mounted() {
        console.log('mainview mounted');
        
    }
    
}

</script>

<style lang="scss">
</style>
