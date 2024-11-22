<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="flex justify-between">
      <div>
        <q-toolbar class="flex item-center">
          <q-btn
            class="text-brown"
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
          />

          <q-toolbar-title class="text-dark">
            <h1 class="text-h4">Tourism</h1>
          </q-toolbar-title>
        </q-toolbar>
      </div>

      <EssentialLink
        class="text-dark"
        v-for="link in linksList"
        :key="link.title"
        v-bind="link"
      />

      <q-item
        clickable
        href="/Login"
        class="text-dark"
      >
        <q-item-section
          avatar
        >
          <q-icon name="person_add" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Login</q-item-label>
        </q-item-section>
      </q-item>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Tourism
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink, { EssentialLinkProps } from 'components/EssentialLink.vue';

defineOptions({
  name: 'MainLayout'
});

const linksList: EssentialLinkProps[] = [
  {
    title: 'Hospedagens',
    icon: 'bed',
    link: '/hospedagens'
  },
  {
    title: 'Estados',
    icon: 'map',
    link: '/estados'
  },
  {
    title: 'Promoções',
    icon: 'percent',
    link: '/promocoes'
  },
  {
    title: 'Dicas',
    icon: 'lightbulb',
    link: '/dicas'
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
