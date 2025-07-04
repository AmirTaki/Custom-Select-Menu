const select = document.querySelector(".select")
const options_list = document.querySelector(".options-list")
const options = document.querySelectorAll(".options")


// show & hide options list

select.addEventListener("click", (e)=>{
    options_list.classList.toggle("active")
    select.querySelector(".fa-angle-down").classList.toggle("fa-angle-up")
})
