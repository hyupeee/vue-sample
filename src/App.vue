<template>
  <div id="app">
    <MainHeader />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainHeader from './components/MainHeader.vue';


@Component({
  name: 'mainheader',
  components: { MainHeader, },
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
