<template>
  <q-page class="row items-center justify-evenly">
    <q-img
      src="https://picsum.photos/500/300"
      spinner-color="blue"
      style="height: 350px; max-width: 350px"
    />
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Todo, Meta } from 'src/types/models';
import ExampleComponent from 'components/ExampleComponent.vue';

defineOptions({
  name: 'IndexPage'
});

const todos = ref<Todo[]>([
  {
    id: 1,
    content: 'ct1'
  },
  {
    id: 2,
    content: 'ct2'
  },
  {
    id: 3,
    content: 'ct3'
  },
  {
    id: 4,
    content: 'ct4'
  },
  {
    id: 5,
    content: 'ct5'
  }
]);

const meta = ref<Meta>({
  totalCount: 1200
});
</script>
