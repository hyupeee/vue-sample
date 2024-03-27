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
    </div>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
    name: 'LoginView',
})
export default class LoginView extends Vue{
    private insertId = '';
    private insertPw = '';
    private showEye = false;

    private valid() {
        if(this.insertId !== sessionStorage.getItem('userId')) {
            alert('일치하는 ID가 없습니다');
        } else if(this.insertPw !== sessionStorage.getItem('userPw')) {
            alert('비밀번호가 다릅니다.');
        } else {
            sessionStorage.setItem('loginYn', 'Y');
            this.$router.replace({name: 'home'});
        }
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
