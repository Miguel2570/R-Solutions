import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { apolloClient } from './graphql'
import router from './router'
import i18n from './i18n'
import App from './App.vue'

import './assets/css/style.css' 

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App),
})

app.use(router)
app.use(i18n)
app.mount('#app')