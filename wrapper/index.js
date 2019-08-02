const PAGES = [
  {
    id: 'home',
    paths: ['/', '/home-aniv']
  },
  {
    id: 'cart',
    paths: ['/cart']
  },
  {
    id: 'product',
    paths: ['/products']
  }
]

function loadScript (src) {
  var script = document
      .createElement('script')
  script.src = src
  document
      .getElementsByTagName('head')[0]
      .appendChild(script)
}

function resetPages () {
  PAGES.forEach(i => {
    window[i.id].style.display = 'none'
  })
}

function goTo (url) {
  history.pushState(null, url, url)
  initPage()
}

function initPage () {
  resetPages()
  const page = PAGES
      .find(i => i
          .paths
          .includes(location.pathname)
      ) || PAGES[0]
  loadScript(`/modules/${page.id}/page.js`)
  window[page.id].style.display = 'block'
}

//init
initPage()
