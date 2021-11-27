(async () => {
  const psl = chrome.extension.getURL('modules/publicsuffixlist.js-1.0.0/publicsuffixlist.js')
  const publicSuffixList = await import(psl)
  publicSuffixList.main(/* chrome: no need to pass it */)
  const pc = chrome.extension.getURL('modules/punycode.js-2.0.0/punycode.js')
  const punycode = await import(pc)
  punycode.main(/* chrome: no need to pass it */)
  const src = chrome.extension.getURL('src/js/background.js')
  const contentScript = await import(src)
  contentScript.main(/* chrome: no need to pass it */)
})()
