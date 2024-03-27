<template>
    <div class="main_header">
        <v-toolbar
            :elevation="0"
            color="#424242"
            >
            <v-toolbar-title class="mx-5">
                <figure>
                    <img class="main_img mt-2" src="@/assets/header/netflex.png">
                </figure>
            </v-toolbar-title>
            <v-spacer/>
            
            <v-btn v-if="loginYn" class="white--text" color="#B71C1C" elevation="0" depressed v-on:click="login('login')">
                로그인
            </v-btn>
            <v-btn v-else class="white--text" color="#B71C1C" elevation="0" depressed v-on:click="login('logout')">
                로그아웃
            </v-btn>
            
        </v-toolbar>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component({
    name: 'MainHeader',
})
export default class MainHeader extends Vue {
    private isLogin = true;
    private loginYn = true;

    public setLoginYn() {
        this.loginYn = !this.loginYn;
    }

    protected mounted() {
        console.log('header mounted');
    }

    private login(str: string) {
        console.log('login start');
        if(str === 'login') {
            this.$router.push({name: 'LoginView',});
        } 
        if(str === 'logout') {
            if(confirm('로그아웃 하시겠습니까?')) {
                const loginChk: any = sessionStorage.getItem('loginYn');
                if(loginChk === 'Y') {
                    this.setLoginYn();
                }
                
                alert('로그아웃 되었습니다.');
            }
        }
        
    }

}
</script>
<style lang="scss">
    .main_header {
        background-color: transparent;
    }
    .main_img {
        width: 5.5625rem;
    }

</style>
