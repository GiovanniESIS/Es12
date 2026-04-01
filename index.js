
const btn_link = document.getElementById('link-click');
const list_show = document.getElementById('list-hidden');


btn_link.addEventListener('click', function () {
    list_show.classList.toggle('open');
});