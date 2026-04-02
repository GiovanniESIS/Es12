
const user_interface = document.getElementById('user-profile-id')
const appear_ul = document.getElementById('appear-ul')

user_interface.addEventListener('click', function () {
  appear_ul.classList.toggle('open')
})


document
  .querySelector('aside nav  ul li.fixed')
  .addEventListener('click', function (link) {
    this.classList.toggle('open')
  })
