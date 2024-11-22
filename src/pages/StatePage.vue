<template>
  <q-page class="row items-center justify-evenly">
    {{ StatePage }}
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineOptions({
  name: 'StatePage'
});

const StatePage = ref('StatePage')
</script>
