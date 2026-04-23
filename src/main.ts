// import './assets/reset.css'
import './assets/style.css'
import 'aos/dist/aos.css'
import { createApp } from 'vue'
import App from './App.vue'
import AOS from 'aos';

AOS.init({});

createApp(App).mount('#app')
