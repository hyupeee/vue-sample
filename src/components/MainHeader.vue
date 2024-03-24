<template>
  <v-app-bar dense>
        <v-toolbar-title>
            <figure >
                <img class="main_img" src="@/assets/header/netflex.png">
            </figure>
        </v-toolbar-title>
  </v-app-bar>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class MainHeader extends Vue {
    protected mounted() {
        console.log('header mounted');
    }
}
</script>
<style lang="scss">
    .main_img {
        width: 5.5625rem; 
    }
</style>
