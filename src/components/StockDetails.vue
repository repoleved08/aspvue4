<template>
  <div>
    
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/pstore';
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const stockDetail = useAuthStore()

onMounted(() => {
    stockDetail.handleDetails(route.params.id)
});

console.log(stockDetail.callDetailStock);

watch(() => route.params.id, (newId) => {
  stockDetail.handleDetails(newId);
});
</script>

<style>

</style>
