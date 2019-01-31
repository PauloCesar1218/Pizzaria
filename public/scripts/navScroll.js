document.addEventListener('scroll', () => {
    console.log($(document).scrollTop());
    const navbar = document.querySelector('nav');
    const navItens = document.querySelectorAll('a');
    if ($(document).scrollTop() >= 100) {
        $(navbar).css({
            "padding":"0.5rem 1rem"
        })
        for (const item of navItens) {
            item.classList.add('text-dark');
        }
        $(navbar).addClass('bg-light');
    } else {
        $(navbar).css({
            "padding-top":"35px"
        })
        for (const item of navItens) {
            item.classList.remove('text-dark');
        }
        $(navbar).removeClass('bg-light');
    }
    
})