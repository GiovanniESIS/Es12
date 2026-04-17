const user_interface = document.getElementById('user-profile-id')
const appear_ul = document.getElementById('appear-ul')
const btnSee = document.getElementById('btn-card-actions')
const userContainer = document.getElementById('client-list-id')
const tableContainer = document.getElementById('bodyTable')
const tableContainer2 = document.getElementById('bodyTable2')
const modal = document.getElementsByClassName('modal-shadow')[0]
const nameInput = document.getElementById('name')
const surnameInput = document.getElementById('surname')
const companyInput = document.getElementById('company')
const btnClose = document.getElementById('close')
const saving = document.getElementById('saving')
let maxUser = 10
let userList = []
let show = false
function userData(maxUser) {
  fetch(`https://dummyjson.com/users?limit=${maxUser}`).then(res => res.json()).then((userResponse) => {

    console.log(userResponse.users)
    userList = userResponse.users
    renderUserList()
  });
}

function renderUserList() {
  userContainer.innerHTML = ''
  userList.forEach(item => {

    const rowDiv = document.createElement('div')
    const custmoButton = document.createElement('button')
    const divAvatar = document.createElement('div')
    const spanPrice = document.createElement('span')
    const divInfo = document.createElement('div')
    const divPrice = document.createElement('div')


    rowDiv.classList = 'row-list'
    divAvatar.classList = 'client-avatar'
    divAvatar.innerHTML = `<img src="${item.image}" alt="Client Avatar">`
    rowDiv.appendChild(divAvatar)
    custmoButton.classList = 'custom-btn'
    custmoButton.textContent = "Modifica"
    divInfo.classList = 'client-info'
    divInfo.innerHTML = `<h5>${item.firstName + " " + item.lastName}</h5> <h6>${item.company.title}</h6>`
    custmoButton.addEventListener('click', function () {
      modificaUtente(item)
    })
    divInfo.appendChild(custmoButton)

    rowDiv.appendChild(divInfo)
    divPrice.classList = 'client-price'
    spanPrice.textContent = '€ 1.200'
    divPrice.appendChild(spanPrice)

    rowDiv.appendChild(divPrice)
    userContainer.appendChild(rowDiv)
  });
}

userData(maxUser)

btnClose.addEventListener('click', function () {
  showModal()
})

function creaUtente() {
    //da creare
}

function modificaUtente(utente) {
  showModal()
  nameInput.value = utente.firstName
  surnameInput.value = utente.lastName
  companyInput.value = utente.company.title
  saving.addEventListener('click', function () {
    saveUser(nameInput.value, surnameInput.value, companyInput.value, utente)
  },{ once: true })
}
function showModal() {
  if (modal.classList.contains('flex')) {
    console.log(1)
    modal.classList = 'modal-shadow'
    return
  } else {
    console.log(2)
    modal.classList = 'modal-shadow flex'
    return
  }
}

function saveUser(nameIn, surnameIn, companyIn, utente) {
  //da sistemare e ritornarci
  if (nameIn != utente.firstName) {

    console.log(utente.firstName)
  }
  if (surnameIn != utente.lastName) {

    console.log(utente.lastName)
  }
  if (companyIn != utente.company.title) {

    console.log(utente.company.title)
  }
  
  showModal()
}
btnSee.addEventListener('click', function () {
  if (show) {
    maxUser = 10;
  } else {
    maxUser = 40;
  }
  show = !show
  console.log(show)
  userContainer.innerHTML = ''
  userData(maxUser)
})

user_interface.addEventListener('click', function (el) {
  console.log(el, this)

  appear_ul.classList.toggle('open')
})


const carts = fetch('https://dummyjson.com/carts?limit=2').then(res => res.json()).then((cartsResponse) => {
  cartsResponse.carts.forEach(carts => {
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
    carts.products.forEach(item => {

      const tr = document.createElement('tr')
      const tdId = document.createElement('td')
      const tdNomeProdotto = document.createElement('td')
      const tdQuantita = document.createElement('td')
      const tdTotale = document.createElement('td')
      tdId.textContent = item.id;
      tdNomeProdotto.innerHTML = `<img style=display:flex; width=50px src="${item.thumbnail}" alt="Products Avatar"> ${item.title}`;
      tdQuantita.textContent = item.quantity;
      tdTotale.textContent = "€ " + Math.round(item.total);
      tr.appendChild(tdId)
      tr.appendChild(tdNomeProdotto)
      tr.appendChild(tdQuantita)
      tr.appendChild(tdTotale)
      tableContainer.appendChild(tr)
    })
  });

})
document
  .querySelector('aside nav  ul li.fixed')
  .addEventListener('click', function (link) {
    this.classList.toggle('open')
  })
/*
<tr class="table-row">
                                <td class="col nome">Piattaforma Ecommerce</td>
                                <td class="col cliente">Luca Bianchi</td>
                                <td class="col-stato"><span class="badge in-progress">In corso</span></td>

                            </tr>




 <tr>
                            <td>F0123</td>
                            <td>Tech Solutione</td>
                            <td class="col-stato"><span class="badge success">Pagata</span></td>
                            <td>€ 3.500</td>
                        </tr>











  <div class="row-list">
                            <div class="client-avatar">
                                <img src="assets/avatars/1.png" alt="Client Avatar">
                            </div>
                            <div class="client-info">
                                <h5>Luca Bianchi</h5>
                                <h6>TechSolution</h6>
                            </div>
                            <div class="client-price">
                                <span>€ 1.200</span>
                            </div>
  </div>
*/