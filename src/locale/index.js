import { createI18n } from 'vue-i18n'
import { en, ja, zh } from './lang'
import { setAppTitle } from '@/utils'

export const curLang = zh.name

const i18n = createI18n({
  locale: curLang,
  messages: {
    [en.name]: en,
    [ja.name]: ja,
    [zh.name]: zh
  },
  legacy: false,
  globalInjection: true
})

setAppTitle(i18n.global.t('i.appTitle'))

export function changeLocale(locale) {
  const lang = locale || curLang
  i18n.global.locale.value = lang
  setAppTitle(i18n.global.t('i.appTitle'))
}

export default i18n
