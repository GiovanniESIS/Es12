
let maxUser = 10

function fetchUser(maxUser) {
  return fetch(`https://dummyjson.com/users?limit=${maxUser}`).then(res => res.json())
}

function fetchCarts(userId = null) {
  return fetch(`https://dummyjson.com/carts?limit=10&userId=${userId}`).then(res => res.json())
}

function fetchProducts(userId = null) {
  return fetch(`https://dummyjson.com/products?limit=20&userId=${userId}`).then(res => res.json())
}

function processUser(data) {
  return new Promise((resolve, reject) => {
    userContainer.innerHTML = '<img src="assets/Loading.gif" style="width:70px; height:70px;">'
    setTimeout(function () {
      resolve(data)
    }, 1000)
  })
}

function processCarts(data) {
  return new Promise((resolve, reject) => {
    tableContainer2.innerHTML = '<img src="assets/Loading.gif" style="width:70px; height:70px;">'
    setTimeout(function () {
      resolve(data)
    }, 2000)
  })
}

function processProducts(data,) {
  return new Promise((resolve, reject) => {
    tableContainer.innerHTML = '<img src="assets/Loading.gif" style="width:70px; height:70px;">'
    setTimeout(function () {
      resolve(data)
    }, 3000)
  })
}


fetchUser(maxUser).then(userResponse => {
  return processUser(userResponse.users)
})
  .then(userList => {
    let userIds = userList.map(item => {
      return item.id
    })
    renderUserList(userList)
    return fetchCarts(userIds)
  })
  .then(cartList => {
    return processCarts(cartList.carts)
  })
  .then(cartList => {
    let productsIds = cartList.map(item => {
      let cartProductsId = item.products.map(item => {
        return item.id
      })
      return cartProductsId
    })
    productsIds = productsIds.flat()
    renderCarts(cartList)
    return fetchProducts(productsIds)
  })
  .then(productsList => {
    return processProducts(productsList.products)
  }).then(productsList => {
    renderProducts(productsList)
  })