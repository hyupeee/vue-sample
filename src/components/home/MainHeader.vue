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
            <v-btn class="white--text" color="#B71C1C" elevation="0" depressed v-on:click="login()">
                로그인
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
    protected mounted() {
        console.log('header mounted');
    }

    private login() {
        console.log('login start');

        this.$router.push({name: 'LoginView',});
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
