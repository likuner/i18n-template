import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import Cookies from 'js-cookie'
import { curLang, changeLocale } from '@/locale'

export default createStore({
  state: {
    locale: curLang
  },
  mutations: {
    setLocale(state, locale) {
      state.locale = locale
      changeLocale(locale)
    }
  },
  actions: {},
  modules: {},
  plugins: [
    createPersistedState({
      key: 'i18n-template',
      paths: ['locale'],
      storage: {
        getItem: (key) => Cookies.get(key),
        setItem: (key, value) => Cookies.set(key, value, { expires: 7, secure: true }),
        removeItem: (key) => Cookies.remove(key)
      }
    })
  ]
})
