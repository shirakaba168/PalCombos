<script setup>
</script>

<script setup>
    import { defineProps } from 'vue';
    import PalConsts from '/src/components/pal-tools/PalConsts.js'

    const props = defineProps({selectedPalInfo:Object})

    function getElementType(palInfo)
    {
        let types = [];
        if (PalConsts.elementTypeDic[palInfo.ElementType1])
        {
            types.push(PalConsts.elementTypeDic[palInfo.ElementType1]);
        }
        if (PalConsts.elementTypeDic[palInfo.ElementType2])
        {
            types.push(PalConsts.elementTypeDic[palInfo.ElementType2]);
        }
        return types.join(" ");
    }
</script>

<template>
    <v-container>
        <table class="palInfo">
            <tbody>
                <tr>
                    <th class="name" colspan="2">{{ props.selectedPalInfo.Name }}</th>
                </tr>
                <tr>
                    <td class="c1">図鑑No</td>
                    <td>{{ props.selectedPalInfo.ZukanIndex }}</td>
                </tr>
                <tr>
                    <td class="c1">タイプ</td>
                    <td>{{ getElementType(props.selectedPalInfo) }}</td>
                </tr>
                <tr>
                    <td class="c1">作業適正</td>
                    <td>
                        <v-row justify="start" class="pa-0 ma-0">
                            <v-col cols="4" v-if="props.selectedPalInfo.WorkSuitability_EmitFlame > 0" class="pa-1 ma-0"><div class="typeElement"><ul><li>🔥</li><li>火おこし</li><li>{{ props.selectedPalInfo.WorkSuitability_EmitFlame }}</li></ul></div></v-col>
                            <v-col cols="4" v-if="props.selectedPalInfo.WorkSuitability_Watering > 0"  class="pa-1 ma-0"><div class="typeElement"><ul><li>💦</li><li>水やり</li><li>{{ props.selectedPalInfo.WorkSuitability_Watering }}</li></ul></div></v-col>
                            <v-col cols="4" v-if="props.selectedPalInfo.WorkSuitability_Seeding > 0"  class="pa-1 ma-0"><div class="typeElement"><ul><li>🌱</li><li>種まき</li><li>{{ props.selectedPalInfo.WorkSuitability_Seeding }}</li></ul></div></v-col>
                            <v-col cols="4" v-if="props.selectedPalInfo.WorkSuitability_GenerateElectricity > 0"  class="pa-1 ma-0"><div class="typeElement"><ul><li>⚡</li><li>発電</li><li>{{ props.selectedPalInfo.WorkSuitability_GenerateElectricity }}</li></ul></div></v-col>
                            <v-col cols="4" v-if="props.selectedPalInfo.WorkSuitability_Handcraft > 0"  class="pa-1 ma-0"><div class="typeElement"><ul><li>✋</li><li>手作業</li><li>{{ props.selectedPalInfo.WorkSuitability_Handcraft }}</li></ul></div></v-col>
                            <v-col cols="4" v-if="props.selectedPalInfo.WorkSuitability_Collection > 0"  class="pa-1 ma-0"><div class="typeElement"><ul><li>🍃</li><li>採集</li><li>{{ props.selectedPalInfo.WorkSuitability_Collection }}</li></ul></div></v-col>
                            <v-col cols="4" v-if="props.selectedPalInfo.WorkSuitability_Deforest > 0"  class="pa-1 ma-0"><div class="typeElement"><ul><li>🪵</li><li>伐採</li><li>{{ props.selectedPalInfo.WorkSuitability_Deforest }}</li></ul></div></v-col>
                            <v-col cols="4" v-if="props.selectedPalInfo.WorkSuitability_Mining > 0"  class="pa-1 ma-0"><div class="typeElement"><ul><li>⛏️</li><li>採掘</li><li>{{ props.selectedPalInfo.WorkSuitability_Mining }}</li></ul></div></v-col>
                            <v-col cols="4" v-if="props.selectedPalInfo.WorkSuitability_ProductMedicine > 0"  class="pa-1 ma-0"><div class="typeElement"><ul><li>🥣</li><li>製薬</li><li>{{ props.selectedPalInfo.WorkSuitability_ProductMedicine }}</li></ul></div></v-col>
                            <v-col cols="4" v-if="props.selectedPalInfo.WorkSuitability_Cool > 0"  class="pa-1 ma-0"><div class="typeElement"><ul><li><div  class="emojiWhite">❄️</div></li><li>冷却</li><li>{{ props.selectedPalInfo.WorkSuitability_Cool }}</li></ul></div></v-col>
                            <v-col cols="4" v-if="props.selectedPalInfo.WorkSuitability_Transport > 0"  class="pa-1 ma-0"><div class="typeElement"><ul><li>📦</li><li>運搬</li><li>{{ props.selectedPalInfo.WorkSuitability_Transport }}</li></ul></div></v-col>
                            <v-col cols="4" v-if="props.selectedPalInfo.WorkSuitability_MonsterFarm > 0"  class="pa-1 ma-0"><div class="typeElement"><ul><li>🧑‍🌾</li><li>牧場</li><li>{{ props.selectedPalInfo.WorkSuitability_MonsterFarm }}</li></ul></div></v-col>
                        </v-row>
                    </td>
                </tr>
                <tr>
                    <td class="c1">食事量</td>
                    <td>
                        <ul class="mealList">
                            <li :class="{'meal':true, 'emojiBlack': props.selectedPalInfo.FoodAmount < 1}">🍖</li>
                            <li :class="{'meal':true, 'emojiBlack': props.selectedPalInfo.FoodAmount < 2}">🍖</li>
                            <li :class="{'meal':true, 'emojiBlack': props.selectedPalInfo.FoodAmount < 3}">🍖</li>
                            <li :class="{'meal':true, 'emojiBlack': props.selectedPalInfo.FoodAmount < 4}">🍖</li>
                            <li :class="{'meal':true, 'emojiBlack': props.selectedPalInfo.FoodAmount < 5}">🍖</li>
                            <li :class="{'meal':true, 'emojiBlack': props.selectedPalInfo.FoodAmount < 6}">🍖</li>
                            <li :class="{'meal':true, 'emojiBlack': props.selectedPalInfo.FoodAmount < 7}">🍖</li>
                            <li :class="{'meal':true, 'emojiBlack': props.selectedPalInfo.FoodAmount < 8}">🍖</li>
                            <li :class="{'meal':true, 'emojiBlack': props.selectedPalInfo.FoodAmount < 9}">🍖</li>
                            <li :class="{'meal':true, 'emojiBlack': props.selectedPalInfo.FoodAmount < 10}">🍖</li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    </v-container>
