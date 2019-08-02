const myHomePage = {
  render () {
    const el = window.home
    el.innerHTML = `
  <h1>
    Welcome to my pizza. Here are the list of options:
  </h1>
  <div id="cart-count"></div>
  <div>
    <button onclick="addCart(4, myHomePage.updateCartCount)">Add Cart</button>
  </div>
  <br/>
  <div id="product-list"></div>`
  },
  getCart () {
    return getStorage(STORAGE_ID) || []
  },
  updateCartCount () {
    const el = window['cart-count']
    el.innerHTML = this.getCart().length
  }
}

myHomePage.render()
myHomePage.updateCartCount()
