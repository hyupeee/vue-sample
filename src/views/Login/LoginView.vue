<template>
  <v-container class="mt-10">
    <div class="ml-10 mr-10">
        <h2>넷플릭스 로그인</h2>
        <form v-on:submit.prevent="valid()">
            <v-text-field
                label="아이디"
                v-model="insertId"
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-text-field
                label="패스워드"
                v-model="insertPw"
                :append-icon="showEye ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showEye ? 'text' : 'password'"
                v-on:click:append="showEye = !showEye"
            ></v-text-field>
            <button type="submit" class="btn_login">로그인</button>
        </form>
        <p>테스트</p>
        <p>아이디 : {{insertId}}</p>
        <p>비밀번호 : {{insertPw}}</p>
        <p>api</p>
        
        <v-btn v-on:click="apiTest()">API</v-btn>
    </div>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import axios from 'axios';

@Component({
    name: 'LoginView',
})
export default class LoginView extends Vue {
    private insertId = '';
    private insertPw = '';
    private showEye = false;

    private userInfo = JSON.parse(sessionStorage.getItem('userInfo')!);
  

    protected mounted() {
        console.log(this.userInfo);
    }

    private valid() {
        if(this.insertId !== this.userInfo.userId) {
            alert('일치하는 ID가 없습니다.');
            return;
        }
        if(this.insertPw !== this.userInfo.userPw) {
            alert('비밀번호가 다릅니다.');
            return;
        }
        this.userInfo.loginYn = 'Y';
        sessionStorage.setItem('userInfo', JSON.stringify(this.userInfo));
        this.$router.push({name: 'MainView', });
    }

    private apiTest() {
        console.log('axios Test');
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
                console.log('여기1');
                console.log(res);
            }).catch((err) => {
                console.log('여기2');
                console.log(err);
            });
            
    }
}
</script>

<style lang="scss">
    .btn_login {
        width: 5rem;
        height: 3rem;
        background-color: #B71C1C;
        color: white;
    }
</style>
