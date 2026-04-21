function fetchUser(maxUser, callback) {
  fetch(`https://dummyjson.com/users?limit=${maxUser}`).then(res => res.json()).then((userResponse) => {
    callback(userResponse.users)
  });
}


function fetchCarts(userId = null, callback) {
  fetch(`https://dummyjson.com/carts?limit=10&userId=${userId}`).then(res => res.json()).then((cartsResponse) => {
    callback(cartsResponse.carts)
  })

}

function fetchProducts(userId = null, callback) {
  fetch(`https://dummyjson.com/products?limit=20&userId=${userId}`).then(res => res.json()).then((productsResponse) => {
    callback(productsResponse.products)
  })
}

function processUser(data, callback){
  userContainer.innerHTML = '<img src="assets/Loading.gif" style="width:70px; height:70px;">'
  setTimeout(callback,1000)
}
function processCarts(data,callback){
  tableContainer2.innerHTML = '<img src="assets/Loading.gif" style="width:70px; height:70px;">'
  setTimeout(callback,2000)
}
function processProducts(data,callback){
  tableContainer.innerHTML = '<img src="assets/Loading.gif" style="width:70px; height:70px;">'
  setTimeout(callback,3000)
}