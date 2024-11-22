<template>
  <q-page class="row items-center justify-evenly">
    {{ AccommodationPage }}
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineOptions({
  name: 'AccommodationPage'
});

const AccommodationPage = ref('AccommodationPage')
</script>
