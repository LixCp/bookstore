const searchForm = document.querySelector('.search-form')
const loginFormContainer = document.querySelector('.login-form-container')

document.querySelector('#login-btn').onclick = ()=>{
    loginFormContainer.classList.toggle('active')
}
document.querySelector('#close-login-btn').onclick = ()=>{
    loginFormContainer.classList.remove('active')
}

document.querySelector('#search-btn').onclick = ()=>{
    searchForm.classList.toggle('active')
}
window.onscroll = ()=>{
    searchForm.classList.remove('active')
        if(window.scrollY > 80){
            document.querySelector('.header .header-2').classList.add('active')
        }else{
            document.querySelector('.header .header-2').classList.remove('active')
        }
}
window.onload = ()=>{
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active')
    }else{
        document.querySelector('.header .header-2').classList.remove('active')
    }
}