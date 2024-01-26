<script setup>
import {ref} from 'vue';
import PalZukan from '/src/components/pal-tools/PalZukan';
import EggSearch from '/src/components/pal-tools/EggSearch';
import PalDataJson from '/src/assets/PalData';

const currentId = ref(1);

function select(id)
{
    currentId.value = id;
}
</script>
<template>
    <div id="tab">
        <ul class="tabs">
            <li @click="select(1)" v-bind:class="{'active': currentId == 1}">
            タブ1ボタン
            </li>
            <li @click="select(2)" v-bind:class="{'active': currentId == 2}">
            タブ2ボタン
            </li>
            <li @click="select(3)" v-bind:class="{'active': currentId == 3}">
            タブ3ボタン
            </li>
        </ul>
        <div class="contents">
            <div v-if="currentId == 1"><PalZukan :PalData="PalDataJson"/></div>
            <div v-else-if="currentId == 2"><EggSearch/></div>
            <div v-else-if="currentId == 3"><EggSearch/></div>
        </div>
    </div>
</template>

<style>
#tab {
    margin-top: 16px;
    text-align: center;
    padding: 8px;
    border: solid black;
    background-color: gray;
}

.tabs {
    display: inline-block;
    vertical-align: middle;
    list-style: none;
    padding-left: 0px;
    margin: 0px;
    margin-top: 4px;
}
.tabs > li {
    border: 1px solid #428bca;
    border-radius: 0px;
    position: relative;
    float: left;
    padding: 8px;
    background-color: white;
    margin-left: -1px;
}
.tabs > li:hover {
    background-color: #eee;
}
.tabs > li.active {
    background-color: #428bca;
    color: #ffffff;
}
.tabs > li:first-child {
    border-radius:  8px 0px 0px 8px;
    margin-left: 0px;
}
.tabs > li:last-child {
    border-radius:  0px 8px 8px 0px;
}

.contents {
    margin-top: 16px;
    background-color: whitesmoke;
}
</style>