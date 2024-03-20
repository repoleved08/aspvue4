<script setup>
import Chip from 'primevue/chip';
import Message from 'primevue/message';
import Avatar from 'primevue/avatar';
import { useAuthStore } from '@/stores/pstore';
import { onMounted } from 'vue';

const authUser = useAuthStore();

onMounted(() => {
  authUser.user
});


//console.log(authUser.user.username[0])
const username = authUser.user ? authUser.user.username : 'null';
</script>

<template>
  <section class="dark:bg-gray-800">
    <div v-if="username != null">
      <div class="card sm:flex sm:justify-center relative rounded-full py-1 text-sm leading-6 ">
        <template>
          <Message severity="success" :life="3000">
            <template #messageicon>
              <Avatar :label=username[0] shape="circle" />
            </template>
            <span class="ml-2">Welcome {{ username }}</span>
          </Message>
        </template>
      </div>
    </div>
    <div class="card sm:flex sm:justify-center relative rounded-full py-1 text-sm leading-6 " v-else>
      <template>
        <Message severity="success" :life="3000">
          <template #messageicon>
            <Avatar label="G" shape="circle" />
          </template>
          <span class="ml-2">Welcome Guest</span>
        </Message>
      </template>
    </div>

    <div class=" px-6 lg:px-8 ">

      <div class="mx-auto max-w-2xl py-12 sm:py-50 lg:py-30">
        <div class="hidden sm:mb-8 sm:flex sm:justify-center ">

          <div
            class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-900 dark:text-white ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:ring-gray-200/10 dark:hover:ring-gray-200/20">
            Announcing our next round of funding. <a href="#" class="font-semibold text-indigo-600"><span
                class="absolute inset-0" aria-hidden="true" />Read more <span aria-hidden="true">&rarr;</span></a>
          </div>

        </div>
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">Track Your Stock
          </h1>
          <p class="mt-6 text-lg leading-8 text-gray-900 dark:text-white">Anim aute id magna aliqua ad ad non deserunt
            sunt.
            Qui irure
            qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
          <div class="mt-10 flex items-center justify-center gap-x-6"> <a href="#"
              class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get
              started</a> <a href="#" class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Check stock
              <span aria-hidden="true">→</span></a> </div>
        </div>

      </div>
      <div
        class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true">
        <div
          class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
      <div class="card flex flex-wrap gap-2 mx-auto max-w-2xl px-3 lg:px-8">
        <Chip label="Apple" icon="pi pi-apple" />
        <Chip label="Facebook" icon="pi pi-facebook" />
        <Chip label="Google" icon="pi pi-google" />
        <Chip label="Microsoft" icon="pi pi-microsoft" />
        <Chip label="Microsoft" icon="pi pi-amazon" />
      </div>
    </div>


    <!-- <p class="text-center">Welcome {{ authStore.user.username }}</p>
    <div class="card">
        <Carousel :value="authStore.stockQuery" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions">
            <template #item="slotProps">
                <div class="border-1 surface-border border-round m-2  p-3">
                    <div class="mb-3">
                        <div class="relative mx-auto">
                            
                            <Tag :value="slotProps.data.symbol" :severity="getSeverity(slotProps.data.status)" class="absolute" style="left:5px; top: 5px"/>
                        </div>
                    </div>
                    <div class="mb-3 font-medium">{{ slotProps.data.symbol }}</div>
                    <div class="flex justify-content-between align-items-center">
                        <div class="mt-0 font-semibold text-xl">${{ slotProps.data.symbol }}</div>
                        <span>
                            <Button icon="pi pi-heart" severity="secondary" outlined />
                            <Button icon="pi pi-shopping-cart" class="ml-2"/>
                        </span>
                    </div>
                </div>
            </template>
  </Carousel>
  </div>
  </template> -->

    <!-- <div class="p-3 mx-7 ml-6">
      <fwb-avatar initials="JD" />
    </div>
    <div class="container">
      <fwb-card href="#" v-if="authStore.stockQuery.length">
        <div class="p-5" v-for="(stock, index) in authStore.stockQuery" :key="index">
          <div class="container flex flex-column justify-between space-x-2 space-y-2 flex-wrap">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {{ stock.companyName }}
            </h5>
            <p>
              {{stock.id}} | {{ stock.lastDiv }} | {{ stock.marketCap }}
            </p>
            <p> {{ stock.industry }} | {{ stock.purchase }} | {{ stock.symbol }} </p>
  
            <p class=" text-xs ">
              {{ stock.comments }}
            </p>
          </div>
         
        </div>
      </fwb-card>
    </div> -->


  </section>

</template>

<style scoped></style>
