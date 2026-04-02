
const btn_link = document.getElementById('link-click');
const list_show = document.getElementById('list-hidden');
const user_interface = document.getElementById('user-profile-id')
const appear_ul = document.getElementById('appear-ul')
btn_link.addEventListener('click', function () {
    list_show.classList.toggle('open');
});


user_interface.addEventListener('click', function () {
    appear_ul.classList.toggle('open');
});
