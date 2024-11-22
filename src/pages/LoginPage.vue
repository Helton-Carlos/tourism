<template>
  <q-page class="row items-center justify-evenly">
    {{ LoginPage }}
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineOptions({
  name: 'LoginPage'
});

const LoginPage = ref('LoginPage')
</script>
