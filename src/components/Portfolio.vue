
<template>
  <section class="bg-gray-50 dark:bg-gray-800">
    <div class="card flex justify-center">
      <DataTable :value="usePortfolio.callPortfolio" sortMode="multiple" tableStyle="min-width: 50rem">
        <Column field="id" header="Id" sortable style="width: 25%"></Column> 
        <Column field="symbol" header="Symbol" sortable style="width: 25%"></Column>
        <Column field="industry" header="Industry" sortable style="width: 25%"></Column>
        <Column field="companyName" header="Company Name" sortable style="width: 25%"></Column> 
        <Column field="lastDiv" header="Last Div" sortable style="width: 25%"></Column> 
        <Column field="marketCap" header="Market Cap" sortable style="width: 25%"></Column> 
        <Column field="purchase" header="Purchase" sortable style="width: 25%"></Column> 
      </DataTable>
  </div>
  </section>
 
</template>

<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { onMounted } from 'vue';
import { useAuthStore } from '@/stores/pstore';

const usePortfolio = useAuthStore();

onMounted(() => {
    usePortfolio.handlePortfolio();
});


</script>
