//Resposive Nav Bar
const mySidebox = document.querySelector(".sidebox");
const myMenu = document.querySelector(".menu i");
const closeBtn = document.querySelector(".closebtn")
const myActive = document.querySelector(".active")
const myBody = document.querySelector("body")
// const myLogo = document.querySelector(".logo")
const myNav = document.querySelector("nav")

myBody.addEventListener("click", () => {
    console.log(1);
})

myMenu.addEventListener("click", () => {
    mySidebox.classList.add("active");
    myMenu.style.display = 'none'
    myNav.classList.add("active1") 

})
closeBtn.addEventListener("click", () => {
    mySidebox.classList.remove('active')
    myMenu.style.display = 'block'
    myNav.classList.remove("active1") 

} )




