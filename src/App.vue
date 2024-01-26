<script setup>
import {ref} from 'vue';
import PalDataJson from '/src/assets/PalData';
import PalZukan from './components/pal-tools/PalZukan.vue';
import EggSearch from '/src/components/pal-tools/EggSearch';

const currentTab = ref('zukan');

function selectTab(value){
  currentTab.value = value.id;
}
</script>

<template>
  <v-app>
    <v-system-bar color="black">
      PalWorld Tool
    </v-system-bar>
    <!-- <v-app-bar color="grey-darken-3">
      <v-app-bar-title>
        Application Bar
      </v-app-bar-title>
    </v-app-bar> -->

    <v-navigation-drawer permanent>
      <v-list @click:select="selectTab">
        <v-list-item title="パル図鑑" value="zukan"></v-list-item>
        <v-list-item title="親候補検索" value="eggSearch"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
        <div v-if="currentTab == 'zukan'"><PalZukan :PalData="PalDataJson"/></div>
        <div v-if="currentTab == 'eggSearch'"><EggSearch/></div>
    </v-main>
  </v-app>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

table {
  display: table;
  border-spacing: 2px;
  margin: 0;
  padding: 0;
  border-collapse: collapse;
  border:solid 1px #69c;
  text-align: left;
}
table > tbody > tr,
table > tbody > tr > td {
  border:solid 1px #69c;
}
table > tbody > tr > td,
table > tbody > tr > th {
  display: table-cell;
  padding:4px;
}
</style>
