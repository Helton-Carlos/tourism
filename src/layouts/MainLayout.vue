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

          <q-toolbar-title>
            <q-item
              href="/"
            >
              <img
                class="q-pt-md"
                src="../assets/imagens/tourism-logo.png"
              />
            </q-item>
          </q-toolbar-title>

          <EssentialPath
            class="text-dark"
            v-for="essential in list"
            :key="essential.title"
            v-bind="essential"
          />
        </q-toolbar>
      </div>

      <q-item
        clickable
        href="/login"
        class="text-dark"
      >
        <q-item-section
          avatar
        >
          <q-icon name="person_add" />
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-weight-medium">Login</q-item-label>
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

        <EssentialPath
          v-for="essential in list"
          :key="essential.title"
          v-bind="essential"
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
import EssentialPath from 'components/EssentialPath.vue';

defineOptions({
  name: 'MainLayout'
});

const list = [
  {
    title: 'Hospedagens',
    icon: 'bed',
    path: '/hospedagens'
  },
  {
    title: 'Estados',
    icon: 'map',
    path: '/estados'
  },
  {
    title: 'Promoções',
    icon: 'percent',
    path: '/promocoes'
  },
  {
    title: 'Dicas',
    icon: 'lightbulb',
    path: '/dicas'
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
