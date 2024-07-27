let navigate = document.querySelectorAll(".footer_parent_menu");
navigate.forEach(e => {
    e.addEventListener("click", (event) => {
        const findId = event.target.id;
        document.querySelectorAll(".footer_sub_menu").forEach(no =>{
            no.classList.remove("active");
        })
        document.querySelectorAll(".footer_parent_menu li h3").forEach(rem => {
            rem.style.color = "#dfd8be80"
        })
        const dropdown = document.getElementById(`${findId}Child`);
        document.getElementById(findId).style.color = "#dfd8be"
        dropdown.classList.toggle("active");

    })
})
window.addEventListener("scroll", () => {
    const header = document.querySelector("#header .header_inner");
    const scrollPosition = window.scrollY;
    if (scrollPosition > 50) {
        header.style.backgroundColor = '#000000d6';
        header.style.backdropFilter = "blur(10px)" // Change to desired color

    } else {
        header.style.backgroundColor = 'transparent'; // Original color
        header.style.backdropFilter = "" // Change to desired color
    }
})
console.log(window.outerWidth);
if(window.outerWidth < 992){
    const menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", (event) => {
    if(event.target.classList.contains("fa-bars")){
        event.target.classList.remove("fa-bars")
        event.target.classList.add("fa-times")
    }  
    else if(event.target.classList.contains("fa-times")){
        event.target.classList.remove("fa-times")
        event.target.classList.add("fa-bars")
    }  
    document.getElementById("navBar").classList.toggle("active");

})
}


