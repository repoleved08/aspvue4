<template>
    <section class="bg-gray-50  dark:bg-gray-900">
        <div class="flex flex-col items-center max-w-md justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"> <img
                    class="w-8 h-8 mr-2" src="../assets/logo.svg"> TechX </a>
            <div
                class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">

                    <form class="space-y-4 md:space-y-6" @submit.prevent="authStore.handleLogin(form)">
                        <div v-if="authStore.errors">
                            <span class="text-red-400 text-sm">{{ authStore.errors }}</span>
                        </div>
                        <div> <label for="password"
                                class="block mb-2 text-sm font-medium py-2 text-gray-900 dark:text-white">Your
                                email</label>
                            <input type="email" name="email" id="email" v-model="form.email"
                                placeholder="norman@tech.com"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required>

                        </div>
                        <div> <label for="password"
                                class="block mb-2 text-sm font-medium py-2 text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" v-model="form.password"
                                placeholder="••••••••"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required>
                        </div>
                        <button type="submit"
                            class="w-full text-white bg-blue-600 mt-4 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign
                            In</button>
                        <p class="text-sm font-light py-2 text-gray-500 dark:text-gray-400"> Don't have an account? <router-link
                                :to="{name: 'register'}"
                                class="font-medium text-blue-600 hover:underline dark:text-primary-500">Register
                                here</router-link> </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/pstore';
import { useToast } from "vue-toastification";

const authStore = useAuthStore();
const toast = useToast();


const form = ref({
    email: '',
    password: ''
});


toast.success("My toast content", {
    timeout: 4000
});


</script>
