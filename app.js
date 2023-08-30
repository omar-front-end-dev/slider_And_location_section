const btnScrollToTop = document.querySelector(".scroll__top");
const navLinks = document.querySelectorAll(".nav__link");
const scrollBar = document.querySelector(".scroll__bar");
window.addEventListener("scroll", ()=>{
    let mainHight = (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    let percentage = document.documentElement.scrollTop / mainHight;
    scrollBar.style.width = `${percentage * 100}%`
    scrollToTop()
});
scrollToTop = ()=>{
    if (window.scrollY > 400) {
        btnScrollToTop.style.display = "block"
    }else{
        btnScrollToTop.style.display = "none"
    }
};

btnScrollToTop.addEventListener("click", ()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

navLinks.forEach((item) =>{
    item.addEventListener("click", (e)=>{
        e.preventDefault()
        let element = document.getElementById(item.dataset.target);
        window.scrollTo({
            top: element.offsetTop - 54,
            behavior: "smooth"
        });
    });
});