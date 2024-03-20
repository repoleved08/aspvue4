<template>
        <section class="bg-gray-50 dark:bg-gray-800">
            <div class="card flex flex-wrap grid md:grid-cols-2 lg:grid-cols-4 gap-2 mx-auto px-6 lg:px-8"
                v-if="stockList.stockQuery.length">
                <div v-for="(stock, index) in stockList.stockQuery" :key="index" class="">
                    <router-link :to="{ name: 'StockDetails', params: { id: stock.id } }">
                        <Card class="mt-4 p-card ">
                            <template #header>
                                <div class="justify-center">
                                    <Badge class="ml-5" :value=stock.id></Badge>
                                    <Avatar :label=stock.symbol class="mr-2 ml-2 mt-4" />
                                    <Tag severity="success" :value=stock.companyName></Tag>
                                </div>
                            </template>
                            <template #title> {{ stock.companyName }} </template>
                            <template #subtitle>Industry: {{ stock.industry }}</template>
                            <template #content>
                                <p>Purchase: <span class="text-blue-400">{{ stock.purchase }}</span> </p>
                                <p>Last Dividend: <span class="text-green-400">{{ stock.lastDiv }}</span> </p>
                                <p class="m-0 ">
                                    Market Cap: <span class="text-blue-700">${{ value=stock.marketCap }}</span>
                                </p>
                            </template>
                        </Card>
                    </router-link>
                </div>
            </div>
            <div class="mx-auto max-w-2xl px-6 lg:px-8" v-else>
                <h3 class="text-blue-400">No stock Found!</h3>
            </div>
        </section>
  
</template>

<script setup>
import Card from 'primevue/card';
import Avatar from 'primevue/avatar';
import Tag from 'primevue/tag';
import { onMounted } from 'vue';
import { useAuthStore } from '@/stores/pstore';
import Badge from 'primevue/badge';

const stockList = useAuthStore()

onMounted(() => {
    stockList.handleStock()
});



</script>
