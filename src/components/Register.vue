<template>
    <section class="bg-gray-50  dark:bg-gray-900">
        <div class="flex flex-col items-center max-w-md justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"> 
            <a href="#"
                class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"> <img
                    class="w-8 h-8 mr-2" src="../assets/logo.svg"
                    > TechX </a>
            <div
                class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    
                    <form class="space-y-4 md:space-y-6" @submit.prevent="regStore.handleRegistration(form)" >
                        <div v-if="regStore.errors" >
                            <span class="text-red-400 text-xs">{{regStore.errors}}</span>
                        </div>
                        <div> <label for="email"
                                class="block mb-2 text-sm font-medium py-2 text-gray-900 dark:text-white">Username</label>
                            <input type="text" name="username" v-model="form.userName" id="username"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="norman" required>
                               
                             </div>
                        <div> <label for="password"
                                class="block mb-2 text-sm font-medium py-2 text-gray-900 dark:text-white">Your email</label>
                            <input type="email" name="email" id="email" v-model="form.email" placeholder="norman@tech.com"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required> </div>
                        <div> <label for="confirm-password"
                                class="block mb-2 text-sm font-medium py-2 text-gray-900 dark:text-white">Password</label> <input type="password" name="password" v-model="form.password"
                                id="password" placeholder="••••••••"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required> </div>
                        <div class="flex py-2 items-start">
                            <div class="flex items-center h-5"> <input id="terms" aria-describedby="terms"
                                    type="checkbox"
                                    class="w-4 h-4  border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                    required> </div>
                            <div class="ml-3 text-xs"> <label for="terms"
                                    class="font-light text-gray-500  dark:text-gray-300">I accept the <a
                                        class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                        href="#">Terms and Conditions</a></label> </div>
                        </div> <button type="submit"
                            class="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create
                            an account</button>
                        <p class="text-sm font-light py-2 text-gray-500 dark:text-gray-400"> Already have an account? <router-link
                                :to="{name: 'login'}"
                                class="font-medium text-blue-600 hover:underline dark:text-primary-500">Login
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

const regStore = useAuthStore();
const form = ref({
    userName: '',
    email: '',
    password: ''
});


</script>
