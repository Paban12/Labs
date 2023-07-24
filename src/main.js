import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import LotusDashboard from './plugins/lotus-dashboard'
import router from './router'
import store from './store'

// import './assets/scss/wass.scss'
// import './assets/scss/style.scss'

createApp(App).use(router).use(store).use(LotusDashboard).mount('#app')
