
const btn_link = document.getElementById('link-click');
const list_show = document.getElementById('list-hidden');

btn_link.addEventListener('click', function () {
    if(list_show.style.display === 'none') {
        console.log('ciao');
        list_show.style.display = 'block';
    } else {
        list_show.style.display = 'none';
    }
});