</template>

<style>
table.palInfo{
  width:440px;
}
div.typeElement {
    display: table;
    width:100px;
    font-size:12px;
    text-align: center;
    user-select: none;
}
div.typeElement > ul {
    border:solid 1px #69c;
    border-radius: 4px;
}
div.typeElement > ul > li {
    display: table-cell;
    width:auto;
    font-size:12px;
    padding: 2px;
    vertical-align:middle;
    text-align: left;
    width:56px;
}
div.typeElement > ul > li:first-child {
    width:24px;
    font-size:14px;
    text-align: center;
    background-color: rgb(0, 0, 0);
}
div.typeElement > ul > li:last-child {
    width:1em;
    text-align: right;
    font-size:13px;
    font-weight: bold;
}
th.name{
    height: fit-content;
    font-size:18px;
    line-height: 1.2em;
    background-color: #69c;
    color: white;
}
td.c1 {
    width:90px;
    background-color: #def;
}

td > v-row {
    background-color: red;
}

.emojiWhite {
    color:transparent;
    text-shadow: 0 0 0 white;
}
.emojiBlack {
    color:transparent;
    text-shadow: 0 0 0 black;
}

ul.mealList{
    display: table;
    user-select: none;
}
li.meal {
    display: table-cell;
    padding: 20px 30px;
    text-align: center;
    margin: 0;
    padding: 0;
}
</style>