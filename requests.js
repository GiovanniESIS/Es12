function fetchUser(maxUser) {
  fetch(`https://dummyjson.com/users?limit=${maxUser}`).then(res => res.json()).then((userResponse) => {

    console.log(userResponse.users)
    userList = userResponse.users
    renderUserList()
  });
}


function fetchCarts(userId = null) {
  fetch(`https://dummyjson.com/carts?limit=10&userId=${userId}`).then(res => res.json()).then((cartsResponse) => {
    cartList = cartsResponse.carts
    renderCarts()
  })

}

function fetchProducts(userId = null) {
  fetch(`https://dummyjson.com/products?limit=20&userId=${userId}`).then(res => res.json()).then((productsResponse) => {
    productsList = productsResponse.products
    console.log(productsResponse.products)
    renderProducts()
  })
}