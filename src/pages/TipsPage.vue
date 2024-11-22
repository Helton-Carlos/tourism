<template>
  <q-page class="row items-center justify-evenly">
    {{ TipsPage }}
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineOptions({
  name: 'TipsPage'
});

const TipsPage = ref('TipsPage')
</script>
