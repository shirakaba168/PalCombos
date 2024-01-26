<script setup>
import {ref} from 'vue'

const msg = ref("HelloWorld!")
</script>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input v-model="msg" placeholder="type text">
  </div>
</template>
