<script setup>
</script>

<script setup>
    import { defineProps, ref, reactive} from 'vue';
    import PalInfo from '/src/components/pal-tools/PalInfo'
    import {mdiSwapHorizontal } from '@mdi/js'
    const props = defineProps({
        PalData:Array
    })

    // 一旦50音順
    const tempSortedPalData = props.PalData.toSorted((a,b)=>{
        let result = a.ZukanIndex - b.ZukanIndex;
        if (result == 0)
        {
            result = a.ZukanIndexSuffix ? 1 : -1;
        }
        return result;
    });
    const sortedPalData = reactive(tempSortedPalData);

    const isSortedByName = ref("false");

    function sortPalList()
    {
        isSortedByName.value ? sortByZukanIndex() : sortByName();
        isSortedByName.value = !isSortedByName.value;
    }

    function sortByName()
    {
        sortedPalData.sort((a,b)=>{
            let result = a.ZukanIndex - b.ZukanIndex;
            if (result == 0)
            {
                result = a.ZukanIndexSuffix ? 1 : -1;
            }
            return result;
        });
    }

    function sortByZukanIndex()
    {
        sortedPalData.sort((a,b)=>{
            return a.Name.localeCompare(b.Name, 'ja');
        });
    }

    function selectPal(indexOrder){
        selectedPalInfo.value = sortedPalData.find((palInfo)=>palInfo.IndexOrder == indexOrder);
        console.log(selectedPalInfo.value.Name);
    }

    const selectedPalInfo = ref(null);
    selectPal(27); // モコロン(図鑑No1)選択
</script>

<template>
    <v-container class="pa-0 ma-4">
        <h1 class="contentTitle">パル図鑑</h1>
    </v-container>

    <v-container class="pa-0 ma-0 d-flex flex-row">
        <v-container style="width:260px; min-width: 260px;">
            <div class="palListTitle">
                <v-container class="pa-0 ma-0">パル一覧</v-container>
                <v-btn @click="sortPalList" color="white" height="24px" variant="outlined" class="pa-0 ma-0">
                    <div style="font-size:12px; margin-left: 0px;">
                        （五十音順<v-icon :icon="mdiSwapHorizontal "/>図鑑順）
                    </div>
                </v-btn>
            </div>
            <div class="palList">
                <v-list style="max-height: 590px" class="pa-0 ma-0 overflow-y-auto">
                    <v-divider></v-divider>
                    <v-container v-for="palInfo in sortedPalData" :key="palInfo" class="pa-0 ma-0">
                        <v-btn @click="selectPal(palInfo.IndexOrder)" width="100%" class="palListBtn" color="#fff">
                            <div class="palListItemTable">
                                <div class="palListIndex">{{palInfo.ZukanIndex + palInfo.ZukanIndexSuffix}}</div>
                                <div class="palListName">{{palInfo.Name}}</div>
                            </div>
                        </v-btn>
                        <v-divider></v-divider>
                    </v-container>
                </v-list>
            </div>
        </v-container>
        <PalInfo :selectedPalInfo="selectedPalInfo"/>
    </v-container>
</template>

<style>
.palListItemTable{
    display: table;
    padding: 4px;
    user-select: none;
    width:180px;
}
.palListBtn::before{
    background-color: #def;
}
.palListIndex{
    display: table-cell;
    text-align: left;
    font-size:12px;
    height: auto;
    vertical-align: middle;
    width:32px;
}
.palListName {
    display: table-cell;
    padding-left: 8px;
    text-align: left;
}
.contentTitle{
    padding-left: 8px;
    border-left: solid 8px #69c;
    border-bottom: solid 1px #69c;
}
.palListTitle {
    height: fit-content;
    padding: 4px;
    border: solid 1px #69c;
    text-align: center;
    font-size:18px;
    font-weight: bold;
    line-height: 1.2em;

    background-color: #69c;
    color: white;
}
.palList {
    border: solid 1px #69c;
    border-top: none;
}
</style>