const langList = [
  {
    lang: 'en',
    desc: 'English'
  },
  {
    lang: 'zh-cn',
    desc: '简体中文'
  },
  {
    lang: 'ja',
    desc: '日本語'
  }
]

const langEnum = {}
langList.forEach(({ lang, desc }) => {
  langEnum[lang] = desc
})

export {
  langList,
  langEnum
}
