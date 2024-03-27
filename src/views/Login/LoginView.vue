<template>
  <v-container class="mt-10">
    <div class="ml-10 mr-10">
        <h2>넷플릭스 로그인</h2>
        <v-form>
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
            <v-btn
                class="white--text" 
                color="#B71C1C" 
                elevation="0" 
                depressed
                :type="submit"
            >로그인</v-btn>
        </v-form>
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

    private valid(str: string) {
        console.log('valid');
        if('id') {
            console.log('id');
        }
    }
}
</script>

<style lang="scss">

</style>
