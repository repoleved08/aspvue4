<template>
  <section class="bg-gray-50 dark:bg-gray-800">
    <div class="card relative">
      <Menubar :model="items">

        <template #item="{ item, props, hasSubmenu, root }">
          <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
            <a v-ripple :href="href" v-bind="props.action" @click="navigate">
              <span :class="item.icon" />
              <span class="ml-2">{{ item.label }}</span>
            </a>
          </router-link>
          <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
            <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down ml-2" />
            <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
          </a>
          <template>
            <router-link :to="{ name: 'stock' }">Stock List</router-link>
          </template>
        </template>

        <template #end>
          <div class="flex align-items-center gap-2" v-if="!authUser.user">
            <!-- <InputText placeholder="Search" size="small" type="text" class="w-8rem sm:w-auto" /> -->
            <Button icon="pi pi-search" severity="info" size="small" text rounded aria-label="Search" />
            <router-link :to="{ name: 'login' }">
              <Button icon="pi pi-user" label="Account" size="small" severity="info" text rounded aria-label="User" />
            </router-link>


          </div>
          <div class="flex align-items-center gap-2" v-else>
            <router-link :to="{ name: 'portfolio' }">
              <Button type="button" severity="secondary" text badgeSeverity="info" label="Portfolio" size="small"
                :badge="authUser.callPortfolio.length.toString()" />
            </router-link>
            <!-- <InputText placeholder="Search" size="small" type="text" class="w-8rem sm:w-auto" /> -->
            <Button icon="pi pi-search" severity="info" size="small" text rounded aria-label="Search" />
            <Button label="Logout" size="small" @click="authUser.handleLogout" severity="danger" text />

          </div>
        </template>
      </Menubar>
    </div>
  </section>

</template>

<script setup>

import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Badge from 'primevue/badge';
import Avatar from 'primevue/avatar';
import Menubar from 'primevue/menubar';
import { onMounted, ref } from "vue";
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/pstore';

const authUser = useAuthStore();
const router = useRouter();

authUser.handlePortfolio();


const items = ref([
  {
    label: 'Techx',
    icon: 'pi pi-building',
    command: () => {
      router.push('/');
    }
  },
  {
    label: 'Stock',
    icon: 'pi pi-stock',
    command: () => {
      router.push('/stock');
    }
  },
  {
    label: 'Services',
    icon: 'pi pi-link',
    items: [
      {
        label: 'Components',
        icon: 'pi pi-bolt'
      },
      {
        label: 'Blocks',
        icon: 'pi pi-server'
      },
      {
        label: 'UI Kit',
        icon: 'pi pi-pencil'
      },
      {
        label: 'Templates',
        icon: 'pi pi-palette',
        items: [
          {
            label: 'Apollo',
            icon: 'pi pi-palette'
          },
          {
            label: 'Ultima',
            icon: 'pi pi-palette'
          }
        ]
      }
    ]
  }
]);

</script>
