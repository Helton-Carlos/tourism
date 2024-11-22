<template>
  <q-item
    clickable
    :href="Router"
    class="text-dark"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
defineOptions({
  name: 'EssentialRouter'
});

export interface EssentialRouterProps {
  title: string;
  Router?: string;
  icon?: string;
};

withDefaults(defineProps<EssentialRouterProps>(), {
  Router: '#',
  icon: '',
});
</script>
