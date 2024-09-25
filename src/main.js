import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { OktaAuth } from '@okta/okta-auth-js'
import OktaVue from '@okta/okta-vue'

import sampleConfig from '@/config'

const app = createApp(App)
const oktaAuth = new OktaAuth(sampleConfig.oidc)

app.use(router)
app.use(OktaVue, { oktaAuth })
app.mount('#app')
