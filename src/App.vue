<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'App',
})
export default class App extends Vue {

private drawer = false;

private items = [
  {title: 'title1', },
  {title: 'title2', },
  {title: 'title3', },
]

protected mounted() {
  console.log('mounted');
}

}

</script>
<style lang="scss">
  .app-back {
    background-image: url("assets/header/netflex-background.jpeg");
  }
</style>
