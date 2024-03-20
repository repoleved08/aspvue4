import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import apiClient from '@/axios';

export const useAuthStore = defineStore('auth', {
  id: 'detail',
  state: () => ({
    authUser: JSON.parse(localStorage.getItem('user')) || null,
    token: localStorage.getItem("token") || null,
    //Errors
    authErrors: null,
    isLoggedIn: false,
    stockList: [],
    portfolio: [],
    detail: null
  }),
  getters: {
    user: (state) => state.authUser,
    errors: (state) => state.authErrors,
    stockQuery: (state) => state.stockList,
    callPortfolio: (state) => state.portfolio,
    callDetailStock: (state) => state.detail,
  },
  actions: {
    async handleLogin(data) {
      this.authErrors = null;
      try {
        const response = await apiClient.post("/api/account/login", {
          email: data.email,
          password: data.password
        });
        const userData = response.data;
        const token = response.headers['authorization'] || response.data.token; // Adjust this line based on your API response

        this.authUser = userData;
        this.token = token;

        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('token', token);
        this.router.push("/");
      } catch (err) {
        if (err) {
          // Assuming the error response has an 'errors' object, format it as needed
          this.authErrors = err.response.data;
        } else {
          // Fallback error message
          this.authErrors.push('An error occurred during login. Please try again.');
        }
      }
    },
    async handleRegistration(data) {
      this.authErrors = null;
      try {
        const res = await apiClient.post("/api/account/register", {
          userName: data.userName,
          email: data.email,
          password: data.password
        });
        const userData = res.data;
        const token = res.headers['authorization'] || res.data.token; // Adjust this line based on your API response

        this.authUser = userData;
        this.token = token;

        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('token', token);
        this.router.push("/"); // Ensure you have $router injected or use router instance directly
      } catch (err) {
        if (err) {
          // Assuming the error response has an 'errors' object, format it as needed
          this.authErrors = err.response.data[0].description;
          console.log(err.response.data[0].description)
        } else {
          // Fallback error message
          this.authErrors.push('An error occurred during registratipn. Please try again.');
        }
      }
    },
    async handleLogout() {
      localStorage.clear();
      this.authUser = null;
      this.router.push("/");
    },
    async handleStock() {
      if (!this.token) {
        console.error('User is not authenticated.');
        return; // Exit the function if the user is not authenticated
      }

      this.stockList = [];
      try {
        const result = await apiClient.get("/api/Stock");
        console.log('Raw API response:', result); // Log the entire API response for inspection
        if (result.data) {
          this.stockList = result.data; // Assuming result.data is the correct path to the stock list
          console.log('Parsed stock list:', this.stockList);
        } else {
          console.error('API response does not contain data.');
        }
      } catch (error) {
        console.error('Error fetching stock list:', error);
        // Handle the error appropriately, e.g., show an error message to the user
      }
    },
    async handlePortfolio() {
      if (!this.token) {
        console.error('User is not authenticated.');
        return;
      }
      this.portfolio = [];
      try {
        const portfolioList = await apiClient.get("/api/portfolio/portfolio");
        console.log('Raw API response From porfolio endpoint:', portfolioList); 
        if (portfolioList.data) {
          this.portfolio = portfolioList.data; 
          console.log('Parsed portfolio list (porfolio endpoint):', this.portfolio);
        } else {
          console.error('API response does not contain data (porfolio endpoint).');
        }
      } catch (error) {
        console.error('Error fetching portfolio list (porfolio endpoint):', error);
      }
      
    },
    async handleDetails(id) {
      this.detail = [];
      try {
        const result = await apiClient.get("/api/Stock/?:this.id");
        console.log('Raw API response detal:', result); // Log the entire API response for inspection
        if (result.data) {
          this.detail = result.data; // Assuming result.data is the correct path to the stock list
          console.log('Parsed stock detal:', this.detail);
        } else {
          console.error('API response does not contain data.');
        }
      } catch (error) {
        console.error('Error fetching stock list:', error);
        // Handle the error appropriately, e.g., show an error message to the user
      }
    },
  }
})
