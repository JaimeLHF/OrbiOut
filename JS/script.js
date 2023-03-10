

const dropdownMenu = document.getElementById("dropdown-menu");
const userListItem = document.getElementById("header_user_list--item_user");
const dropdown = document.getElementById('dropdown-menu')

const arrow = document.getElementById('sidebar_menu_btn')
const side = document.getElementById('sidebar_menu')


arrow.addEventListener('click', () => {
    side.classList.toggle('sidebar_menu_active')
})

userListItem.addEventListener("click", () => {
    dropdownMenu.classList.toggle("drop-active");
});


window.addEventListener("click", function (event) {


    if (event.target != userListItem && event.target.parentNode != dropdown) {

        dropdownMenu.classList.remove("drop-active");

    }

});




const flags = document.getElementById('list_flags')
const language = document.getElementById('flag_language')

language.addEventListener('click', () => {
    flags.classList.toggle("flags-active");
})


window.addEventListener("click", function (event) {


    if (event.target != language && event.target.parentNode != language) {

        flags.classList.remove("flags-active");

    }
});


flags.addEventListener('click', (event) => {

    language.setAttribute("src", `assets/img/flags/${event.target.parentNode.id}.png`)

})