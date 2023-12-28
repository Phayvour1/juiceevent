const faq = document.querySelectorAll(".faq_right")

faq.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    }
    
    )
}

)

window.onload = function () {

    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');

    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    })

}