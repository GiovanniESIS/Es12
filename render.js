let userListStore = []
let cartListStore = []
let productsListStore = []

function renderUserList(userList = null) {
  if(userList){
    userListStore = userList
  } else {
    userList = userListStore
  }
  userContainer.innerHTML = ''
  console.log(userList)
  userList.forEach(item => {
    const rowDiv = document.createElement('div')
    const custmoButton = document.createElement('button')
    const filterButton = document.createElement('button')
    const divAvatar = document.createElement('div')
    const spanPrice = document.createElement('span')
    const divInfo = document.createElement('div')
    const divPrice = document.createElement('div')


    rowDiv.classList = 'row-list'
    divAvatar.classList = 'client-avatar'
    divAvatar.innerHTML = `<img src="${item.image}" alt="Client Avatar">`
    rowDiv.appendChild(divAvatar)
    divInfo.classList = 'client-info'
    divInfo.innerHTML = `<h5>${item.firstName + " " + item.lastName}</h5> <h6>${item.company.title}</h6>`

    rowDiv.appendChild(divInfo)
    divPrice.classList = 'client-price'
    spanPrice.textContent = '€ 1.200'
    rowDiv.appendChild(divPrice)
    custmoButton.addEventListener('click', function () {
      modificaUtente(item)
    })
    custmoButton.classList = 'custom-btn modify-btn'
    custmoButton.textContent = "Modifica"
    rowDiv.appendChild(custmoButton)
    filterButton.addEventListener('click', function () {
      filtraUtenti(item)
    })
    filterButton.classList = 'filter-btn custom-btn'
    filterButton.textContent = "Filtra"
    rowDiv.appendChild(filterButton)
    divPrice.appendChild(spanPrice)


    userContainer.appendChild(rowDiv)
  });
}

function renderCarts(cartList = null){
  if(cartList){
    cartListStore = cartList
  } else {
    cartList = cartListStore
  }
    tableContainer2.innerHTML = ''
    cartList.forEach(carts => {
      const tr = document.createElement('tr')
      const tdTotalProduct = document.createElement('td')
      const tdQuantitàProduct = document.createElement('td')
      const tdTotalePrezzo = document.createElement('td')
      tdTotalProduct.textContent = carts.totalProducts;
      tdQuantitàProduct.textContent = carts.totalQuantity;
      tdTotalePrezzo.textContent = "€ " + Math.round(carts.total);
      tr.appendChild(tdTotalProduct)
      tr.appendChild(tdQuantitàProduct)
      tr.appendChild(tdTotalePrezzo)
      tableContainer2.appendChild(tr)
    });
}

function renderProducts(productsList){
  if(productsList){
    productsListStore = productsList
  } else {
    productsList = productsListStore
  }
  tableContainer.innerHTML = ''
    console.log("ciao")
    console.log(productsList)
    productsList.forEach(item => {
        const tr = document.createElement('tr')
        const tdId = document.createElement('td')
        const tdNomeProdotto = document.createElement('td')
        const tdQuantita = document.createElement('td')
        const tdTotale = document.createElement('td')
        tdId.textContent = item.id;
        tdNomeProdotto.innerHTML = `<img style=display:flex; width=50px src="${item.thumbnail}" alt="Products Avatar"> ${item.title}`;
        tdQuantita.textContent = item.category;
        tdTotale.textContent = "€ " + Math.round(item.price);
        tr.appendChild(tdId)
        tr.appendChild(tdNomeProdotto)
        tr.appendChild(tdQuantita)
        tr.appendChild(tdTotale)
        tableContainer.appendChild(tr)
      })
}