<template>
  <div class="home-view">
    <MainHeader ref="mainHeader" />
    <Banner class="banner"/>
  </div>
  
</template>

<script lang="ts">
import { Vue, Component, Ref } from 'vue-property-decorator';
import MainHeader from '@/components/home/MainHeader.vue';
import Banner from '@/components/home/Banner.vue';


@Component({
  name: 'HomeView',
  components: {
    MainHeader,
    Banner,
  },
})
export default class HomeView extends Vue {
  @Ref() mainHeader!: MainHeader;

  protected mounted() {
    console.log('HomeView mounted');
    const loginChk: any = sessionStorage.getItem('loginYn');
    if(loginChk === 'Y') {
      this.mainHeader.setLoginYn();
    }
    
  }

  protected destroyed() {
    console.log('destroyed');
  }
}
</script>
<style lang="scss">
  .home {
    position: relative;
  }
  .home-view {
    background-image: linear-gradient(360deg, rgba(0, 0, 0, 0.9000) 0.000%, rgba(0, 0, 0, 0.8965) 8.500%, rgba(0, 0, 0, 0.8861) 17.00%, rgba(0, 0, 0, 0.8688) 25.50%, rgba(0, 0, 0, 0.8444) 34.00%, rgba(0, 0, 0, 0.8132) 42.50%, rgba(0, 0, 0, 0.7750) 51.00%, rgba(0, 0, 0, 0.7368) 59.50%, rgba(0, 0, 0, 0.7056) 68.00%, rgba(0, 0, 0, 0.6813) 76.50%, rgba(0, 0, 0, 0.6639) 85.00%, rgba(0, 0, 0, 0.6535) 93.50%, rgba(0, 0, 0, 0.6500) 102.0%);;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .home-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    position: absolute;
  }
  .main-head {
    position: relative;
    z-index: 0;
  }
  .banner {
    margin-top: 70px;
  }
</style>
