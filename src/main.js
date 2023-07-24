import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import LotusDashboard from './plugins/lotus-dashboard'
import router from './router'

// import './assets/scss/wass.scss'
// import './assets/scss/style.scss'

createApp(App).use(router).use(LotusDashboard).mount('#app')
