import { createI18n } from 'vue-i18n'
import { en, ja, zh } from './lang'

const i18n = createI18n({
  locale: zh.name,
  messages: {
    [en.name]: en,
    [ja.name]: ja,
    [zh.name]: zh
  },
  legacy: false,
  globalInjection: true
})

export default i18n
