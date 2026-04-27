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
const userId = document.getElementsByName('userId')[0]
const btnClose = document.getElementById('close')
const saving = document.getElementById('saving')
const addBtn = document.getElementById('add-clients')
const numbersAlreadyGenerated = []
let show = false
let creation = false


btnClose.addEventListener('click', function () {
  switchModal()
})

addBtn.addEventListener('click', function () {
  creation = true;

  nameInput.value = ''
  surnameInput.value = ''
  companyInput.value = ''

  switchModal();
})

function creaUtente() {
  const generateId = Math.floor(Math.random() * 900);
  if (numbersAlreadyGenerated != []) {
    numbersAlreadyGenerated.push(generateId)
    console.log("ID AGGIUNTO: " + numbersAlreadyGenerated)
  } else {
    for (x of numbersAlreadyGenerated) {
      if (x == generateId) {
        console.log(x + " gia è stato usato")
        generateId = Math.floor(Math.random() * 900);
      }
    }
  }

  userListStore.push({ 
    id: generateId, 
    image: "assets/avatars/2.png", 
    firstName: nameInput.value ? nameInput.value : "Nome non definito", 
    lastName: surnameInput.value ? surnameInput.value : "Cognome non definito", 
    company: { title: companyInput.value ? companyInput.value : "Azienda non definita" 
    } })
}
saving.addEventListener('click', function () {
  saveUser()
})
function modificaUtente(utente) {
  creation = false;
  switchModal()
  userId.value = utente.id
  nameInput.value = utente.firstName
  surnameInput.value = utente.lastName
  companyInput.value = utente.company.title

}

function filtraUtenti(utente) {
  fetchCarts(utente.id)
  fetchProducts(utente.id)
}

function switchModal() {
  if (modal.classList.contains('flex')) {
    console.log(1)
    modal.classList = 'modal-shadow'
  } else {
    console.log(2)
    modal.classList = 'modal-shadow flex'
  }
}

function saveUser() {
  if (creation) {
    creaUtente()
    creation = false
  } else {
    userListStore = userListStore.map(item => {
      if (userId.value == item.id) {
        item = { ...item, firstName: nameInput.value, lastName: surnameInput.value, company: { ...item.company, title: companyInput.value } }
        console.log(item)
      }
      return item
    })

  }
  renderUserList()
  switchModal()
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
  fetchUser(maxUser)
})

user_interface.addEventListener('click', function (el) {
  console.log(el, this)

  appear_ul.classList.toggle('open')
})



//Open and close menu/aside menu 
document
  .querySelector('aside nav  ul li.fixed')
  .addEventListener('click', function (link) {
    this.classList.toggle('open')
  })
