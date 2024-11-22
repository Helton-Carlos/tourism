<template>
  <q-item
    clickable
    :href="path"
    class="text-dark"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label class="text-weight-medium">{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
defineOptions({
  name: 'EssentialPath'
});

export interface EssentialPathProps {
  title: string;
  path?: string;
  icon?: string;
};

withDefaults(defineProps<EssentialPathProps>(), {
  path: '#',
  icon: '',
});
</script>
