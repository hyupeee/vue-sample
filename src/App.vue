<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { login } from './type/login';

@Component({
  name: 'App',
})
export default class App extends Vue {

private drawer = false;

protected mounted() {
  this.sessionDate();
  // sessionStorage.setItem('userId', 'leesanghyup');
  // sessionStorage.setItem('userPw', 'qwe123@');
  // sessionStorage.setItem('loginYn', 'N');
  console.log('mounted');
}

private sessionDate() {
  let userInfo: login = { userId: 'leesanghyup', userPw: 'qwe123@', };
  sessionStorage.setItem('userInfo', JSON.stringify(userInfo)); 
}

}

</script>
<style lang="scss">
  .app-back {
    background-image: url("assets/header/netflex-background.jpeg");
  }
</style>
